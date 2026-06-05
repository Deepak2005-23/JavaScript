// Search for a user-given price and stop searching using break when found. 
let searchPrice = 78;
let prices =[199,129,98,78,11,171,1055];

for (let price of prices){
    if (price === searchPrice){
        console.log("Price found: " + price);
        break;
    }
}