let arr = [1, 2, 3, 4, 5, 6, 7];

//? check for the array
console.log(Array.isArray(arr));

//? find length of array
console.log(arr.length);

//? add/remove from end of erray
arr.pop;
arr.push(9);
console.log(arr)

//? add/remove from begining of array
arr.unshift();
arr.shift(0);
console.log(arr)

//? add/remove from any where in array
arr.splice(1, 2, 4)
console.log(arr)

//? convert array to string
console.log(arr.toString())

//? sort an array
console.log(arr.sort())

//? get array it self
console.log(arr.valueOf())