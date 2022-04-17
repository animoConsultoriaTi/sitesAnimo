export default class Message {
  constructor(button) {
    this.button = document.querySelector(button);
  }

  getMessage() {
    this.time = new Date().getHours();
    this.message = this.time > 11 && this.time <= 17 ? 'Boa tarde' : this.time > 17 && this.time <= 23 ? 'Boa noite' : 'Bom dia';
  }

  setWhatsappMessage() {
    this.getMessage();
    this.button.setAttribute(
      'href',
      `https://api.whatsapp.com/send?phone=+5521991115329&text=${this.message}, gostaria de agendar uma reunião!`,
    );
  }

  init() {
    if (this.button) {
      this.setWhatsappMessage();
    }
    return this;
  }
}
