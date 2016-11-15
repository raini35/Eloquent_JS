//A VECTOR TYPE
function Vector(x, y) {
	this.x = x; 
	this.y = y; 
}

Vector.prototype.plus = function(otherVector) {
	this.x = this.x + otherVector.x; 
	this.y = this.y + otherVector.y;  
	return this; 
}

Vector.prototype.minus = function(otherVector) {
	this.x = this.x - otherVector.x; 
	this.y = this.y - otherVector.y;  
	return this; 
}

var hello = new Vector(2, 3); 
var hello2 = new Vector(2, 3); 
console.log(hello); 
console.log(hello2); 

console.log(hello.plus(hello2)); 
console.log(hello.minus(hello2)); 
