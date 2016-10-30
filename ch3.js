//MINIMUM
function min(first_num, second_num) {
	var output = ""; 
	if(first_num < second_num) {
		output = first_num; 
	}
	else {
		output = second_num; 
	}
	
	return output; 
}

console.log(min(0, 10)); 

console.log(min(0, -10)); 

//RECURSION
function isEven(number) {
	if(Math.abs(number) == 0) {
		return "even"; 
	}
	else if (Math.abs(number) == 1) {
		return "odd"; 
	}
	else {
		return isEven(Math.abs(number) - 2); 
	}
	
}

console.log(isEven(50)); 
console.log(isEven(75)); 
console.log(isEven(-1)); 

//BEAN COUNTING 

function countBs(string) {
	var count = 0; 
	for(var i = 0; i < string.length; i++) {
		if(string.charAt(i) == "B") {
			count++; 
		}
	}
	return count; 
}

function countChar(string, character) {
	var count = 0; 
	for(var i = 0; i < string.length; i++) {
		if(string.charAt(i) == character) {
			count++; 
		}
	}
	return count; }

console.log(countBs("BBC")); 
console.log(countChar("kakkerlak", "k")); 