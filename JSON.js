//JSON: JavaScript Object Notation

//JSON.parse() ===== string to object
const users='{"name":"abh", "age":22, "gender":"male"}'
const user=JSON.parse(users);
console.log(user["gender"]);

//JSON.stringify() ==== objetc to string
const users1={
    name:"abh",
    age:22,
    gender:'male'
}
const user1 =JSON.stringify(users1);
console.log(user1);