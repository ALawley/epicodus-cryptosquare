
describe('formatText', function() {
  it("will remove spaces from entered text", function() {
    expect(formatText("hi mom")).to.equal("himom");
  });

  it("will return all characters to lower case", function() {
    expect(formatText("HELLO")).to.equal("hello");
  });
});

describe('rowLength', function() {
  it("will count the number of characters ", function() {
    expect(rowLength("hihowareyou")).to.equal(4);
  });
});

//create array of strings where each string is equal to rowLength

describe('createSquare', function() {
  it("will create an array where each string length is equal to or less than rowLength", function() {
    expect(createSquare("hihowareyou")).to.eql(["hiho", "ware", "you"]);
  });
});
