// 47.Find the last odd price in the array.
let prices = [199, 129, 98, 78, 11, 171, 1055]; 
let lastnum = 0;
for(let i=prices.length-1;i>=0;i--){
    if(prices[i] % 2 !== 0){
        lastnum = prices[i];
        break;
    }
}
console.log(lastnum);