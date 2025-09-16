require('./helpers.js');

const { expect } = require("chai");

describe("index.js", () => {
  it("exists", () => {
    expect(testVar).to.exist;
    expect(testVar).to.deep.equal({});
  });
});
