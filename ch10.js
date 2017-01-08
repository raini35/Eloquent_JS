//NAMESPACING 
//Global vs Local Namespacing 
var hello = 10; 
var i = 0; 

while(i < 10) {
	hello = hello - 1
	i++; 
}


if(true) {
	var hello = "Not a number"; 
	console.log("LOCAL: " + hello); 
}

console.log("GLOBAL: " + hello); 


for(var h = 0; h < 5; h++) {
	console.log("FIRST H: " + h); 
}

console.log(h); 

var h = -100; 

console.log(h); 
for(var h = 0; h > 5; h++) {
	console.log("FIRST H: " + h); 
}

//The below function does not work because I've already defined hello as a variable. I need to make sure that my variables and function names are not the same
function helloPrint () {
	var h = "Not a number"; 
	console.log("HELLO"); 
	return h; 
}
console.log(helloPrint()); 
console.log(h); 

//USING FUNCTIONS AS NAMESPACES 
//Functions are the only things in Javascript that create a new scope. So if we want our modules to have their own scope, we will have to base them on functions. 

var names = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]; 

function dayName(number) {
	return names[number]; 
}

console.log(dayName(1)); 

var dayName = function() {
	var names = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday",
	"Friday", "Saturday"]; 
	return function(number) {
		return names[number]; 
	}; 
}(); 

console.log(dayName(3)); 

(function() {
	function square(x) { return x * x }
	var hundred = 100; 
	
	console.log(square(hundred)); 
})(); 

//Difference between function declaration and function expression 
//Function declarations get hoisted up 
//Function expressions don't get hoisted up 

//OBJECTS AS INTERFACES 
var weekDay = function () {
	var names = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday",
	"Friday", "Saturday"]; 
	
	return {
		name: function(number) { return names[number]; },
		number: function(name) { return names.indexOf(name) }
	}; 
}(); 

console.log(weekDay.name(weekDay.number("Sunday")));

//REQUIRE 
function require(name) {
	var code = new Function("exports", readFile(name)); 
	var exports = {}; 
	code(exports); 
	return exports; 
}

//SLOW-LOADING MODULES 
define(["weekDay", "today"], function(weekDay, today) {
	console.log(weekDay.name(today.dayNumber())); 
}); 
