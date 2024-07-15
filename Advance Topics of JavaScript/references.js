

//? Objects are reference type
//? Primitives are value type
//? if we copy an object it will not copy the object but it will copy the reference of the object
//? change in reference will change the original object as well

let student = {
    name: "umair",
    rollNo: 78,
    course: "Software Engineering",
  };

  
let num1 = 12;

let num2 = num1;

let student2 = student;


console.log(num2)
console.log(student2)   

num1 = 13;

console.log(num2)

delete student.course;

console.log(student2)