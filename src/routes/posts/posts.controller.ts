import type { IncomingMessage, ServerResponse } from "node:http";
import { NewPost } from "./components/new-post.ts";
import { Posts } from "./components/posts.ts";
import { PostsPage } from "./posts.view.ts";
import { PostModel } from "./posts.model.ts";

const postModel = new PostModel();

export class PostController {
	async posts(req: IncomingMessage, res: ServerResponse): Promise<void> {
		const posts = postModel.getAllPosts();
		const html = PostsPage({ title: "Posts", content: Posts({ posts }) });

		res.writeHead(200, { "Content-Type": "text/html" });
		res.end(html);
	}

	async newPostForm(req: IncomingMessage, res: ServerResponse): Promise<void> {
		const html = PostsPage({
			title: "New Post",
			content: NewPost(),
		});

		res.writeHead(200, { "Content-Type": "text/html" });
		res.end(html);
	}

	async createPost(req: IncomingMessage, res: ServerResponse): Promise<void> {
		let body = "";
		req.on("data", (chunk) => {
			body += chunk.toString();
		});

		req.on("end", () => {
			const formData = new URLSearchParams(body);
			postModel.addPost(
				formData.get("title") ?? "",
				formData.get("content") ?? "",
			);

			res.writeHead(302, { Location: "/posts" });
			res.end();
		});
	}
}
