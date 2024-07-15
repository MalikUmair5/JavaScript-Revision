let student = {
  studentName: "umair",
  age: 22,
  courses: "Software Engineering",
};

//? normal get value in a variable
// let studentName = student.studentName;
// let studentAge = student.age;
// let studentCourses = student.courses;

//? using destructuring;
let {studentName, age, courses} = student;
console.log(studentName, age, courses)

//? Object propertey shorthand, if property and value are the same then just write property name
let price = 123
let product = {
    productName: "Mango",
    itemName: "Fruit wala",
    price
}

console.log(product.price)

//? Object method shorthand

let product1 = {
    productName : "orange",
    itemName: "fruit wala",
    displayPrice() {
        console.log(12)
    }
}

product1.displayPrice();







