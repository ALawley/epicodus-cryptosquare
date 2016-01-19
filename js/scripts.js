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
