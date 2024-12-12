import { $$ } from '../utils/dom.js';

export function initializeSmoothScroll() {
  const anchors = $$('a[href^="#"]');
  for (const anchor of anchors) {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth',
      });
    });
  }
}
