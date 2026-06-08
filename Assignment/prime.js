// 49.Print all prices that are prime numbers.

let prices = [199, 129, 98, 78, 11, 171, 1055];

for(let price of prices){

    let prime = true;

    if(price <= 1){
        prime = false;
    }

    for(let i = 2; i < price; i++){
        if(price % i === 0){
            prime = false;
            break;
        }
    }

    if(prime){
        console.log(price);
    }
}
