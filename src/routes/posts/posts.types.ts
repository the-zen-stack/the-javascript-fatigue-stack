export interface Post {
  id: number;
  title: string;
  content: string;
  likes?: number;
}

export interface ViewData {
  posts: Post[];
}
