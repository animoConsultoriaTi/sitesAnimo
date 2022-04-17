import handleOutsideClick from './helpers.js';

export default class MenuMobile {
  constructor(button, menu) {
    this.button = document.querySelector(button);
    this.icons = this.button.querySelectorAll('i');
    this.menu = document.querySelector(menu);
    this.activeClass = 'active';

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.icons.forEach((item) => {
      item.classList.toggle(this.activeClass);
    });
    this.menu.classList.add(this.activeClass);
    this.button.setAttribute('aria-expanded', 'true');

    handleOutsideClick(this.menu, () => {
      if (this.icons[1].classList.contains(this.activeClass)) {
        this.icons.forEach((item) => {
          item.classList.toggle(this.activeClass);
        });
      }
      this.menu.classList.remove(this.activeClass);
      this.button.setAttribute('aria-expanded', 'false');
    });
  }

  addMenuMobileEvents() {
    this.button.addEventListener('click', this.handleClick);
  }

  init() {
    if (this.button && this.menu) {
      this.addMenuMobileEvents();
    }
    return this;
  }
}
