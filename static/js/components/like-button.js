import { $$ } from '../utils/dom.js';

export function initializeLikeButtons() {
  $$('.btn-like').forEach(button => {
    button.addEventListener('click', () => {
      const likesCount = button.querySelector('.likes-count');
      const currentLikes = parseInt(likesCount.textContent);
      likesCount.textContent = currentLikes + 1;
      button.classList.add('liked');
    });
  });
}