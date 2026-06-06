//22.Skip the highest price using continue.

let prices = [199, 129, 98, 78, 11, 171, 1055]; 
for(price of prices){
    if (price == Math.max(...prices)){
        continue;
    }
    console.log(price);
}