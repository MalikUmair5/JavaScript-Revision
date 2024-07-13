
function greet() {
  console.log("welcome to our app");
}

//? asynchronous JavaScript
//? The code will not wait for the setTimeout function to execute and it will move to the next line

console.log("before")
setTimeout(greet, 5000);
console.log("after")    


//? how we can use call backs to control asynchronous code


// console.log("Control Asynchronous code using callbacks");

// function greetUser(callback) {
//     setTimeout(callback, 5000);
// }

// console.log("before");
// greetUser(greet);
// console.log("after");


function ProcessData(data){
    console.log(data);
    console.log("Data Processed Successfully");

}


function fetchData(callback) {
    console.log("Processing data ...");
    setTimeout(() =>{
        const data = {name: "Malik Umair", age: 22};
        callback(data);
    }, 5000);
}

fetchData(ProcessData);