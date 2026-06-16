function test(){
    console.log(this)
}
test()

let test1= () =>{
    console.log(this);
}
test1();