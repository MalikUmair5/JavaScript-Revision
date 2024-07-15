//? Spread operator in Arrays

let arr1 = [1, 2, 3];

//! this will make complete one array in 1 index of arr2
let arr2 = [arr1];
console.log(arr2);

//? To copy every element of array as af arr1 using spread operator
arr2 = [...arr1];
console.log(arr2);

//? spread operator in Objects

let obj1 = { a: 1, b: 2, c: 3 };

let obj2 = { ...obj1, d: 4 };

console.log(obj2);

//? Spread operator in Functions

let sum = (a, b, c) => a + b + c;
const nums = [12, 425, 463];
console.log(sum(...nums))
