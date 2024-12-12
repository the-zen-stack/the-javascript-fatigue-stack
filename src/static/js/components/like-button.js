import { $$ } from '../utils/dom.js';

export function initializeLikeButtons() {
  const buttons = $$('.btn-like');
  for (const button of buttons) {
    button.addEventListener('click', () => {
      const likesCount = button.querySelector('.likes-count');
      const currentLikes = Number.parseInt(likesCount.textContent);
      likesCount.textContent = currentLikes + 1;
      button.classList.add('liked');
    });
  }
}
