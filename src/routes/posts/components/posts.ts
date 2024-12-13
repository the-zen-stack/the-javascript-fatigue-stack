import { createSelector } from "../../../core/id.core.ts";
import type { Post } from "../posts.types.ts";

type PostProps = {
	title: string;
	content: string;
};

const postId = createSelector("post");
const btnLikeId = createSelector("btnLikeId");
const likesCountClass = createSelector("likesCount");
const postsId = createSelector("posts");

const PostsStyle = /*css*/ `
.${postsId}-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

.${postId} {
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  transition: transform 0.3s;
}

.${postId}:hover {
  transform: translateY(-5px);
}

.${postId} h2 {
  color: #2c3e50;
  margin-bottom: 1rem;
}

.${btnLikeId} {
  color: white;
  background: var(--primary-color);
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 1rem;
  transition: background-color 0.3s;
}

.${btnLikeId}:hover {
  background-color: #c0392b;
}
`;

const PostsScript = /*js*/ `
const buttons = document.querySelectorAll('.${btnLikeId}');
for (const button of buttons) {
  button.addEventListener('click', () => {
    const likesCount = button.querySelector('.${likesCountClass}');
    if (!likesCount) return;

    const currentLikes = Number.parseInt(likesCount?.textContent ?? '0');
    likesCount.textContent = String(currentLikes + 1);
    button.classList.add('liked');
  });
}
`;

const SinglePost = ({ title, content }: PostProps): string => /*html*/ `
<article class="${postId}">
  <h2>${title}</h2>
  <p>${content}</p>
  <button class="${btnLikeId}" data-post-id="{{id}}">
    <span class="${likesCountClass}">0</span> Likes
  </button>
</article>
`;

export const Posts = ({ posts }: { posts: Post[] }): string => /*html*/ `
<div class="${postsId}">
    <h1>Blog Posts</h1>
    <div class="${postsId}-grid">
        ${posts.map((post) => SinglePost(post)).join("")}
    </div>
</div>
<script>${PostsScript}</script>
<style>${PostsStyle}</style>
`;
