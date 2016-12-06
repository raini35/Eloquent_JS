var plan = ["############################",
            "#      #    #      o      ##",
            "#                          #",
            "#          #####           #",
            "##         #   #    ##     #",
            "###           ##     #     #",
            "#           ###      #     #",
            "#   ####                   #",
            "#   ##       o             #",
            "# o  #         o       ### #",
            "#    #                     #",
            "############################"];
            
console.log(plan);

/**********************************************************************
*
*							VECTOR CLASS
*
**********************************************************************/
function Vector(x, y) {
	this.x = x; 
	this.y = y; 
}

Vector.prototype.plus = function(other) {
	return new Vector(this.x + other.x, this.y + other.y);
};


/**********************************************************************
*
*							GRID CLASS
*
**********************************************************************/
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


/**********************************************************************
*
*							CRITTER CLASS
*
**********************************************************************/
function randomElement(array) {
	return array[Math.floor(Math.random() * array.length)]; 
}

var directionNames = "n ne e se s sw w nw".split(" ");

function BouncingCritter() {
	this.direction = randomElement(directionNames);
};

BouncingCritter.prototype.act = function(view) {
	if(view.look(this.direction) != " ")
		this.direction = view.find(" ") || "s"; 
	return {type: "move", direction: this.direction};
};

/**********************************************************************
*
*							WORLD CLASS
*
**********************************************************************/
function elementFromChar(legend, ch) {
	if (ch == " ") 
		return null; 
	var element = new legend[ch](); 
	element.originChar = ch; 
	return element; 
}

function World(map, legend) {
	var grid = new Grid(map[0].length, map.length); 
	this.grid = grid; 
	this.legend = legend; 
	
	map.forEach(function(line, y) {
		for(var x = 0; x < line.length; x++) 
			grid.set(new Vector(x, y), 
				elementFromChar(legend, line[x])); 
	});
}	

/**********************************************************************
*
*							MAIN CLASS
*
**********************************************************************/
var hello = new Vector(2, 3); 
var hello2 = new Vector(2, 3); 
console.log(hello);
console.log(hello.plus(hello2));

var aray = new Array(2);
console.log(aray);

var grid = new Grid(5, 5); 
console.log(grid.get(new Vector(1, 1)));
grid.set(new Vector(1, 1), "X"); 
console.log(grid.get(new Vector(1, 1)));
console.log(grid);

