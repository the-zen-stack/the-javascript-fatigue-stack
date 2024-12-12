const http = require('http');
const router = require('./routes/router');

const server = http.createServer((req, res) => {
  router.handle(req, res).catch(error => {
    console.error('Server error:', error);
    res.writeHead(500, { 'Content-Type': 'text/html' });
    res.end('<h1>500 - Internal Server Error</h1>');
  });
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});