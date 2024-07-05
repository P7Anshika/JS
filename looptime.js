//use Date() class

function Loop(){
    let a =0
    for(let i=0;i<10000000;i++){
        a+=i;
    }
    return a;
}

const before= new Date();
const beftim = before.getTime();
Loop();

const after = new Date();
const afttim= after.getTime();

console.log(afttim-beftim);