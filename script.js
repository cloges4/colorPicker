let input = document.getElementById("hex");
let body = document.getElementsByTagName("body")[0];
let hexValue;

// input value to bg color
input.addEventListener("input", function() {
  body.style.background = "#" + input.value;
});

// random number between 0 and 15
function hexGenerator() {
  let numberArray = ["", "", "", "", "", ""];
  numberArray.forEach(function() {
    let random = Math.floor(Math.random() * 16);
    switch (random) {
      case 10:
        random = "A";
        break;
      case 11:
        random = "B";
        break;
      case 12:
        random = "C";
        break;
      case 13:
        random = "D";
        break;
      case 14:
        random = "E";
        break;
      case 15:
        random = "F";
        break;
      default:
    }
    numberArray.push(random);
    hexValue = numberArray.join("");
  });
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
