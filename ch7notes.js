//PROJECT 1: ELECTRONIC LIFE
//World - two dimensional grid where each identity takes up 
//one full square of the grid; on every turn, the critters
//all get a chance to take some action

function Vector(x, y) {
	this.x = x; 
	this.y = y; 
}

Vector.prototype.plus = function(other) {
	return new Vector(this.x + other.x, this.y + other.y); 
}; 

function Grid(width, height) {
	this.space = new Array(width * height); 
	this.width = width; 
	this.height = height; 
}

Grid.prototype.isInside = function(vector) {
  return vector.x >= 0 && vector.x < this.width &&
         vector.y >= 0 && vector.y < this.height;
};
Grid.prototype.get = function(vector) {
  return this.space[vector.x + this.width * vector.y];
};


Grid.prototype.set = function(vector, value) {
  this.space[vector.x + this.width * vector.y] = value;
};

function randomElement(array) {
	return array[Math.floor(Math.random() * array.length)]; 
}

var directionNames = "n ne e se s sw w nw".split(" ");

function BouncingCritter() {
	this.direction = randomElement(directionNames);
};

BouncingCritter.prototype.act = function(view) {
	if(view.look(this.direction) != " ")
		tis.direciton = view.find(" ") || "s"; 
	return {type: "move", direction: this.direction};
};

/*************************************************************
*
*							MAIN
*
*************************************************************/

var grid = new Grid(5, 5);

console.log(grid.get(new Vector(1, 1)));
grid.set(new Vector(1, 1), "X");
console.log(grid.get(new Vector(1, 1)));