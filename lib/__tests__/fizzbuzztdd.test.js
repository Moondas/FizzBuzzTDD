const { FizzBuzz, FizzBuzzTranslator } = require("../index.js");

describe("FizzBuzz", () => {
  var fizzBuzz = new FizzBuzz();

  it("testDisplay_TakeZero_ReturnsEmptyList", () => {
    expect(fizzBuzz.display(0)).toBe("");
  });

  it("testDisplay_TakeFirst30_ReturnsFirst30FizzBuzzElements", () => {
    var expected =
      "1,2,Fizz,4,Buzz,Fizz,7,8,Fizz,Buzz," +
      "11,Fizz,13,14,FizzBuzz,16,17,Fizz,19,Buzz," +
      "Fizz,22,23,Fizz,Buzz,26,Fizz,28,29,FizzBuzz";
    var result = fizzBuzz.display(30);
    expect(result).toBe(expected);
  });
});

describe("FizzBuzzTranslator", () => {
  const translator = new FizzBuzzTranslator();
  const ASSERT_SAME = "assert_same";

  it("testGetValueOf_GivenSimpleNumber_ReturnsTheNumber", () => {
    expect(translator.getValueOf(1)).toBe(1);
    expect(translator.getValueOf(2)).toBe(2);
    [4, 7, 8, 11, 13, 14].forEach(assertTranslation(ASSERT_SAME));
  });

  it("testGetValueOf_GivenNumberDivisibleBy3_ReturnsFizz", () => {
    [3, 6, 9, 12].forEach(assertTranslation("Fizz"));
  });

  it("testGetValueOf_GivenNumberDivisibleBy5_ReturnsBuzz", () => {
    [5, 10].forEach(assertTranslation("Buzz"));
  });

  it("testGetValueOf_GivenNumberDivisibleByThreeAndFive_ReturnsFizzBuzz", () => {
    [15, 30].forEach(assertTranslation("FizzBuzz"));
  });

  let assertTranslation = translation => {
    let assertion = function(number) {
      expect(translator.getValueOf(number)).toBe(
        translation === ASSERT_SAME ? number : translation
      );
    };

    return assertion.bind(this);
  };
});
