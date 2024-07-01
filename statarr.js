const person=["ans","abh","aish"]
const age=[22,24,62,73]
let num=0;
for(let i=0;i<age.length-1; i++){
   // for(let j=1;j<age.length; j++){
    if(age[i]>age[i+1]){
        num = age[i];
    }
    else num = age[i+1];
//}
}
console.log(num);