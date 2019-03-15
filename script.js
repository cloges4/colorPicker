/* 
- on load random generate bg color 
  - display hex value on input
- click spacebar random gen bg color
  DONE - display hex value on input
- on type bg changes to hex value starting at 3 hex


 - if bg color is dark text color needs to be a white color
  - if bg color is light text color needs to be black color
*/

var input = document.getElementById("hex");
var body = document.getElementsByTagName("body")[0];

input.addEventListener("input", function() {
  body.style.background = "#" + input.value;
});

// random number between 1 and 16
function hexGenerator() {
  var numberArray = [];
  for (var i = 0; i < 6; i++) {
    var random = Math.floor(Math.random() * 16);
    if (random === 10) {
      random = "A";
    } else if (random === 11) {
      random = "B";
    } else if (random === 12) {
      random = "C";
    } else if (random === 13) {
      random = "D";
    } else if (random === 14) {
      random = "E";
    } else if (random === 15) {
      random = "F";
    }
    numberArray.push(random);
    var hexValue = numberArray.join("");
  }
  return hexValue;
  // var hexValue = hexArray.join("");
}

// hexGenerator();
// console.log(numberArray);

var arrayValues = hexGenerator();
console.log(arrayValues);

addEventListener("keypress", function() {
  if (event.keyCode === 13 || event.keyCode === 32) {
    body.style.background = "#" + arrayValues;
  }
});
