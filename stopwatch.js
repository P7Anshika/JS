function currtime(){
    console.log(new Date().getTime());
}

setInterval(currtime, 1000);