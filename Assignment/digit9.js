// 40.Count how many prices end with the digit 9.

let prices = [199, 129, 98, 78, 11, 171, 1055]; 
let count = 0;

for (price of prices){
    if(price % 10 === 9){
        count++;
        
    }
}
console.log(count);