const url = require('url');
const postController = require('../controllers/postController');
const staticController = require('../controllers/staticController');

class Router {
  async handle(req, res) {
    const parsedUrl = url.parse(req.url, true);
    const path = parsedUrl.pathname;
    const method = req.method;

    // Static file handling
    if (path.startsWith('/static/')) {
      return staticController.serveStatic(req, res, path);
    }

    // Routes
    const routes = {
      'GET /': postController.home,
      'GET /new': postController.newPostForm,
      'POST /new': postController.createPost
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

module.exports = new Router();