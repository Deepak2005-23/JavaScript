let a = [
    {eid: 1, ename: "sai"},
    {eid: 2, ename: "kumar"},
    {eid: 3, ename: "sai kumar"}
];

for (let emp of a) {
    console.log(emp.eid);
}
for (let emp of a) {
    console.log(emp.ename);
}
for (let emp of a) {
    console.log(emp);
}