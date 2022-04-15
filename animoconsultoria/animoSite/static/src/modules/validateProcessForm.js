export function initValidateProcessForm() {
  const form = document.querySelector('[data-form="selectiveProcess"]');

  if (form) {
    form.email.addEventListener('change', verifyEmail);
    form.curriculum.addEventListener('change', verifyCurriculum);
    form.phone.addEventListener('change', verifyPhone);

    function verifyEmail(event) {
      const validateEmail = /[\w.-]+@soulasalle.com.br/;
      if (!event.target.value.match(validateEmail)) {
        event.target.classList.add('error');
        event.target.setCustomValidity('O E-mail inserido não é válido.');
      } else {
        event.target.classList.remove('error');
        event.target.setCustomValidity('');
      }
    }

    function verifyCurriculum(event) {
      const validateCurriculum = /.(?:png|jpg|jpeg|pdf|docx)$/i;
      const file = event.target.files[0];
      console.log(file.name.match(validateCurriculum));
      if (!file.name.match(validateCurriculum) || file.size > 5 * 125000) {
        event.target.classList.add('error');
        event.target.setCustomValidity(
          'O tipo de arquivo inserido não é válido.',
        );
      } else {
        event.target.classList.remove('error');
        event.target.setCustomValidity('');
      }
    }

    function verifyPhone(event) {
      const validatePhone = /(\(?\d{2}\)?[\s-]?)?(\d{4,5})[\s-]?(\d{4})/;
      event.target.value = event.target.value.replace(
        validatePhone,
        '($1) $2-$3',
      );
    }
  }
}
