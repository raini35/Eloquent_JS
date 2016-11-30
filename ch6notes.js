/*
HISTORY OF OBJECTS

Complexity can be made manageable by separating the entire program into 
small compartments isolated from each other. 

An object is a hard shell that hides the gooey complexity inside it and 
instead offers methods that present an interface through which the object
is used. 

The idea is that the interface allows the user to work with the object 
without knowing what's going inside.

Encapsulation - distinguishing between internal and external interface

*/

//METHODS

var rabbit = {}; 
rabbit.speak = function(line) {
	console.log("The rabbit says '" + line +"'"); 
};

console.log(rabbit); 
rabbit.speak("I'm alive."); 

function speak(line) {
	console.log("The " + this.type + " rabbit says '" + 
				line + "'"); 
}

var whiteRabbit = {type: "white", speak: speak }; 
var fatRabbit = {type: "fat", speak: speak }; 
var asianRabbit = {type: "asian", speak: speak}; 

whiteRabbit.speak("Oh my ears and whiskers, how late it's getting!"); 
fatRabbit.speak("I could sure use a carrot right now."); 
asianRabbit.speak("I'm from the Philippines."); 

//apply & call method 
speak.apply(fatRabbit, ["Burp!"]); 
speak.call({type: "old"}, "Oh my."); 

//PROTOTYPES
var empty = {}; 
console.log(empty.toString); 
console.log(empty.toString());

console.log(Object.getPrototypeOf({}) ==
			Object.prototype); 
console.log(Object.getPrototypeOf(Object.prototype)); 

console.log(Object.getPrototypeOf(isNaN) ==
			Function.prototype); 
console.log(Object.getPrototypeOf([]) == 
			Array.prototype); 

var protoRabbit = {
	speak: function(line) {
		console.log("The " + this.type + " rabbit says '" + 
					line + "'"); 
	}
}; 

var killerRabbit = Object.create(protoRabbit); 
killerRabbit.type = "killer"; 
killerRabbit.speak("SKREE!"); 

//The protoRabbit acts as the container for all instances such as killerRabbit

//CONSTRUCTORS 
//Before you had to use Object.create() to make an instance of the object 
//now by using new ObjectName you can create instances 

function Rabbit(type) {
	this.type = type; 
}
var killerRabbit = new Rabbit("killer"); 
var blackRabbit = new Rabbit("black"); 
console.log(blackRabbit.type); 
console.log(blackRabbit); 

//By using var ObjectName = function() {} the objectName is not included 
//when it the object is outputted
var rabbit = function(type) {
	this.type = type; 
}

var hello = new rabbit("asian"); 
console.log(hello);

Rabbit.prototype.speak = function(line) {
	console.log("The " + this.type + " rabbit says '" + 
				line + "'"); 
};

blackRabbit.speak("Doom...");

//OVERRIDING DERVIED PROPERTIES
Rabbit.prototype.teeth = "small"; 
console.log(killerRabbit.teeth); 

killerRabbit.teeth = "long, sharp, and bloody"; 
console.log(killerRabbit.teeth); 

console.log(blackRabbit.teeth); 

console.log(Rabbit.prototype.teeth);

//Overriding properties that exist in a prototype is often a useful to do. 
//You can place a base class throughout the instances of the object but 
//when you need to be more specific for an individual instance, you can 
//override the property for specificity. 

console.log(Array.prototype.toString == Object.prototype.toString); 
			
console.log([1, 2].toString()); 

console.log(Object.prototype.toString.call([1,2])); 

//PROTOTYPE INTERFERENCE 
//A prototype can be used at any time to add new properties and methods to 
//all objects based on it. 

Rabbit.prototype.dance = function() {
	console.log("The " + this.type + " rabbit dances a jig."); 
}; 	

killerRabbit.dance(); 

var map = {}; 
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

//Enumerable vs Non-enumerable Properties
//Enmerable properties - all properties that we create by simply assigning
//to them are enumerable
//Non-enumerable - the standard properties of an object are all non-enumerable

Object.defineProperty(Object.prototype, "hiddenNonsense", {enumerable: false, value: "hi"});

for (var name in map) 
	console.log(name); 

console.log(map.hiddenNonsense);

console.log(map.hasOwnProperty("toString"));


//When you are worried that someone might have messed with the base object prototype...
for(var name in map) {
	if(map.hasOwnProperty(name)){
		//..this is an own property
	}
}