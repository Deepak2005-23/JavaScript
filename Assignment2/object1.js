let emp = {
    id: 101,
    name: "Deepak",
    salary: 50000
};

let isempty = true ; 
for(let key in emp){
    isempty = false;
    break;
}
console.log(isempty ? "object is empty" : "object is not empty")