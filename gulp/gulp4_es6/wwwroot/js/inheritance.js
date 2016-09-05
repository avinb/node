class Shape {
	constructor(id, x, y) {
		this.id = id;
		this.move(x, y);
	}

	move(x, y) {
		this.x = x;
		this.y = y;
	}
}

class Rectangle extends Shape {
	constructor(id, x, y, width, height) {
		super(id, x, y);
		this.width = width;
		this.height = height;
	}
}
class Circle extends Shape {
	constructor(id, x, y, radius) {
		super(id, x, y);
		this.radius = radius;
	}
}

var c = new Circle('firstCircle', 3, 4, 5);
console.log(c);c.move(10, 20);console.log(c);