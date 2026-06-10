class User{
    nameame = 'goms';
    age = 23 ;
    display(){
        console.log('name: ',this.name);
        console.log('Age: ',this.age);
        return true;
    }
}
let goms = new User(); // object
console.log(goms);
console.log(typeof(goms));
 
console.log(goms.display());