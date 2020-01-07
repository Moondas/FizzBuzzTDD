const { FizzBuzz } = require("../index.js");

describe("FizzBuzz", () => {
  var fizzBuzz = new FizzBuzz();

  it("testDisplay_TakeZero_ReturnsEmptyList", function() {
    expect(fizzBuzz.display(0)).toBe("");
  });

  it("testDisplay_TakeOne_ReturnsTheFirstElement", function() {
    expect(fizzBuzz.display(1)).toBe("1");
  });

  it("testDisplay_TakeTwo_ReturnsTheFirstTwoElement", function() {
    expect(fizzBuzz.display(2)).toBe("1,2");
  });
});
