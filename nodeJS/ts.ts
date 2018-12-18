class Human{
    name:string, surname:string, gender:string;
    constructor( name,   surname,  gender){
        this.name=name;
        this.surname=surname;
        this.gender=gender;
    }
}
let h = new Human("Barney", "Stinson","M");
console.log("hello" + ` ${h.name} ${h.surname} - ${h.gender}`);
console.log(typeof Human);

class 