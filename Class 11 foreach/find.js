let number =[1,2,3,4,5,6,7,8,9,10] // find is data find 

let num= number.find(num=>num==20)
console.log(num);

let numbers = number.find((number)=>{
    return number==5
})
console.log(numbers);