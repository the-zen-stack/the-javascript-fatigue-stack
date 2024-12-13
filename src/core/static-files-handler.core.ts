import { readFile } from "node:fs/promises";
import type { IncomingMessage, ServerResponse } from "node:http";
import { extname } from "node:path";
import * as ts from "typescript";

const mimeTypes: Record<string, string> = {
	".css": "text/css",
	".js": "text/javascript",
	".ts": "application/typescript",
	".png": "image/png",
	".jpg": "image/jpeg",
	".jpeg": "image/jpeg",
	".ico": "image/x-icon",
	".html": "text/html",
	".json": "application/json",
	".map": "application/json",
};

export class StaticFilesHandler {
	private compilationCache: Map<string, string> = new Map();
	private enableCache: boolean;

	constructor() {
		// Check if the environment is in production mode
		this.enableCache = process.env.NODE_ENV === "production";
	}

	async serve(
		req: IncomingMessage,
		res: ServerResponse,
		urlPath: string,
	): Promise<void> {
		try {
			const filePath = urlPath;
			const ext = extname(urlPath).toLowerCase();

			// Special handling for TypeScript compilation
			if (ext === ".ts" && !urlPath.includes(".d.ts")) {
				const compiledContent = await this.compileTypeScript(filePath);

				// Set caching headers only in production
				const headers: Record<string, string> = {
					"Content-Type": "text/javascript",
				};
				if (this.enableCache) {
					headers["Cache-Control"] = "public, max-age=31536000, immutable";
				} else {
					headers["Cache-Control"] = "no-cache, no-store, must-revalidate";
					headers["Pragma"] = "no-cache";
					headers["Expires"] = "0";
				}

				res.writeHead(200, headers);
				res.end(compiledContent);
				return;
			}

			console.log("#", filePath);
			const content = await readFile(filePath);

			// Set caching headers based on environment
			const headers: Record<string, string> = {
				"Content-Type": mimeTypes[ext] || "application/octet-stream",
			};

			if (this.enableCache) {
				headers["Cache-Control"] = "public, max-age=31536000, immutable";
			} else {
				headers["Cache-Control"] = "no-cache, no-store, must-revalidate";
				headers["Pragma"] = "no-cache";
				headers["Expires"] = "0";
			}

			res.writeHead(200, headers);
			res.end(content);
		} catch (error) {
			console.error("Error serving static file:", error);

			if ((error as NodeJS.ErrnoException).code === "ENOENT") {
				res.writeHead(404, { "Content-Type": "text/plain" });
				res.end("File not found");
			} else {
				res.writeHead(500, { "Content-Type": "text/plain" });
				res.end("Internal server error");
			}
		}
	}

	private async compileTypeScript(filePath: string): Promise<string> {
		// Check cache first (only if caching is enabled)
		if (this.enableCache && this.compilationCache.has(filePath)) {
			const cachedContent = this.compilationCache.get(filePath);
			if (cachedContent) {
				return cachedContent;
			}
		}

		const sourceText = await readFile(filePath, "utf-8");
		const compilerOptions: ts.CompilerOptions = {
			module: ts.ModuleKind.ESNext,
			target: ts.ScriptTarget.ES2020,
			strict: false,
			esModuleInterop: true,
			skipLibCheck: true,
			moduleResolution: ts.ModuleResolutionKind.NodeNext,
		};

		const transpileResult = ts.transpileModule(sourceText, {
			compilerOptions: compilerOptions,
			fileName: filePath,
		});

		// Cache the compiled result only in production
		if (this.enableCache) {
			this.compilationCache.set(filePath, transpileResult.outputText);
		}

		return transpileResult.outputText;
	}
}
