function Rabbit(type) {
	this.type = type; 
}

var killerRabbit = new Rabbit("killer"); 
var blackRabbit = new Rabbit("black"); 
Rabbit.prototype.speak = function(line) {
	console.log("The " + this.type + " rabbit says '" + 
				line + "'"); 
}; 

Rabbit.prototype.teeth = "small"; 
console.log(killerRabbit.teeth); 

killerRabbit.teeth = "long, sharp, and blody"; 
console.log(killerRabbit.teeth); 

console.log(blackRabbit.teeth); 

console.log(Rabbit.prototype.teeth); 

Rabbit.prototype.dance = function() {
	console.log("The " + this.type + " rabbit dances a jig."); 
}; 

killerRabbit.dance(); 

var map = {}
function storePhi(event, phi) {
	map[event] = phi; 
}

storePhi("pizza", 0.069); 
storePhi("touched tree", -0.081); 

Object.prototype.nonsense = "hi"; 
for(var name in map) 
	console.log(name); 
	
console.log("nonsense" in map); 

console.log("toString" in map); 

delete Object.prototype.nonsense; 

//You can create prototype-less objects 
var map = Object.create(null); 
map["pizza"] = 0.069; 
console.log("toString" in map); 

console.log("pizza" in map); 

