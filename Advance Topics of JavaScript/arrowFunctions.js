//? Normal functions

function sum(a, b) {
  return a + b;
}

console.log(sum(42, 23));

//? Functions saved in a variable
let mult = function (a, b) {
  return a * b;
};

console.log(mult(21, 52));

//? Simple arrow functions

let div = (a, b) => {
  return a / b;
};

console.log(div(23, 13));

//? single line arrow functions
let greet = () => console.log("Hello There!");
greet();

//? if single orgument then remove parameter brackets
let greetUser = userName => console.log(`Hello ${userName}`)

greetUser("Umair");