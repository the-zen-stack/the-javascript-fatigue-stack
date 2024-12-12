const Post = require('../models/Post');
const view = require('../utils/view');

class PostController {
  async home(req, res) {
    const posts = Post.getAllPosts();
    const html = await view.render('home', { posts });
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(html);
  }

  async newPostForm(req, res) {
    const html = await view.render('newPost');
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(html);
  }

  async createPost(req, res) {
    let body = '';
    req.on('data', chunk => {
      body += chunk.toString();
    });
    
    req.on('end', () => {
      const formData = new URLSearchParams(body);
      Post.addPost(formData.get('title'), formData.get('content'));
      res.writeHead(302, { Location: '/' });
      res.end();
    });
  }
}

module.exports = new PostController();