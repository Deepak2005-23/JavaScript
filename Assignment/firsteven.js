// 46.Find the first even price in the array.
let prices = [199, 129, 98, 78, 11, 171, 1055]; 
let firsteven = 0;
for(price of prices){
    if(price % 2 ==0){
        firsteven = price;
        break;
        
    }
}
console.log(firsteven);