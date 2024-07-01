function sum(num1, num2) {
    let result = num1 + num2;
    displayResult(result); 
}

function displayResult(data) {
    console.log("Result of the sum is : " + data);
}

function displayResultPassive(data) {
    console.log("Sum's result is : " + data);
}

// You are only allowed to call one function after this
// How will you displayResult of a sum
const value=sum(1,4);

function sum1(num1, num2,fn) {
    let result = num1 + num2;
    fn(result); 
}
const val=sum1(1,6,displayResult);