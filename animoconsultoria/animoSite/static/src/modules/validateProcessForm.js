export default class ProcessForm {
  constructor(form) {
    this.form = document.querySelector(form);
    this.validateEmail = /[\w.-]+@soulasalle.com.br/;
    this.validateCurriculum = /.(?:png|jpg|jpeg|pdf|docx)$/i;
    this.validatePhone = /(\(?\d{2}\)?[\s-]?)?(\d{4,5})[\s-]?(\d{4})/;

    this.verifyEmail = this.verifyEmail.bind(this);
    this.verifyCurriculum = this.verifyCurriculum.bind(this);
    this.verifyPhone = this.verifyPhone.bind(this);
  }

  verifyEmail() {
    if (!this.form.email.value.match(this.validateEmail)) {
      this.form.email.classList.add('error');
      this.form.email.setCustomValidity('O E-mail inserido não é válido.');
    } else {
      this.form.email.classList.remove('error');
      this.form.email.setCustomValidity('');
    }
  }

  verifyCurriculum() {
    const file = this.form.curriculum.files[0];
    if (!file.name.match(this.validateCurriculum) || file.size > 5 * 125000) {
      this.form.curriculum.classList.add('error');
      this.form.curriculum.setCustomValidity(
        'O tipo de arquivo inserido não é válido.',
      );
    } else {
      this.form.curriculum.classList.remove('error');
      this.form.curriculum.setCustomValidity('');
    }
  }

  verifyPhone() {
    this.form.phone.value = this.form.phone.value.replace(
      this.validatePhone,
      '($1) $2-$3',
    );
  }

  addFormEvents() {
    this.form.email.addEventListener('change', this.verifyEmail);
    this.form.curriculum.addEventListener('change', this.verifyCurriculum);
    this.form.phone.addEventListener('change', this.verifyPhone);
  }

  init() {
    if (this.form) {
      this.addFormEvents();
    }
    return this;
  }
}
