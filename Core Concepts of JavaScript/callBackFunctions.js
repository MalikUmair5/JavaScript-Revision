function getUserInput(callback) {
  let name = prompt("Enter your name");
  callback(name);
}
function greet(name) {
  console.log(`welcome ${name}`);
}

getUserInput(greet);
