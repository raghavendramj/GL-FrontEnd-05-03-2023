function varVariableTest() {
  var number = 10;
  console.log("1. number :- ", number); //10
  {
    var number = 24;
    console.log("2. number :- ", number); //24
  }
  console.log("3. number :- ", number); //24
}
// varVariableTest();

function letVariableTest() {
  let number = 34;
  console.log("1. number :- ", number); //34
  {
    let number = 56;
    console.log("2. number :- ", number); //56
  }
  console.log("3. number :- ", number); //34
}
// letVariableTest();

function hositingTest() {
  //console.log("0. Number :- ", number2); //Not defined
  console.log("1. Number :- ", number); // undefined
  var number;
  console.log("2. Number :- ", number); // undefined
  number = 26;
  console.log("3. Number :- ", number); // 26
  var number = 23;
  console.log("4. Number :- ", number); // 23
}

// hositingTest();

function hositingLetTest() {
  //console.log("1. Number :- ", number); //Cannot access 'number' before initialization
  let number = 23;
  console.log("2. Number :- ", number);
  //let number = 26; //Cannot redeclare block-scoped variable 'number'.ts(2451)
}
hositingLetTest();
