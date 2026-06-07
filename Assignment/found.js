// 33.Check whether a given price exists in the array.
let prices = [199, 129, 98, 78, 11, 171, 1055]; 
let searchprice = 178;
let found = false;
for(price of prices){
    if(price === searchprice){
        found = true;
        break;
    }
}
console.log(found ? "Price found" : "Price not found")
