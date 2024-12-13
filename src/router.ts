import type { IncomingMessage, ServerResponse } from 'node:http';
import { parse } from 'node:url';
import { postsRoutes } from './routes/posts/posts.routes.ts';
import { staticRoutes } from './routes/static/staticRoutes.ts';

export class Router {
  async handle(req: IncomingMessage, res: ServerResponse): Promise<void> {
    const parsedUrl = parse(req.url ?? '', true);
    const path = parsedUrl.pathname ?? '/';
    const method = req.method ?? 'GET';

    // Routes
    const routes: Record<string, (req: IncomingMessage, res: ServerResponse) => Promise<void>> = {
      ...postsRoutes,
      ...staticRoutes,
    };

    console.log('routes', routes);

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
