import type { IncomingMessage, ServerResponse } from 'node:http';
import { PostModel } from './posts.model.ts';
import { render } from '../../core/render.core.ts';
import { PostsPage } from './pages/posts.page.ts';
import { Posts } from './components/posts.ts';
import { NewPost } from './components/new-post.ts';

const postModel = new PostModel();

export class PostController {
  async posts(req: IncomingMessage, res: ServerResponse): Promise<void> {
    const posts = postModel.getAllPosts();
    const html = PostsPage({ title: 'Posts', content: Posts({ posts }) });

    render(req, res, html);
  }

  async newPostForm(req: IncomingMessage, res: ServerResponse): Promise<void> {
    const html = PostsPage({
      title: 'New Post',
      content: NewPost(),
    });

    render(req, res, html);
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
