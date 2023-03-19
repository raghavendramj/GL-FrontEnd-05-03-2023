//Map -> [1, 2, 3] -> [1, 4, 6] (New Resulant Array)
//Map -> ["Virat", "Rishabh"] -> [5, 7] (New Resulant Array)
function mapExample() {
  let numbers = [1, 2, 3, 4, 5];
  let squares = new Array();
  for (let number of numbers) {
    squares.push(number * number);
  }
  console.log("Squared array is :- ", squares);

  let squarePredicateCallback = (eachNum) => eachNum * eachNum;
  let squaresES6 = numbers.map(squarePredicateCallback);
  console.log("ES6 Squared array is :- ", squaresES6);

  let names = ["Virat", "Rishabh", "Praneeth", "John"];
  console.log(
    "Length of names :- ",
    names.map((name) => name.length)
  );
}

// mapExample();

function filterFunction() {
  let numbers = [1, 2, 3, 4, 5];
  let evenNumbers = new Array();
  for (let number of numbers) {
    if (number % 2 == 0) {
      evenNumbers.push(number);
    }
  }
  console.log("Even numbers is :- ", evenNumbers);

  let evenNumberPredicateCallback = (number) => number % 2 == 0;
  console.log(
    "ES6 Even numbers is :- ",
    numbers.filter(evenNumberPredicateCallback)
  );
}

// filterFunction();

function sortFunction() {
  let numbers = [4, 1, 5, 7, 3, 8, 9];
  let sortingAscPredicate = (a, b) => a - b;
  console.log("Ascendig order :- ", numbers.sort(sortingAscPredicate));
  let sortingDescPredicate = (a, b) => b - a;
  console.log("Descending order :- ", numbers.sort(sortingDescPredicate));
}
// sortFunction();

function findFirstIndex() {
  let numbers = [4, 1, 5, 7, 3, 8, 9];
  let findFirstPredicate = (number) => number > 5;
  let indexOfNumGt5 = numbers.findIndex(findFirstPredicate);
  console.log("1st number > 5  index is :- ", indexOfNumGt5);
  console.log("1st number > 5  value is :- ", numbers[indexOfNumGt5]);
}

// findFirstIndex();

function reduceFunction() {
  let numbers = [4, 1, 5, 7, 3, 8, 9];
  let total = 0;
  for (let each of numbers) {
    total += each;
  }
  console.log("Sum of all nums :- " + total);

  let reducePredicate = (total, currentNumber) => total + currentNumber;
  console.log("ES 6 Sum of all nums :- " + numbers.reduce(reducePredicate)); // Initial number :- 0
  console.log(
    "ES 6 Sum of all nums :- " + numbers.reduce(reducePredicate, 150)
  ); // Initial number :- 150
}

// reduceFunction();

function combinedExample() {
  let people = [
    { name: "John", age: 21, amount: 14 },
    { name: "Oliver", age: 55, amount: 45 },
    { name: "Michael", age: 55, amount: 34 },
    { name: "Dwight", age: 19, amount: 67 },
    { name: "Oscar", age: 21, amount: 38 },
    { name: "Kevin", age: 55, amount: 78 },
  ];

  //Sum of all ages
  let sumOfAges = people
    .map((person) => person.age) // [21, 55, 55, 19, 21, 55]
    .reduce((a, b) => a + b);
  console.log("sumOfAges -> ", sumOfAges);

  //Names of people who are 55 years old
  let namesofPeopleGt55Years = people
    .filter((person) => person.age >= 55)
    .map((person) => person.name);
  console.log("namesofPeopleGt55Years -> ", namesofPeopleGt55Years);

  //Sum of amount of the people who are 55 years old and above
  let sumOfAmountOfPeopleGt55Years = people
    .filter((person) => person.age >= 55)
    .map((person) => person.amount)
    .reduce((a, b) => a + b);
    console.log("sumOfAmountOfPeopleGt55Years -> ", sumOfAmountOfPeopleGt55Years);
}
combinedExample();
