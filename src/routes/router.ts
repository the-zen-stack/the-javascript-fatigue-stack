import type { IncomingMessage, ServerResponse } from "node:http";
import { join } from "node:path";
import { parse } from "node:url";
import { StaticFilesHandler } from "../core/static-files-handler.core.ts";
import { postsRoutes } from "./posts/posts.routes.ts";
import { homeRoutes } from "./home/home.routes.ts";

const __dirname = new URL(".", import.meta.url).pathname;

export class Router {
	async handle(req: IncomingMessage, res: ServerResponse): Promise<void> {
		const parsedUrl = parse(req.url ?? "", true);
		const path = parsedUrl.pathname ?? "/";
		const method = req.method ?? "GET";

		// Static file handling
		if (path.startsWith("/static/")) {
			const staticPath = join(__dirname, "../", parsedUrl.pathname ?? "/");
			const staticController = new StaticFilesHandler();
			return staticController.serve(req, res, staticPath);
		}

		// Routes
		const routes: Record<
			string,
			(req: IncomingMessage, res: ServerResponse) => Promise<void>
		> = {
			...postsRoutes,
			...homeRoutes,
		};

		const route = `${method} ${path}`;
		const handler = routes[route];

		if (handler) {
			await handler(req, res);
		} else {
			// 404 handler
			res.writeHead(404, { "Content-Type": "text/html" });
			res.end("<h1>404 - Page Not Found</h1>");
		}
	}
}
