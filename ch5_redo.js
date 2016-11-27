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