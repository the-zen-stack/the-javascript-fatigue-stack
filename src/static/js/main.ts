document.addEventListener('DOMContentLoaded', () => {
  // Like button functionality
  const likeButtons = document.querySelectorAll('.btn-like');
  for (const button of likeButtons) {
    button.addEventListener('click', () => {
      const likesCount = button.querySelector('.likes-count');
      if (likesCount) {
        const currentLikes = Number(likesCount?.textContent ?? 0);
        likesCount.textContent = String(currentLikes + 1);
        button.classList.add('liked');
      }
    });
  }

  // Form validation and enhancement
  const newPostForm = document.getElementById('newPostForm');
  if (newPostForm) {
    newPostForm.addEventListener('submit', (e) => {
      const title = (document.getElementById('title') as HTMLInputElement)?.value?.trim();
      const content = (document.getElementById('content') as HTMLInputElement)?.value.trim();

      if (title.length < 3) {
        e.preventDefault();
        alert('Title must be at least 3 characters long');
        return;
      }

      if (content.length < 10) {
        e.preventDefault();
        alert('Content must be at least 10 characters long');
        return;
      }
    });
  }

  // Add smooth scrolling
  const anchors = document.querySelectorAll('a[href^="#"]');
  for (const anchor of anchors) {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth',
      });
    });
  }
});
