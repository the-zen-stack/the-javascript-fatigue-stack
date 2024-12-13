import { createSelector } from "../../../core/id.core.ts";

const NewPostScript = /*js*/ `
  const form = document.querySelector('#newPostForm');

  // Form validation utilities
  const validateMinLength = (value, minLength) => {
    return value.trim().length >= minLength;
  };

  const showError = (message) => {
    alert(message); // In a real app, replace with better UI feedback
  };

  if (form) {
    form.addEventListener('submit', (e) => {
      const title = document.querySelector('#title').value;
      const content = document.querySelector('#content').value;

      if (!validateMinLength(title, 3)) {
        e.preventDefault();
        showError('Title must be at least 3 characters long');
        return;
      }

      if (!validateMinLength(content, 10)) {
        e.preventDefault();
        showError('Content must be at least 10 characters long');
        return;
      }
    });
  }
`;

const newPostId = createSelector("new-post");
const btnId = createSelector("btn");

const NewPostStyle = /*css*/ `
.${newPostId} {
  max-width: 800px;
  margin: 0 auto;
  background: var(--color-background);
  border: 1px solid var(--color-border);
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.${newPostId} h1 {
  color: var(--color-text-primary);
  margin-bottom: 2rem;
  text-align: center;
}

.${btnId} {
  background: var(--color-primary);
  padding: 0.5rem;
  border: 1px solid var(--color-border);
}
`;

export const NewPost = (): string => /*html*/ `
<div class="${newPostId}">
  <h1>Create New Post</h1>
  <form method="POST" action="/new-post" id="newPostForm">
    <div class="form-group">
      <label for="title">Title</label>
      <input type="text" id="title" name="title" placeholder="Post Title" required>
    </div>
    <div class="form-group">
      <label for="content">Content</label>
      <textarea id="content" name="content" placeholder="Post Content" required></textarea>
    </div>
    <button type="submit" class="${btnId}">Create Post</button>
  </form>
</div>
<script type="text/javascript">
  ${NewPostScript}
</script>
<style>
  ${NewPostStyle}
</style>
`;
