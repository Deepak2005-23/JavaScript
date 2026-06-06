// 29.Create a new array containing only prices greater than 100. 
let prices = [199, 129, 98, 78, 11, 171, 1055]; 
let newPrices = [];

for(let price of prices){
    if(price > 100){
        newPrices.push(price);
    }
}

console.log(newPrices);