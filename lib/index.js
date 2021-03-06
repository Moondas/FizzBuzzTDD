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
    let fizzBuzzSequence = [];

    for (let i = 1; i <= length; i++) {
      fizzBuzzSequence.push(this.translator.getValueOf(i));
    }

    return fizzBuzzSequence;
  }
}

class FizzBuzzTranslator {
  getValueOf(number) {
    if (this._isFizzBuzz(number)) {
      return "FizzBuzz";
    }

    if (this._isFizz(number)) {
      return "Fizz";
    }

    if (this._isBuzz(number)) {
      return "Buzz";
    }

    return number;
  }

  _isFizz(number) {
    return number % 3 === 0;
  }

  _isBuzz(number) {
    return number % 5 === 0;
  }

  _isFizzBuzz(number) {
    return this._isFizz(number) && this._isBuzz(number);
  }
}

module.exports = { FizzBuzz, FizzBuzzTranslator };
