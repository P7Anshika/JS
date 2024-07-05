//date is a class
const curr= new Date();
console.log(curr.getMonth());// since starting index is 0 
console.log(curr.getMonth()+1);// so add 1

console.log(curr.getDate());

console.log(curr.getFullYear());

console.log(curr.getHours());

console.log(curr.getMinutes());

console.log(curr.getSeconds());

curr.setFullYear(2020);
console.log(curr);

curr.setMonth(9);//indexed to 0
console.log(curr);