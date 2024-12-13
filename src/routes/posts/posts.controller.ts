import type { IncomingMessage, ServerResponse } from 'node:http';
import { PostModel } from './posts.model.ts';
import { PostsView } from './posts.view.ts';

const postModel = new PostModel();

export class PostController {
  async posts(req: IncomingMessage, res: ServerResponse): Promise<void> {
    const posts = postModel.getAllPosts();

    const view = new PostsView();
    const html = await view.renderPosts({ posts });

    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(html);
  }

  async newPostForm(req: IncomingMessage, res: ServerResponse): Promise<void> {
    const view = new PostsView();
    const html = await view.renderNewPostForm();
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
      postModel.addPost(formData.get('title') ?? '', formData.get('content') ?? '');
      res.writeHead(302, { Location: '/' });
      res.end();
    });
  }
}
