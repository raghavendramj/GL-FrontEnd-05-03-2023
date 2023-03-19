//Normal Function
function greetPerson(name) {
  console.log("Welcome ", name);
}
greetPerson("John Doe");

//Anonymous function / Fuction expression
let greetPersonAnonymous = function (name) {
  console.log("Welcome ", name);
};
greetPersonAnonymous("Adam Bills");

//Arrow function
let greetPersonArrow = (name) => {
  console.log("Welcome ", name);
};
greetPersonArrow("Praneeth");

//Arrow function - with params
let addNums = (a, b) => {
  return a + b;
};
let addNumsOutput = addNums(10, 20);
console.log("addNums ", addNumsOutput);

//Arrow function - with params simplified
let addNumsSimplified = (a, b) => a + b;
let addNumsSimplifiedOutput = addNumsSimplified(10, 20);
console.log("addNumsSimplifiedOutput ", addNumsSimplifiedOutput);
