import { parse } from 'node:url';
import type { IncomingMessage, ServerResponse } from 'node:http';
import { postController } from '../controllers/postController.ts';
import { StaticController } from '../controllers/staticController.ts';

export class Router {
  async handle(req: IncomingMessage, res: ServerResponse): Promise<void> {
    const parsedUrl = parse(req.url ?? '', true);
    const path = parsedUrl.pathname ?? '/';
    const method = req.method ?? 'GET';

    // Static file handling
    if (path.startsWith('/static/')) {
      const staticController = new StaticController();
      return staticController.serveStatic(req, res, path);
    }

    // Routes
    const routes: Record<string, (req: IncomingMessage, res: ServerResponse) => Promise<void>> = {
      'GET /': postController.home.bind(postController),
      'GET /new': postController.newPostForm.bind(postController),
      'POST /new': postController.createPost.bind(postController),
    };

    const route = `${method} ${path}`;
    const handler = routes[route];

    if (handler) {
      await handler(req, res);
    } else {
      // 404 handler
      res.writeHead(404, { 'Content-Type': 'text/html' });
      res.end('<h1>404 - Page Not Found</h1>');
    }
  }
}
