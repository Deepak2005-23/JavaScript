// 37.Find the difference between the highest and lowest prices.
let prices = [199, 129, 98, 78, 11, 171, 1055]; 

prices.sort((a,b)=>a-b)
let difference = prices[0]-prices[prices.length-1]
console.log(difference);