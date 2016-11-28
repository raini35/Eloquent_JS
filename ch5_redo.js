var ANCESTRY_FILE = require('./ancestry.js'); 
var total = 0, count = 1; 
while(count <= 10) {
	total += count; 
	count += 1; 
}

console.log(total); 

//console.log(sum(range(1,10))); 

var array = [1, 2, 3]; 
for(var i = 0; i < array.length; i++) {
	var current = array[i]; 
	console.log(current); 
}	


function forEach(array, action) {
	for(var i = 0; i < array.length; i++) 	
		action(array[i]); 
}

forEach(["Wampeter", "Foma", "Granfalloon"], console.log);

var numbers = [1, 2, 3, 4, 5], sum = 0; 
forEach(numbers, function(number) {
	sum += number; 
}); 

console.log(sum); 


//Array already has a forEach method attached to it

/*
WITHOUT USING FOR EACH 
function gatherCorrelations(journal) {
	var phis = {}; 
	for(var entry = 0; entry < journal.length; entry++) {
		var events = journal[entry].events; 
		for(var i = 0; i < events.length; i++) {
			var event = events[i]; 
			if(!(event in phis))
				phis[event] = phi(tableFor(event, journal)); 
		}
	}
	return phis; 
}

USING FOR EACH 
function gatherCorrelations2(journal) {
	var phis = {}; 
	journal.forEach(function(entry) {
		entry.events.forEach(function(event) {
			if(!(event in phis)) 
				phis[event] = phi(tableFor(event, journal)); 
		}); 
	}); 
	return phis; 
}
*/

//You can create new functions using functions...wtf lol
function greaterThan(n) {
	return function(m) {return m > n; }; 
}

var greaterThan10 = greaterThan(10); 
console.log(greaterThan10(11)); 

function noisy(f) {
	return function(arg) {
		console.log("calling with", arg); 
		var val = f(arg); 
		console.log("called with", arg, "- got", val); 
		return val; 
	}; 
}

noisy(Boolean)(0); 

function unless(test, then) {
	if(!test) then(); 
}

function repeat(times, body) {
	for(var i = 0; i < times; i++) body(i); 
}

repeat(3, function(n) {
	unless(n % 2, function() {
		console.log(n, "is even"); 
	}); 
}); 

for(var h = 0; h < 3; h++) {
	if(h % 2 == 0) {
		console.log(h, "is even"); 
	}
}

function transparentWrapping(f) {
	return function() {
		return f.appl(null, arguments); 
	}; 
}

var string = JSON.stringify({name: "X", born: 1980}); 
console.log(string); 
console.log(JSON.parse(string).born); 

var ancestry = JSON.parse(ANCESTRY_FILE);
console.log(ancestry.length);

function filter(array, test) {
	var passed = []; 
	for(var i = 0; i < array.length; i++) {
		if(test(array[i]))
			passed.push(array[i]); 
	}
	return passed; 
}

console.log(filter(ancestry, function(person) {
	return person.born > 1900 && person.born < 1925;
})); 

console.log(ancestry.filter(function(person) {
	return person.father == "Carel Haverbeke"; 
})); 

//The map function returns the a new array with the same length as the input array, but its content will have been transformed. 
function map(array, transform) {
	var mapped = []; 
	for(var i = 0; i < array.length; i++) 
		mapped.push(transform(array[i]));
	return mapped;
}

var overNinety = ancestry.filter(function(person) {
	return person.died - person.born > 90; 
}); 

console.log(overNinety); 

console.log(map(overNinety, function(person) {
	return person.name; 
})); 

//Reduce computes a single value from the array like summing all the numbers in the array or trying to find out who the oldest person is in the family. 
//If the array contains at least one element, you are allowed to leave off the start argument
function reduce(array, combine, start) {
	var current = start; 
	for( var i = 0; i < array.length; i++) 
		current = combine(current, array[i]); 
	return current; 
}

console.log(reduce([1, 2, 3, 4], function(a, b) {
	return a + b; 
}, 0)); 

console.log(ancestry.reduce(function(min, cur) {
	if(cur.born < min.born) return cur; 
	else return min; 
})); 

//Last function without using high-order functions 
var min = ancestry[0]; 
for(var i = 1; i < ancestry.length; i++) {
	var cur = ancestry[i]; 
	if( cur.born < min.born) 
		min = cur; 
}
console.log(min); 

//High order functions shine when you need to COMPOSE functions 
function average(array) {
	function plus(a, b) {return a + b; }
	return array.reduce(plus) / array.length; 
}

function age(p) { return p.died - p.born; }
function male(p) { return p.sex == "m"; }
function female(p) { return p.sex == "f"; }

console.log(ancestry.filter(male).map(age));
console.log(average(ancestry.filter(male).map(age)));

console.log(ancestry.filter(female).map(age)); 
console.log(average(ancestry.filter(female).map(age))); 

var byName = {}; 
ancestry.forEach(function(person) {
	byName[person.name] = person;
}); 

console.log(byName);

function reduceAncestors(person, f, defaultValue) {
	function valueFor(person){
		if(person == null)
			return defaultValue; 
		else 
			return f(person, valueFor(byName[person.mother]), valueFor(byName[person.father])); 
	}
	return valueFor(person); 
}

function sharedDNA(person, fromMother, fromFather) {
	if(person.name == "Pauwels van Haverbeke")
		return 1; 
	else 
		return(fromMother + fromFather) / 2; 
}

var ph = byName["Philibert Haverbeke"]; 
console.log(reduceAncestors(ph, sharedDNA, 0) / 4); 

var theSet = ["Carel Haverbeke", "Maria van Brussel",
              "Donald Duck"];
              
function isInSet(set, person) {
	return set.indexOf(person.name) > -1; 
}

console.log(ancestry.filter(function(person) {
	return isInSet(theSet, person); 
})); 

console.log(ancestry.filter(isInSet.bind(null, theSet))); 
