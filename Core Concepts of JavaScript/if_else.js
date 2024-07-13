//? if else statement

let age = 15;
let isEliiblevoter = age >= 18

if (isEliiblevoter) {
  console.log("you are an Eligible voter");
} else {
  console.log("you can provide moral support");
}

//? else if statements

let score = 75;

console.log(`your score is ${score}`);  
if (score >= 90) {
    console.log("your grade is A+");
}
else if (score >= 80) {
    console.log("your grade is A");
}
else if (score >= 70) {
    console.log("your grade is B");
}
else if (score >= 60) {
    console.log("your grade is C");
}
else if (score >= 50) {
    console.log("your grade is D");
}
else {
    console.log("you are fail");
}


//? nested if else

let number = 0;

if (number > 0){
    if (number % 2 == 0){
        console.log("number is positive and even");
    }
    else {
        console.log("number is positive and odd");
    }
}

else if (number < 0){
    console.log('number is negative');
}
else{
    console.log('number is zero');
}