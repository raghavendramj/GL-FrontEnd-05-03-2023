function constVariableTest() {
  const pi = 3.142;
  console.log("Value of pi :- ", pi);
  pi = 3.14; //TypeError: Assignment to constant variable -> Value Types
}
// constVariableTest();

function constReferenceTypesTest() {
  const cars = ["Volvo", "BMW", "Benz"];
  console.log("1. Cars :- ", cars);
  cars[0] = "Maruthi Suzuki"; //Allowed
  //cars = ["Volvo", "BMW", "Benz"]; //Assignment to constant variable.
  console.log("2. Cars :- ", cars);
  cars.unshift("Kia"); //Allowed
  //[ 'Kia', 'Maruthi Suzuki', 'BMW', 'Benz' ]
  cars.splice(1, 2, "Hyundai", "Toyota", "Bentley") //Allowed
  console.log("3. Cars :- ", cars);
}
constReferenceTypesTest();
