class Animal 
{ 

	constructor(public name: string) { } 
	move(meters: number) 
	{ 

		alert(this.name + " moved " + meters + "m.");
 	}
}

class Snake extends Animal {
	constructor (name:string) { super(name);}
	move() {
	alert("slithering...");
	super.move (5);

	}

}




class Horse extends Animal {
	constructor (name:string) { super(name)}
	move () {


	alert("gallopping.../");
	super.move(45);
	}



}


var sam = new Snake("Sammy the Python"); 
var tom: Animal = new Horse("Tommy the Palomino");
sam.move();
tom.move(34);

