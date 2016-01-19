//a string will be returned without spaces
describe('formatText', function() {
  it("will remove spaces from entered text", function() {
    expect(formatText("hi mom")).to.equal("himom");
  });

  it("will return all characters to lower case", function() {
    expect(formatText("HELLO")).to.equal("hello");
  });
});
