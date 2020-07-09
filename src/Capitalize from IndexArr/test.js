const capitalize = require("./index");
const { expect } = require("chai");

describe("capitalize from indexArr", () => {
  it("should capitalize correct characters", () => {
    let result = capitalize("abcde", [1, 3, 5]);
    expect(result).to.equal("aBcDe");
  });
});
