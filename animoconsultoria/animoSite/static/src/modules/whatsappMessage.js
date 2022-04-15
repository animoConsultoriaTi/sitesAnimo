export function initWhatsappMessage() {
  const whatsappButton = document.querySelector('.whatsapp');
  if (whatsappButton) {
    function setWhatsappMessage() {
      whatsappButton.setAttribute(
        'href',
        `https://api.whatsapp.com/send?phone=+5521991115329&text=${getMessage()}, gostaria de agendar uma reunião!`,
      );
    }
    function getMessage() {
      let time = new Date().getHours();
      return time > 11 && time <= 17
        ? 'Boa tarde'
        : time > 17 && time <= 23
        ? 'Boa noite'
        : 'Bom dia';
    }
    setWhatsappMessage();
  }
}
