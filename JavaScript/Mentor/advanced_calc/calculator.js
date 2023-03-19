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
