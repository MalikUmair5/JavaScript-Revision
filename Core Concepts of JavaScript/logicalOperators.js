let age = 15;
let isStudent = true;

if (age >= 18 && isStudent) {
  console.log("you are eligible for Job");
} else {
  console.log("focous on your studies");
}

if (age >= 18 || isStudent) {
  console.log("you are eligible for Scholarship");
}

//? Or Operator

let drink = "coffee";

if (drink === "coffee" || drink === "tea") {
  console.log(`I will drint ${drink}`);
}

//? and operator

let rot = true;
let salan = true;

if (rot && salan) {
  console.log("I will eat");
} else {
  console.log("I can not eat");
}

//? not operator

if (!isStudent && age <= 18) {
  console.log("you should study");
}
