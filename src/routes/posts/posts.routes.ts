import type { IncomingMessage, ServerResponse } from "node:http";
import { StaticFilesHandler } from "../../core/static-files-handler.core.ts";
import { PostController } from "./posts.controller.ts";

export const staticHandler = new StaticFilesHandler();
const postController = new PostController();

export const postsRoutes: Record<
	string,
	(req: IncomingMessage, res: ServerResponse) => Promise<void>
> = {
	"GET /": (req, res) => postController.posts(req, res),
	"GET /new-post": (req, res) => postController.newPostForm(req, res),
	"POST /new-post": (req, res) => postController.createPost(req, res),
};