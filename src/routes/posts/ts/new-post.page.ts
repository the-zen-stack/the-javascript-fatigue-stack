const form = document.querySelector('#newPostForm');

// Form validation utilities
export const validateMinLength = (value, minLength) => {
  return value.trim().length >= minLength;
};

export const showError = (message) => {
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
