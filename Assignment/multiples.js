// 48.Count how many prices are multiples of 5.
let prices = [199, 129, 98, 78, 11, 171, 1055]; 
let count = 0 ;
for(let i=0;i<prices.length;i++){
    if(prices[i] % 5 === 0){
        count++;
    }
}
console.log(count);