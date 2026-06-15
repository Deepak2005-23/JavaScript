istherehalwa = false ;
function waitforqueue(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(istherehalwa){
                resolve("Buy 1/2 kg halwa");
            }
            else{
                reject("halwa finish");
            }
        },1000);
        });
}

function buyhalwa(){
    waitforqueue().then((message)=>{
        console.log(message);
    })
    .catch((error)=>{
        console.log(error);
    })
    .finally(()=>{
        console.log("go to home");
    })
}
buyhalwa();