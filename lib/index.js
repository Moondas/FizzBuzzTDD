"use strict";

class FizzBuzz {
  display(lengthOfSequence) {
    if (!lengthOfSequence) {
      return "";
    }

    var fizzBuzzSequence = [];
    for (var i = 1; i <= lengthOfSequence; i++) {
      fizzBuzzSequence.push(i);
    }

    return fizzBuzzSequence.join(",");
  }
}

module.exports = { FizzBuzz };
