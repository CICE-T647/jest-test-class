const sum = require("./");

describe("Sum", () => {
  it("should sum two numbers", () => {
    expect(sum(2, 3)).toEqual(5);
  });
  it("should sum two numbers, one negative", () => {
    expect(sum(-2, 3)).toEqual(1);
  });
  it("should return a number", () => {
    expect(typeof sum(2, 3) === "number").toEqual(true);
  });
});
