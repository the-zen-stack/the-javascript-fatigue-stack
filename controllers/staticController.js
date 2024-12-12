const fs = require('fs').promises;
const path = require('path');

const mimeTypes = {
  '.css': 'text/css',
  '.js': 'text/javascript',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.ico': 'image/x-icon'
};

class StaticController {
  async serveStatic(req, res, urlPath) {
    try {
      const filePath = path.join(__dirname, '..', urlPath);
      const content = await fs.readFile(filePath);
      const ext = path.extname(filePath);
      
      res.writeHead(200, { 'Content-Type': mimeTypes[ext] || 'text/plain' });
      res.end(content);
    } catch (error) {
      res.writeHead(404);
      res.end('File not found');
    }
  }
}

module.exports = new StaticController();