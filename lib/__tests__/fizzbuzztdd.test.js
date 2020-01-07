const { FizzBuzz } = require("../index.js");

describe("FizzBuzz", () => {
  var fizzBuzz = new FizzBuzz();

  it("testDisplay_TakeZero_ReturnsEmptyList", function() {
    expect(fizzBuzz.display(0)).toBe("");
  });

  it("testDisplay_TakeFewerThanThree_ReturnsOnlyNumbers", function() {
    expect(fizzBuzz.display(1)).toBe("1");
    expect(fizzBuzz.display(2)).toBe("1,2");
  });
});
