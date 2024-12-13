import { IncomingMessage, ServerResponse } from 'node:http';
import { PostController } from './posts.controller.ts';
import { StaticFilesHandler } from '../../core/static-files-handler.core.ts';
import { fileURLToPath } from 'node:url';

export const staticHandler = new StaticFilesHandler();
const __dirname = fileURLToPath(new URL('.', import.meta.url));
const postController = new PostController();

const staticFiles = staticHandler.serveFiles(
  ['/css/posts.page.css', '/css/new-post.page.css', '/ts/posts.page.ts', '/ts/post.component.ts'],
  {
    prefix: '/static/posts',
    dirName: __dirname,
  }
);

export const postsRoutes: Record<
  string,
  (req: IncomingMessage, res: ServerResponse) => Promise<void>
> = {
  'GET /': (req, res) => postController.posts(req, res),
  'GET /new-post': (req, res) => postController.newPostForm(req, res),
  'POST /new-post': (req, res) => postController.createPost(req, res),
  ...staticFiles,
};
