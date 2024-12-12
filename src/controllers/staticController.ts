import { readFile } from 'node:fs/promises';
import { extname, join } from 'node:path';
import type { IncomingMessage, ServerResponse } from 'node:http';
import { fileURLToPath } from 'node:url';
import * as ts from 'typescript';

const __dirname = fileURLToPath(new URL('.', import.meta.url));

const mimeTypes: Record<string, string> = {
  '.css': 'text/css',
  '.js': 'text/javascript',
  '.ts': 'application/typescript',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.ico': 'image/x-icon',
  '.html': 'text/html',
  '.json': 'application/json',
  '.map': 'application/json',
};

export class StaticController {
  private compilationCache: Map<string, string> = new Map();

  async serveStatic(req: IncomingMessage, res: ServerResponse, urlPath: string): Promise<void> {
    try {
      const filePath = join(__dirname, '../', urlPath);
      const ext = extname(urlPath).toLowerCase();

      // Special handling for TypeScript compilation
      if (ext === '.ts' && !urlPath.includes('.d.ts')) {
        const compiledContent = await this.compileTypeScript(filePath);
        res.writeHead(200, { 'Content-Type': 'text/javascript' });
        res.end(compiledContent);
        return;
      }

      const content = await readFile(filePath);
      res.writeHead(200, {
        'Content-Type': mimeTypes[ext] || 'application/octet-stream',
        'Cache-Control': 'no-cache, no-store, must-revalidate',
        Pragma: 'no-cache',
        Expires: '0',
      });
      res.end(content);
    } catch (error) {
      console.error('Error serving static file:', error);

      if ((error as NodeJS.ErrnoException).code === 'ENOENT') {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('File not found');
      } else {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('Internal server error');
      }
    }
  }

  private async compileTypeScript(filePath: string): Promise<string> {
    // Check cache first
    if (this.compilationCache.has(filePath)) {
      const cachedContent = this.compilationCache.get(filePath);
      if (cachedContent) {
        return cachedContent;
      }
    }

    const sourceText = await readFile(filePath, 'utf-8');
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

    // Cache the compiled result
    this.compilationCache.set(filePath, transpileResult.outputText);

    return transpileResult.outputText;
  }
}
