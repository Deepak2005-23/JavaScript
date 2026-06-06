// 30.Find the average price of all products.
let prices = [199, 129, 98, 78, 11, 171, 1055]; 
let sum = 0;
for (let price of prices){
    sum +=price;
}
let average = sum / prices.length;
console.log(average);