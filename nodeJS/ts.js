var Human = (function () {
    function Human(name, surname, gender) {
        this.name = name;
        this.surname = surname;
        this.gender = gender;
    }
    return Human;
}());
var h = new Human("Barney", "Stinson", "M");
console.log("hello" + (" " + h.name + " " + h.surname + " - " + h.gender));
console.log(typeof Human);
var default_1 = (function () {
    function default_1() {
    }
    return default_1;
}());
