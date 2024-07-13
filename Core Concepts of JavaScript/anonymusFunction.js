// setTimeout use a anynomus function to call the callback functions
setTimeout(function() {
  console.log("I am Anonymous");
}, 5000);



// Other way to use anynomus function
(
    function() {
        console.log("I am Anonymous No 2");
    }
)

// Other way to use anynomus function is pass a function to a variable

let sum = function(a, b) {
    return a + b;
}
