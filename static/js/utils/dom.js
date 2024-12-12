// DOM utility functions
export const $ = selector => document.querySelector(selector);
export const $$ = selector => document.querySelectorAll(selector);

export const onDOMReady = callback => {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', callback);
  } else {
    callback();
  }
};