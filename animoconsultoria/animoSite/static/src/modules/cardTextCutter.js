export default class CardTextCutter {
  constructor(texts) {
    this.texts = document.querySelectorAll(texts);
  }

  cut() {
    this.texts.forEach((item) => {
      if (item.textContent.length > 351) {
        item.textContent = `${item.textContent.substring(0, 350)}...`;
      }
    });
    return this;
  }
}
