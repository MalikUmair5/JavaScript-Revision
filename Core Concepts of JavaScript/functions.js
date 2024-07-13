//? simple functions
//? function declaration

function greet() {
  console.log("welcome to our app");
}

//? function call

greet();

//? functions encourage reausability

greet();
greet();
greet();

//? function with a return value

function getPrimeNumber() {
  return 7;
  //! no code will run after return statement
}


let primeNumber = getPrimeNumber()

console.log(primeNumber)

//? function with parameters

function checkPrimeNumber(num){
    if(num % 2 === 0){
        console.log(`${num} is not a prime number`);
    } else {
        console.log(`${num} is a prime number`);
    }
}

checkPrimeNumber(7);

//? function with multiple parameters

function sum(num1 , num2){
    return num1 + num2;
}


console.log(sum(5, 6));
