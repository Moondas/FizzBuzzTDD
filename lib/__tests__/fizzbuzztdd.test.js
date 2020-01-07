const { FizzBuzz } = require("../index.js");

describe("FizzBuzz", () => {
  it("testDisplay_TakeZero_ReturnsEmptyList", function() {
    var fizzBuzz = new FizzBuzz();
    expect(fizzBuzz.display(0)).toBe("");
  });

  it("testDisplay_TakeOne_ReturnsTheFirstElement", function() {
    var fizzBuzz = new FizzBuzz();
    expect(fizzBuzz.display(1)).toBe("1");
  });
});
