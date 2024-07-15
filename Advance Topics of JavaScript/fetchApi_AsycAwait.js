let getData = async () => {
let res = await fetch("https://jsonplaceholder.typicode.com/posts")
let data = await res.json()
for (let i = 0; i < data.length; i++) {
  const element = data[i].userId;
  console.log(element)
  
}

};

getData();