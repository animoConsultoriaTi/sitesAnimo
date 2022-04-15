import { handleOutsideClick } from "./helpers.js";

export function initDropdown() {
  const servicesTrigger = document.querySelector("[data-dropdown='trigger']");
  const servicesMenu = document.querySelector("[data-dropdown='menu']");

  if (servicesTrigger && servicesMenu) {
    servicesTrigger.addEventListener("click", handleServicesClick);

    function handleServicesClick() {
      [servicesTrigger, servicesMenu].forEach((element) => {
        element.classList.add("active");
      });
      handleOutsideClick(servicesMenu, () => {
        [servicesTrigger, servicesMenu].forEach((element) => {
          element.classList.remove("active");
        });
      });
    }
  }
}
