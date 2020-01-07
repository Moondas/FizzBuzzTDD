const { FizzBuzz } = require("../index.js");

describe("FizzBuzz", () => {
  it("testDisplay_TakeZero_ReturnsEmptyList", function() {
    var fizzBuzz = new FizzBuzz();
    expect("").toBe(fizzBuzz.display(0));
  });
});
