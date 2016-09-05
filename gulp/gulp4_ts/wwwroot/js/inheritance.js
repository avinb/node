class Animal {
    constructor(name) {
        this.name = name;
    }
    move(meters) {
        alert(this.name + " moved " + meters + "m.");
    }
}
class Snake extends Animal {
    constructor(name) {
        super(name);
    }
    move() {
        alert("slithering...");
        super.move(5);
    }
}
class Horse extends Animal {
    constructor(name) {
        super(name);
    }
    move() {
        alert("gallopping.../");
        super.move(45);
    }
}
var sam = new Snake("Sammy the Python");
var tom = new Horse("Tommy the Palomino");
sam.move();
tom.move(34);
