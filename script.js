var input = document.getElementById("hex");
var body = document.getElementsByTagName("body")[0];
var hexValue;

// input value to bg color
input.addEventListener("input", function() {
  body.style.background = "#" + input.value;
});

// random number between 0 and 15
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
    hexValue = numberArray.join("");
  }
  return hexValue;
}
//spacebar or enter key takes random hex value to bg and output to the input
function keyPress() {
  if (event.keyCode === 13 || event.keyCode === 32) {
    hexGenerator();
    body.style.background = "#" + hexValue;
    input.value = hexValue;
  }
}

addEventListener("keypress", keyPress);
