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
