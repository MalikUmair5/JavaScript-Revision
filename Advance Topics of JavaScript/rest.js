//?Rest Operator in functions

let sum = (...numbers) => {
  return numbers.reduce((acc, curr) => acc + curr, 0);
};

console.log(sum(2, 3, 4, 5));


//? Rest Operator and Destructuring in JavaScript

let [first, second, ...rest] = [1, 2, 4, 5, 6, 3, 3]
console.log(first)
console.log(second)
console.log(rest)

//? Rest Operator in Objects
let {a, b, ...obj4} = {a: 1, b: 2, c: 3, d: 4, e: 5}
console.log(a)
console.log(b)
console.log(obj4)