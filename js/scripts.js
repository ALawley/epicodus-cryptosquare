// Remove spaces
// Turn lowercase
// Count number of characters
// Get the square root
// parseInt the square root
// The determines number of characters per row
// Make array of strings with length equal to characters per row
// Make an array with the first letter of the first five strings, then second etc (loop)
// Print that array

var formatText = function(userText) {
  userText = userText.toLowerCase().replace(/ /g,'');
  return userText;
}

var rowLength = function(userText) {
  rowLength = Math.ceil(Math.sqrt(userText.length));
  return rowLength;
}

var createSquare = function(userText) {
  createSquare = [];
  for (var index = 1; index < rowLength; index +=1) {
    createSquare.push(userText.slice(rowLength * (index - 1), rowLength * index));
 }
 return createSquare;
}

var textScramble = function(createSquare) {
  textScramble;
  for (var index = 0; index <= rowLength; index +=1) {
    textScramble += slice(createSquare.forEach (index));
    // createSquare.forEach(alert("hi"));
    // textScramble.concat(createSquare.charAt(index));
  }
  return textScramble;
  //create an array with five letter strings
  //loop it until !!! <= array.length charAt 0,
  //loop that concats first letters until has 5
  //loop that pushes those into array?
  // charTake = 0
}
