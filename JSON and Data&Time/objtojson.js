let user = {
    Name : 'deepak',
    Age : 21,
    Salary : 35000
};

console.log(JSON.stringify(user)); // give object is Json format

let emp ='{"Name" : "deepak","Age" : 21,"Salary" : 35000}'
console.log(JSON.parse(emp));  // give stirng is object
console.log(typeof(JSON.parse(emp)));