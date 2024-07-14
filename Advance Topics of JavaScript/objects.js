let student = {
  name: "umair",
  rollNo: 78,
  course: "Software Engineering",
};

//? Access the Object
console.log(student);

//? Access Single Properties using dot (.) notation.
console.log(student.name);
console.log(student.rollNo);
console.log(student.course);

//? Access Single property using brackets []
console.log(student["name"]);
console.log(student["rollNo"]);
console.log(student["course"]);

//? Delete a property
delete student.course;
console.log(student)

//? Add a property
student.age = 17;
console.log(student)


//? Usig typeof operator

console.log(typeof student)
console.log(typeof student.course)
console.log (typeof student.age)