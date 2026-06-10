class User{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    display(){
        console.log('Name: ',this.name);
        console.log('Age: ',this.age);
    }
}
let goms = new User('goms',23);
goms.display();