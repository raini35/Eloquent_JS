array = [1,2,3,4,5,6,7 ];

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
	
	while(current.value !== null ) {
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

}

function nth(list, num) {

}

console.log(arrayToList(array)); 
console.log(listToArray(arrayToList(array))); 