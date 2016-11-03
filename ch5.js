var arrays = [[1, 2, 3], [4, 5], [6]];

function reduce(arrays, action) {
	var newarray = []
	newarray = action(arrays);
	return newarray;  
}

function combinearrays(array2) {
	var output = []; 
	for(var i = 0; i < array2.length; i++) {
		for(var h = 0; h < array2[i].length; h++) {
			output.push(array2[i][h]); 
		}
	}
	
	return output; 
}

console.log(reduce(arrays, combinearrays)); 