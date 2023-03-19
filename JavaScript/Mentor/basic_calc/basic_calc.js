let display = document.getElementById("display");
let buttons = Array.from(document.getElementsByClassName("button"));

buttons.map((button) => {
  button.addEventListener("click", (event) => {
    let buttonClicked = event.target.innerText;
    console.log("Button clicked :- ", buttonClicked);
    switch (buttonClicked) {
      case "C":
        display.innerText = "";
        break;
      case "=":
        perfomCacluation(buttonClicked);
        break;
      case "DEL":
        removeSingleCharacter();
        break;
      default:
        if (display.innerText === "Error") {
          display.innerText = "";
        }
        display.innerText += buttonClicked;
        break;
    }
  });
});

let perfomCacluation = () => {
  if (display.innerText == "") {
    alert("Please enter some value!");
    return;
  }
  try {
    display.innerText = eval(display.innerText);
  } catch {
    display.innerText = "Error";
  }
};

let removeSingleCharacter = () => {
  if (display.innerText) {
    display.innerText = display.innerText.substring(
      0,
      display.innerText.length - 1
    );
  }
};
