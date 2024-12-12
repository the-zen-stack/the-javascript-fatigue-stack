import { onDOMReady, $ } from '../utils/dom.js';
import { validateMinLength, showError } from '../utils/validation.js';
import { initializeSmoothScroll } from '../components/smooth-scroll.js';

onDOMReady(() => {
  const form = $('#newPostForm');

  if (form) {
    form.addEventListener('submit', (e) => {
      const title = $('#title').value;
      const content = $('#content').value;

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

  initializeSmoothScroll();
});
