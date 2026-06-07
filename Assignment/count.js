// 31.Count the number of even prices and odd prices.

let prices = [199, 129, 98, 78, 11, 171, 1055];
let evencount = 0;
let oddcount = 0;
for (price of prices){
    if (price % 2 == 0){
        evencount++;
    }
    else{
        oddcount++;
    }
}
console.log("Even :" + evencount);
console.log("odd :" + oddcount);