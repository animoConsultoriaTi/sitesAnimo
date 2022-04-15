import { handleOutsideClick } from "./helpers.js";

export function initMenuMobile() {
  const button = document.querySelector("[data-menu='button']");
  const buttonIcons = button.querySelectorAll("i");
  const menu = document.querySelector("[data-menu='menu']");

  if (button && menu) {
    button.addEventListener("click", handleClick);

    function handleClick() {
      buttonIcons.forEach((item) => {
        item.classList.toggle("active");
      });
      menu.classList.add("active");
      button.setAttribute("aria-expanded", "true");

      handleOutsideClick(menu, () => {
        if (buttonIcons[1].classList.contains("active")) {
          buttonIcons.forEach((item) => {
            item.classList.toggle("active");
          });
        }
        menu.classList.remove("active");
        button.setAttribute("aria-expanded", "false");
      });
    }
  }
}
