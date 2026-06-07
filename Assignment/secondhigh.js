// 32.Find the second highest price in the array.  

let prices = [199, 129, 98, 78, 11, 171, 1055]; 

secondhighest = prices.sort((a,b) => b-a);
console.log(prices[1])