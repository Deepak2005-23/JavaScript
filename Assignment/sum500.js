// 25.Keep summing prices until the sum exceeds 500 (use break).  

let prices = [199, 129, 98, 78, 11, 171, 1055]; 
let sum = 0;
for (price of prices){
    sum += price;
    if(sum > 500 ){
        break;
    }
    
}
console.log(sum)