// Inheritance - class based
class Shape {
    constructor(id, name) {
        console.log("Shape constructor called");
        this.id = id;
        this.name = name;
    }
}
class Circle extends Shape {
    constructor(id, name, radius){
        console.log("Circle constructor called");
        super(id, name);
        this.radius = radius;
    }
}

class Polygon extends Shape{
    constructor(id, name, sides){
        console.log("Polygon constructor called");
        super(id, name);
        this.sides = sides;
    }
}
let circle = new Circle(1, "Coin", 12);
console.log(circle);
let triangle = new Polygon(2, "Triangle", 3);
console.log(triangle);
let rectangle = new Polygon(2, "Rectangle", 4);
console.log(rectangle);

// Inheritance - prototype based
var shapeProto = function(id, name){
    this.id = id;
    this.name = name;
}
var circleProto = function(id, name, radius){
    shapeProto.call(id, name);
    this.radius = radius;
}
circleProto.prototype = Object.create(new shapeProto());
let shape2 = new shapeProto(2, "Random shape");

let cir2 = new circleProto(3, "coins", 5);


console.log(shape2);
console.log(cir2);
function Animal(name) {
    this.name = name;
}

Animal.prototype.sleep = function() {
    console.log(this.name + ': Zzz...');
}

function Dog(name) {
    this.name = name;
}

// Create a reference for the prototype
Dog.prototype = Object.create(new Animal());

Dog.prototype.makeSound = function() {
    console.log(this.name + ': Woof woof!');
}

Dog.prototype.sleep = function() {
    console.log(this.name + ': Overriding Zzzz....');
}

var dog = new Dog('Lassie');
dog.makeSound(); // Lassie: Woof woof!
dog.sleep(); // Lassie: Overriding Zzzz....


console.time("for");
(function(){
    let amount = 10; 
    let denominations = [1,10, 2, 5];
    let results = [];
    denominations.sort(function(a, b){
        if(a>b)
            return 1;
        else
            return 0;
    })
    console.log(denominations);
    for(let i=0 ;i<denominations.length; i++){
        let temp = [];
        let div = amount / denominations[i];
        console.log(div);


    }
})()
console.timeEnd("for");