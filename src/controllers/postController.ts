import { IncomingMessage, ServerResponse } from 'node:http';
import { postModel } from '../models/Post.js';
import { view } from '../utils/view.js';

class PostController {
  async home(req: IncomingMessage, res: ServerResponse): Promise<void> {
    const posts = postModel.getAllPosts();
    const html = await view.render('home', { posts });
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(html);
  }

  async newPostForm(req: IncomingMessage, res: ServerResponse): Promise<void> {
    const html = await view.render('newPost');
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(html);
  }

  async createPost(req: IncomingMessage, res: ServerResponse): Promise<void> {
    let body = '';
    req.on('data', chunk => {
      body += chunk.toString();
    });
    
    req.on('end', () => {
      const formData = new URLSearchParams(body);
      postModel.addPost(formData.get('title') ?? '', formData.get('content') ?? '');
      res.writeHead(302, { Location: '/' });
      res.end();
    });
  }
}

export const postController = new PostController();