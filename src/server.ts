import { createServer, type IncomingMessage, type ServerResponse } from 'node:http';
import { Router } from './router.ts';
console.log('#', Router);

const server = createServer(async (req: IncomingMessage, res: ServerResponse) => {
  try {
    const router = new Router();
    await router.handle(req, res);
  } catch (error) {
    console.error('Server error:', error);
    res.writeHead(500, { 'Content-Type': 'text/html' });
    res.end('<h1>500 - Internal Server Error</h1>');
  }
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
