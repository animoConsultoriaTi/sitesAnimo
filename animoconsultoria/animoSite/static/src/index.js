import './styles/style.scss';
import './assets/icons/icons.css';

import Dropdown from './modules/dropdown.js';
import Message from './modules/whatsappMessage.js';
import MenuMobile from './modules/menuMobile.js';
import CustomGlide from './modules/glide.js';
import ValidateProcessForm from './modules/validateProcessForm.js';
import CardTextCutter from './modules/cardTextCutter.js';

const dropdown = new Dropdown(
  '[data-dropdown="trigger"]',
  '[data-dropdown="menu"]',
);
dropdown.init();

const menuMobile = new MenuMobile('[data-menu="button"]', '[data-menu="menu"]');
menuMobile.init();

const servicesCard = new CardTextCutter('[data-textsize]');
servicesCard.cut();

const whatsappMessage = new Message('.whatsapp');
whatsappMessage.init();

const validateForm = new ValidateProcessForm('[data-form="selectiveProcess"]');
validateForm.init();

const customGlide = new CustomGlide('.glide');
customGlide.constructor.renderBullets();
customGlide.init();
