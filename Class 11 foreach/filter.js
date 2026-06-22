let number =[1,2,3,4,5,6,7,8,9,10]  // filter is f data selection
let even = number.filter(num=>num%2==0)
console.log(even)

let odd = number.filter ((num)=>{
    return num%2!=0
}
)
console.log(odd);