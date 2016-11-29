var ANCESTRY_FILE = require('./ancestry.js'); 
var ancestry = JSON.parse(ANCESTRY_FILE);
//FLATTENING
var arrays = [[1,2,3],[4,5],[6]]; 
var array2 = [1, 2, 10]; 
var array3 = [456, 789, 200]; 

console.log(arrays.reduce(function(flat, current) {
	console.log(flat); 
  return flat.concat(current);
}));//foreach

//console.log(array2.concat(array3)); 

//MOTHER-CHILD AGE DIFFERENCE
function average(array) {
	function plus(a, b) { return Math.abs(a) + Math.abs(b); }
	return array.reduce(plus) / array.length; 
}


var byName = {}; 
ancestry.forEach(function(person) {
	byName[person.name] = person; 
}); 

//console.log(byName); 
function ageDifference(p) {
	var mother = byName[p.mother]; 

	return p.born - mother.born; 
}

function knownInfoForMother(p) {
	return !(p.mother == null || byName[p.mother] == undefined);
	
}
function age(p) {
	return p.died - p.born; 
}	

console.log(average(ancestry.filter(knownInfoForMother).map(ageDifference))); 

//HISTORICAL LIFE EXPECTANCY
//Inside this they used a forEach high order function to go through the
//list of people
//The function that is being tested is where they do the century calculation and then pushes or places the key and element
//group all the person according to century 

//HOW I SHOULD HAVE APPROACHED THIS PROBLEM: 
//First figure out the inputs and the outputs
//Second figure out all the minimum amount of methods I need to change
//the input into the output
//Third go through each method and do the following: 
	//Figure out the inputs and outputs of the method
	//Figure out how to change the input into the output 
//Fourth make sure to connect the following methods together 

function groupBy(array_of_ancestors, centuryOf) {
  //Created the object that is going to be returned
  var array_sorted_by = {}
  //Goes through each value in the array 
  array_of_ancestors.forEach(function(person) {
  	//Gets the key according to the century that the person was born in
    var century = centuryOf(person);
    //Compares the current century to each key in the groups object
    if (century in array_sorted_by)
      //If the key is in the group you just push the element
      array_sorted_by[century].push(person);
    else
      //you add 
      array_sorted_by[century] = [person];
  });
  return array_sorted_by;
}

var byCentury = groupBy(ancestry, function(person) {
  return Math.ceil(person.died / 100);
});

//Going through the objects you average the ages and then output it 
for (var century in byCentury) {
  var ages = byCentury[century].map(function(person) {
    return person.died - person.born;
  });
  console.log(century + ": " + average(ages));
}

//EVERY AND SOME 
//INPUTS: an array and a predicate function
//OUTPUT: true or false
function reduce(array, combine, start) {
	var current = start; 
	for( var i = 0; i < array.length; i++) 
		current = combine(current, array[i]); 
	return current; 
}

var numbers = ['NaN', 'NaN', 'NaN', 1]; 
function every(array, test){
	return array.reduce(function(current, p) {
		if(test(p))
			current = true; 
		else 
			current = false; 
		return current; 
	}); 
}

function some(array, test){
	var i = 0; 
	var bool = false; 
	
	while(i < array.length){
		if(test(array[i])){
			bool = true; 
			break; 
		}
	}
	
	return bool; 
}

var hello = every(numbers, isNaN); 
var hello2 = some(numbers, isNaN); 

console.log(hello); 
console.log(hello2);
