
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

describe('createSquare', function() {
  it("will create an array where each string length is equal to or less than rowLength", function() {
    expect(createSquare("hihowareyou")).to.eql(["hiho", "ware", "you"]);
  });
});

describe('textScramble', function() {
  it("will create a large string using the first letter of each string in createSquare array, then the second, and looping through to the end", function() {
    expect(textScramble(["hiho", "ware", "you"])).to.eql("hwyiaohruoe")
  });
});
