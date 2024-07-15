// //? Promises Syntax

// let promise = new Promise((resolve, reject) => {
//   if (result()) {
//     resolve("success");
//   } else {
//     reject("error");
//   }
// });

// promise.then((val) => {
//   console.log(val);
// });

// promise.catch((err)=>{
//     console.log(err)
// })

//? Application of Promises

let Step1 = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Step1 Ho Gaya");
      resolve();
    }, 1000);
  });
};

let Step2 = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Step2 Ho Gaya");
      resolve();
    }, 1000);
  });
};

let Step3 = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Step3 Ho Gaya");
      resolve();
    }, 1000);
  });
};


Step1()
.then(()=>Step2())
.then(()=>Step3()).then(()=>{
  console.log("All Steps Completed")
})