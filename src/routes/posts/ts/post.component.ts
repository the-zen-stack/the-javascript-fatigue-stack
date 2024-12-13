const buttons = document.querySelectorAll('.btn-like');
for (const button of buttons) {
  button.addEventListener('click', () => {
    const likesCount = button.querySelector('.likes-count');
    if (!likesCount) return;

    const currentLikes = Number.parseInt(likesCount?.textContent ?? '0');
    likesCount.textContent = String(currentLikes + 1);
    button.classList.add('liked');
  });
}
