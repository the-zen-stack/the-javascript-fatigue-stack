document.addEventListener('DOMContentLoaded', () => {
  // Like button functionality
  document.querySelectorAll('.btn-like').forEach(button => {
    button.addEventListener('click', () => {
      const likesCount = button.querySelector('.likes-count');
      const currentLikes = parseInt(likesCount.textContent);
      likesCount.textContent = currentLikes + 1;
      button.classList.add('liked');
    });
  });

  // Form validation and enhancement
  const newPostForm = document.getElementById('newPostForm');
  if (newPostForm) {
    newPostForm.addEventListener('submit', (e) => {
      const title = document.getElementById('title').value.trim();
      const content = document.getElementById('content').value.trim();
      
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
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
});