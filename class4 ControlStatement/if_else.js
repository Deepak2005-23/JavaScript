const input = require('prompt-sync')()

let num = parseInt(input("Enter a number: "))
if(num % 2 == 0){
    console.log("Give Number is even number")
}
else{
    console.log("Give Number is odd number")
}