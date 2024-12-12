import type { IncomingMessage, ServerResponse } from 'node:http';
import { PostModel } from '../models/Post.ts';
import { View } from '../utils/view.ts';

class PostController {
  async home(req: IncomingMessage, res: ServerResponse): Promise<void> {
    const postModel = new PostModel();
    const posts = postModel.getAllPosts();
    const view = new View();
    const html = await view.render('home', { posts });
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(html);
  }

  async newPostForm(req: IncomingMessage, res: ServerResponse): Promise<void> {
    const view = new View();
    const html = await view.render('new-post');
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(html);
  }

  async createPost(req: IncomingMessage, res: ServerResponse): Promise<void> {
    let body = '';
    req.on('data', (chunk) => {
      body += chunk.toString();
    });

    req.on('end', () => {
      const formData = new URLSearchParams(body);
      const postModel = new PostModel();
      postModel.addPost(formData.get('title') ?? '', formData.get('content') ?? '');
      res.writeHead(302, { Location: '/' });
      res.end();
    });
  }
}

export const postController = new PostController();
