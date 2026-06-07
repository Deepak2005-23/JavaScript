// 34.Print duplicate prices if the array contains duplicates.  
let prices = [199, 129, 98, 78, 11, 171, 1055]; 
let duplicates = [];

for(let i=0;i<prices.length;i++){
    for(let j=i+1;j<prices.length;j++){
        if(prices[i]===prices[j]){
            duplicates.push(prices[i])
        }
    }
}
console.log(duplicates);