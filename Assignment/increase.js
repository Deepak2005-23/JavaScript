// 44.Create a new array with each price increased by 10%.
let prices = [199, 129, 98, 78, 11, 171, 1055]; 

let newarr=[];

for(price of prices){
    newarr.push(price*1.10);
}
console.log(newarr);