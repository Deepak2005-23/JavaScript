// 50.Find the product (multiplication) of all prices in the array.
let prices = [199, 129, 98, 78, 11, 171, 1055];
let multiplication = 1;
for(price of prices){
    multiplication *= price;
    console.log(multiplication)
}