export default function handleOutsideClick(element, callback) {
  const html = document.documentElement;

  function outsideClick(event) {
    if (!element.contains(event.target)) {
      element.removeAttribute('data-outside');
      html.removeEventListener('click', outsideClick);
      callback();
    }
  }

  if (!element.hasAttribute('data-outside')) {
    setTimeout(() => html.addEventListener('click', outsideClick));
    element.setAttribute('data-outside', '');
  }
}
