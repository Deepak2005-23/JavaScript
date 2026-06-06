// 28.Replace all prices below 100 with 0 and print the updated values.

let prices = [199, 129, 98, 78, 11, 171, 1055]; 
for(price of prices){
    if (price < 100){
        price = 0;
    }
    console.log(price);
}