"use strict";

class FizzBuzz {
  static get SEPARATOR() {
    return ",";
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
      fizzBuzzSequence.push(i);
    }

    return fizzBuzzSequence;
  }
}

module.exports = { FizzBuzz };
