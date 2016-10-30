//LOOPING A TRIANGLE
string = "#"; 
for(var count = 1; count <= 7; count++) {
	console.log(string);
	string = string + "#"; 
}

//FIZZBUZZ
for(var count = 1; count <= 100; count++) {
	if(count % 3 == 0 && count % 5 == 0) {
		console.log("FizzBuzz"); 
	}
	else if (count % 3 == 0) {
		console.log("Fizz"); 
	}
	else if(count % 5 == 0) {
		console.log("Buzz"); 
	}
	else {
		console.log(count); 
	}
}

//CHESS BOARD
var row_count = 8; 
var column_count = 7;
var output = ""; 

for(var row = 0; row < row_count; row++) {
	for(var column = 0; column < column_count; column++) {
		if((row + column) % 2 == 0) {
			output = output + " "; 
		}
		else{
			output = output + "#"; 
		}
	}
	
	if(row !== row_count - 1) {
		output = output + "\n"; 
	}
}

console.log(output); 