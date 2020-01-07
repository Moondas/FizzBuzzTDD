const { FizzBuzz, FizzBuzzTranslator } = require("../index.js");

describe("FizzBuzz", () => {
  var fizzBuzz = new FizzBuzz();

  it("testDisplay_TakeZero_ReturnsEmptyList", () => {
    expect(fizzBuzz.display(0)).toBe("");
  });

  it("testDisplay_TakeFewerThanThree_ReturnsOnlyNumbers", () => {
    expect(fizzBuzz.display(1)).toBe("1");
    expect(fizzBuzz.display(2)).toBe("1,2");
  });

  it("testDisplay_TakeFirstFour_ReturnsFizzWhenDivisibleByThree", () => {
    expect(fizzBuzz.display(4)).toBe("1,2,Fizz,4");
  });

  /* It("testDisplay_TakeFirst30_ReturnsFirst30FizzBuzzElements", () => {
    var expected =
      "1,2,Fizz,4,Buzz,Fizz,7,8,Fizz,Buzz," +
      "11,Fizz,13,14,FizzBuzz,16,17,Fizz,19,Buzz," +
      "Fizz,22,23,Fizz,Buzz,26,Fizz,28,29,FizzBuzz";
    var result = fizzBuzz.display(30);
    expect(result).toBe(expected);
  }); */
});

describe("FizzBuzzTranslator", () => {
  const translator = new FizzBuzzTranslator();

  it("testGetValueOf_GivenSimpleNumber_ReturnsTheNumber", () => {
    [1, 2, 4, 7, 8, 11, 13, 14].forEach(function(number) {
      expect(translator.getValueOf(number)).toBe(number);
    });
  });

  it("testGetValueOf_GivenNumberDivisibleByThree_ReturnsFizz", () => {
    [3, 6, 9, 12].forEach(function(number) {
      expect(translator.getValueOf(number)).toBe("Fizz");
    });
  });

  it("testGetValueOf_GivenNumberDivisibleByFive_ReturnsBuzz", () => {
    [5, 10].forEach(function(number) {
      expect(translator.getValueOf(number)).toBe("Buzz");
    });
  });
});
