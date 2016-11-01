var ANCESTRY_FILE = require('./ancestry.js')

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

function map(array, transform) {
	var mapped = []; 
	for(var i = 0; i < array.length; i++)
		mapped.push(transform(array[i])); 
	return mapped; 
}

var overNinety = ancestry.filter(function(person) {
	return person.died - person.born > 90; 
}); 

console.log(map(overNinety, function(person) {
	return person.name; 
})); 

function reduce(array, combine, start) {
	var current = start; 
	for (var i = 0; i < array.length; i++) {
		current = combine(current, array[i]); 
	}
	return current; 
}

console.log(ancestry.reduce(function(min, cur) {
	if(cur.born<min.born) return cur; 
	else return min; 

})); 

function average(array) {
	function plus(a,b) { return a + b; }
	return array.reduce(plus) / array.length; 
}

function age(p) {
	return p.died - p.born; 
}	

function male(p) {
	return p.sex == "m"; 
}

function female(p) {
	return p.sex == "f"; 
}

console.log(average(ancestry.filter(male).map(age))); 

console.log(average(ancestry.filter(female).map(age))); 

var byName = {}; 
ancestry.forEach(function(person) {
	byName[person.name] = person; 
}); 

console.log(byName["Philibert Haverbeke"]); 

function reduceAncestors(person, f, defaultValue) {
	function valueFor(person) {
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