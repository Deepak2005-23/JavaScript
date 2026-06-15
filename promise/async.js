istherehalwa = true ;
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

async function buyhalwa(){
    try{
        let result = await waitforqueue()
        console.log(result);
    }
    catch(error){
        console.log("hawaover")
    }
}
buyhalwa();
