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
var numberArray = [];

input.addEventListener("input", function() {
  body.style.background = "#" + input.value;
});

// random number between 1 and 16
function randomHex() {
  for (var i = 0; i < 6; i++) {
    var random = Math.floor(Math.random() * (16 - 1)) + 1;
    numberArray.push(random);
  }
  return numberArray;
  // var hexValue = hexArray.join("");
}

randomHex();

// console.log(numberArray);
