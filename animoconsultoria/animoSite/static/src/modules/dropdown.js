import handleOutsideClick from './helpers.js';

export default class Dropdow {
  constructor(trigger, menu) {
    this.trigger = document.querySelector(trigger);
    this.menu = document.querySelector(menu);
    this.activeClass = 'active';

    this.handleServicesClick = this.handleServicesClick.bind(this);
  }

  handleServicesClick() {
    [this.trigger, this.menu].forEach((element) => {
      element.classList.add(this.activeClass);
    });
    handleOutsideClick(this.menu, () => {
      [this.trigger, this.menu].forEach((element) => {
        element.classList.remove(this.activeClass);
      });
    });
  }

  addDropdownEvents() {
    this.trigger.addEventListener('click', this.handleServicesClick);
  }

  init() {
    if (this.trigger && this.menu) {
      this.addDropdownEvents();
    }
    return this;
  }
}
