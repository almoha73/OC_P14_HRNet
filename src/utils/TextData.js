export default class TextData {
  constructor(key, text, employee) {
    this.key = key;
    this.text = this.removeNumberUndefined(text);
    this.employee = employee;
  }

  removeNumberUndefined(words) {
    return words
      .replace("undefined", "?")
      .replace(/[^a-zA-Zéèâëäê,]/g, " ")
      .toLowerCase()
	
  }
}
