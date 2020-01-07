"use strict";

class FizzBuzz {
  static get SEPARATOR() {
    return ",";
  }

  constructor() {
    this.translator = new FizzBuzzTranslator();
  }

  display(lengthOfSequence) {
    if (!lengthOfSequence) {
      return "";
    }

    return this._getSequenceUntil(lengthOfSequence).join(this.SEPARATOR);
  }

  _getSequenceUntil(length) {
    var fizzBuzzSequence = [];

    for (var i = 1; i <= length; i++) {
      fizzBuzzSequence.push(this.translator.getValueOf(i));
    }

    return fizzBuzzSequence;
  }
}

class FizzBuzzTranslator {
  getValueOf(number) {
    if (number % 3 === 0) {
      return "Fizz";
    }

    return number;
  }
}

module.exports = { FizzBuzz, FizzBuzzTranslator };
