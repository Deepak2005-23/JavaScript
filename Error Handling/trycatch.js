let a = undefined;
try{                                 
    console.log(a.name);         //There is no name variable that's only give to try block
}
catch(error){
    console.log("Error Clear")   //Error will show mean give the other condition
}