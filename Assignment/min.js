//Find the minimum price in the array.
let prices =[199,129,98,78,11,171,1055];

for(let price of prices){
    if(price == Math.min(...prices)){
        console.log(price);
    }
}