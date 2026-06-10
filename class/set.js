class User{
    #name;
    constructor(name,age){
        this.#name = name;
        this.age = age;
    }
    display(){
        console.log('Name: ',this.#name);
        console.log('Age: ',this.age);
    }
    get name(){
        return this.#name;
    }
    set name(name){
        if(name =="code io"){
            this.#name='code'
        }
        else{
            this.#name = name;
        }
    }
}
let goms = new User('goms',23);
goms.name ='code io'
console.log(goms.name)
 