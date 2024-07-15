//? Promises Syntax

let promise = new Promise((resolve, reject) => {
  if (result()) {
    resolve("success");
  } else {
    reject("error");
  }
});

promise.then((val) => {
  console.log(val);
});

promise.catch((err)=>{
    console.log(err)
})

//? Application of Promises

