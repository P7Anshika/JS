const arr1=[1,2,3]
const arr2= [7,8,9]

console.log(arr1.concat(arr2));

//[ 1, 2, 3, 7, 8, 9 ]

//alternate way using push

for(let i=0;i<arr2.length;i++){
    arr1.push(arr2[i]);
}

console.log(arr1);