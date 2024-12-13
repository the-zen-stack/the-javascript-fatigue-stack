import type { IncomingMessage, ServerResponse } from "node:http";
import { PostController } from "./posts.controller.ts";

const postController = new PostController();
export const postsRoutes: Record<
	string,
	(req: IncomingMessage, res: ServerResponse) => Promise<void>
> = {
	"GET /posts": (req, res) => postController.posts(req, res),
	"GET /posts/new-post": (req, res) => postController.newPostForm(req, res),
	"POST /posts/new-post": (req, res) => postController.createPost(req, res),
};
