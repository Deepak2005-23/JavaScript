let call = (sucess,failure)=>{
    let acc_bal=100;
    if(acc_bal>=500){
        sucess("go to enjoy")
    }
    else{
        failure("got to PG")
    }
}
call((msg)=>{
    console.log(msg)
}, (err)=>{
    console.log(err)
})