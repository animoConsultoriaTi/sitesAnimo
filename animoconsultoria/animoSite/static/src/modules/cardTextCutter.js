export function initCardTextCutter() {
  const text = document.querySelectorAll('[data-textsize]');
  text.forEach((item) => {
    if (item.textContent.length > 351) {
      item.textContent = item.textContent.substring(0, 350) + ' ...';
    }
  });
}
