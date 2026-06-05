// Print prices until a value less than 50 appears (use break).

let prices =[199,129,98,78,11,171,1055];

for (let price of prices){
    if (price < 50){
        console.log(price);
        break;
    }
}