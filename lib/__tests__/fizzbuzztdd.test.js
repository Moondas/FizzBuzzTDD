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
});

describe("FizzBuzzTranslator", () => {
  const translator = new FizzBuzzTranslator();
  it("testGetValueOf_TakeFewerThanThree_ReturnsOnlyNumbers", () => {
    expect(translator.getValueOf(1)).toBe("1");
    expect(translator.getValueOf(1) + "," + translator.getValueOf(2)).toBe(
      "1,2"
    );
  });

  it("testGetValueOf_TakeFirstFour_ReturnsFizzWhenDivisibleByThree", () => {
    expect(
      translator.getValueOf(1) +
        "," +
        translator.getValueOf(2) +
        "," +
        translator.getValueOf(3) +
        "," +
        translator.getValueOf(4)
    ).toBe("1,2,Fizz,4");
  });
});
