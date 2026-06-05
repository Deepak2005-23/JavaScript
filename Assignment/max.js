//. Find the maximum price in the array.  
let prices =[199,129,98,78,11,171,1055];

for(let price of prices){
    if(price == Math.max(...prices)){
        console.log(price);
    }
}