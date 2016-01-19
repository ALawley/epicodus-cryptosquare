//a string will be returned without spaces
describe('formatText', function() {
  it("will remove spaces from entered text", function() {
    expect(formatText("hi mom")).to.equal("himom");
  });

  it("will return all characters to lower case", function() {
    expect(formatText("HELLO")).to.equal("hello");
  });
});

describe('mathText', function() {
  it("will count the number of characters ", function() {
    expect(mathText("hihowareyou")).to.equal(3);
  });
});
