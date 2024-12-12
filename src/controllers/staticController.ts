import { readFile } from 'node:fs/promises';
import { join } from 'node:path';
import { IncomingMessage, ServerResponse } from 'node:http';
import { fileURLToPath } from 'node:url';

const __dirname = fileURLToPath(new URL('.', import.meta.url));

const mimeTypes: Record<string, string> = {
  '.css': 'text/css',
  '.js': 'text/javascript',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.ico': 'image/x-icon'
};

class StaticController {
  async serveStatic(req: IncomingMessage, res: ServerResponse, urlPath: string): Promise<void> {
    try {
      const filePath = join(__dirname, '../..', urlPath);
      const content = await readFile(filePath);
      const ext = urlPath.substring(urlPath.lastIndexOf('.'));
      
      res.writeHead(200, { 'Content-Type': mimeTypes[ext] || 'text/plain' });
      res.end(content);
    } catch (error) {
      res.writeHead(404);
      res.end('File not found');
    }
  }
}

export const staticController = new StaticController();