function range(start, end, step) {
	if(arguments[2] == undefined) {
		step = 1; 
	}	
	var list_of_numbers = []; 
	var count = start; 
	
	if(step > 0){
		while(count <= end) {
			list_of_numbers.push(count); 
			count += step; 
		}
	}
	else {
		while(count >= end) {
			list_of_numbers.push(count); 
			count += step; 
		}
	}
	
	return list_of_numbers; 
}

function sum(list) {
	var sum = 0; 
	var count = 0; 
	while(count < list.length) {
		sum += list[count]; 
		count++; 
	}
	
	return sum; 
}

function reverseArray(array) {
	
	return new_array 
}
var array = range(5, 2,-1); 
console.log(array); 
var num = sum(array); 
console.log(num); 

var array2 = [1,2,3,4,5,6,7 ];

function reverseArray(list) {
	var new_list = []; 
	var count = list.length - 1; 
	while(count >= 0 ) {
		new_list.push(list[count]); 
		count--; 
	}
	
	return new_list; 
		//return list; 
} 

function reverseArrayInPlace(list) {
	var count = 0;
	var new_list = [] 
	var other_count = list.length - 1; 
	
	while(count < list.length) {
		new_list.push(list[count]); 
		count++; 
	}
	
	
	while(other_count >= 0 ) {
		list.shift(); 
		list.push(new_list[other_count]) 
		other_count--; 
	}

}


reverseArrayInPlace(array)
console.log(array); 

function arrayToList(array) {
	var list = {value: array[0], rest: null}; 
	var current = list; 
	
	for(var count = 1; count < array.length; count++) {
		current.rest = {
			value: array[count], 
			rest: null 
		}; 
		current = current.rest; 
	
	}
	
	return list; 
}

/* SOLUTION FOR ARRAY TO LIST 
function arrayToList(array) {
	var list = null; 
	
	for(var i = array.length; i >= 0; i--) 
		list = {value: array[i], rest:list}; 

	return list; 
}
	
*/

function listToArray(list) {
	var current = list; 
	var array = []; 
	
	while(current.rest !== null ) {
		array.push(current.value); 
		current = current.rest; 
	}
	
	array.push(current.value); 
	
	return array; 
}

/*
function listToArray(list) {
	var array = []; 
	
	for(var node = list ; node ; node = node.rest) 
		array.push(node.value); 
	return array; 
}

*/

function prepend(num, list) {
	var new_list = {value: num, rest: list}; 
	return new_list
}

function nth(list, num) {

}

console.log(arrayToList(array2)); 
console.log(listToArray(arrayToList(array2))); 
console.log(prepend(10), arrayToList(array2)); 

function deepEqual(a, b) {
	if(a === b) return true; 
	
	if (a == null || typeof a != "object" ||
		b == null || typeof b != "object") 
		return false; 
	
	var propsInA = 0, propsInB = 0; 
	
	for(var prop in a) 
		propsInA += 1; 
	
	for(var prop in b) {
		propsInB += 1; 
		if (!(prop in a) || !deepEqual(a[prop], b[prop]))
			return false; 
	}
	
	return propsInA == propsInB; 
}
	}
}