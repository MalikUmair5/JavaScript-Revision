let arr = [1, 2, null, 'umair', {country: 'Pakistan'}];

console.log(arr);
console.log(arr[0])
console.log(arr[3])
console.log(arr[4])
console.log(arr[5]) //? undefined

console.log(arr.length)

for(let i = 0; i < arr.length; i++){
    console.log(arr[i]);
}
