//Print only odd-number prices.  
let prices =[199,129,98,78,11,171,1055];

for (let price of prices){
    if (price % 2 !== 0){
        console.log(price);
    }
}