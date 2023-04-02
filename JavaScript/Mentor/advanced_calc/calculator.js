let dispInput = document.getElementById("display");

let addCharacter = (char) => {
  let content = dispInput.innerText;
  if (content == null || content == "0") {
    dispInput.innerText = char; //REPLACE
  } else {
    dispInput.innerText += char; //APPEND!
  }
};

//Checks if its a number/valid operator or NOT
function validateCharacter() {
  let inp = dispInput.innerText;
  const operators = ["/", "*", "+", "-", ".", "(", ")"];
  for (let i = 0; i < inp.length; i++) {
    const char = inp.substring(i, i + 1);
    if (char < "0" || (char > "9" && !operators.includes(char))) {
      alert("Invalid Operation");
      dispInput.innerText = "";
      return false;
    }
  }
  return true;
}

function compute() {
  if (dispInput.innerText == "") {
    alert("Please enter some value!");
    return;
  }
  try {
    dispInput.innerText = eval(display.innerText);
  } catch {
    dispInput.innerText = "Error";
  }
}

function clearDisplay() {
  console.log("Clear invoked!");
  dispInput.innerText = "";
}

function deleteCharacter() {
  if (dispInput.innerText) {
    dispInput.innerText = display.innerText.substring(
      0,
      display.innerText.length - 1
    );
  }
}

function squareRoot() {
  if (dispInput === "") alert("Please enter some value!");
  else dispInput.innerText = Math.sqrt(dispInput.innerText);
}

function sqaure() {
  if (dispInput === "") alert("Please enter some value!");
  else dispInput.innerText = dispInput.innerText * dispInput.innerText;
}

function cubeRoot() {
  if (dispInput === "") alert("Please enter some value!");
  else {
    var curr = dispInput.innerText;
    dispInput.innerText = curr * curr * curr;
  }
}

function exponent() {
  if (dispInput === "") alert("Please enter some value!");
  else dispInput.innerText = Math.exp(dispInput.innerText);
}

function log() {
  if (dispInput === "") alert("Please enter some value!");
  else dispInput.innerText = Math.log(dispInput.innerText);
}

function sin() {
  if (dispInput === "") alert("Please enter some value!");
  else dispInput.innerText = Math.sin(dispInput.innerText);
}

function tan() {
  if (dispInput === "") alert("Please enter some value!");
  else dispInput.innerText = Math.tan(dispInput.innerText);
}

function cos() {
  if (dispInput === "") alert("Please enter some value!");
  else dispInput.innerText = Math.cos(dispInput.innerText);
}
