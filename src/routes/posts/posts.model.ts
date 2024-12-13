import type { Post } from "./posts.types.ts";

export class PostModel {
	private posts: Post[];

	constructor() {
		this.posts = [
			{
				id: 1,
				title: "First Post",
				content: "This is my first post content.",
				likes: 0,
			},
			{
				id: 2,
				title: "Second Post",
				content: "This is another post content.",
				likes: 0,
			},
		];
	}

	getAllPosts(): Post[] {
		return this.posts;
	}

	addPost(title: string, content: string): Post {
		const newPost: Post = {
			id: this.posts.length + 1,
			title,
			content,
			likes: 0,
		};
		this.posts.push(newPost);
		return newPost;
	}

	getPostById(id: number): Post | undefined {
		return this.posts.find((post) => post.id === id);
	}
}
