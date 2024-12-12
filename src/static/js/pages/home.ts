import { onDOMReady } from '../utils/dom.js';
import { initializeLikeButtons } from '../components/like-button.js';
import { initializeSmoothScroll } from '../components/smooth-scroll.js';

onDOMReady(() => {
  initializeLikeButtons();
  initializeSmoothScroll();
});
