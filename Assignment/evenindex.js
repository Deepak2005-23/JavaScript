// 42.Find the total of all prices at even indexes.
let prices = [199, 129, 98, 78, 11, 171, 1055]; 
let sum = 0;
for(let i=0;i<prices.length;i+=2){
    sum +=prices[i];
}
console.log(sum);