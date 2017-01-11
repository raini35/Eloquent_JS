console.log(/abc/.test("lkjhlkjhabcde")); 

console.log(/abc/.test("lhjlkjabxde")); 

console.log(/[0-9]/.test("in 1992")); 

console.log(/0/.test("in 1992")); 

var dateTime = /\d\d-\d\d-\d\d\d\d \d\d:\d\d/

console.log(dateTime.test("30-01-2003 15:20")); 

var dateTime = /\d{1,2}-\d{1,2}-\d{4} \d{1,2}:\d{1,2}/

console.log(dateTime.test("30-01-20032 15:20")); 

var cartoonCrying = /boo+(hoo+)+/i;
//bo once
//o more than once 
//ho once
//o more than once
//hoo more than once 

console.log(cartoonCrying.test("boobooohooohooo"));

//+ = element may be repeated more than once
//* = element can appear zero times
//i = expression is case insensitive

var match = /\d+/.exec("one two 100"); 

console.log(match); 

console.log("one two 100".match(/\d+/));

var quotedText = /'([^']*)'/; 

console.log(quotedText.exec("she said 'hello'"));

console.log(/bad(ly)?/.exec("bad")); 

console.log(/(\d)+/.exec("1234")); 

var match2 = dateTime.exec("30-01-2003 15:20")
console.log(match2[0]); 


function findDate(string) {
	var dateTime = /(\d{1,2})-(\d{1,2})-(\d{4})/
	var match = dateTime.exec(string); 
	return new Date(Number(match[3]), Number(match[2]-1), Number(match[1])); 
}

console.log(findDate("30-1-2003"));

var animalCount = /\b\d+ (pig|cow|chicken)s?\b/;
console.log(animalCount.test("15 pigs"));


var numberMatch = /\b([01]+b|\d+|[\da-f]+h)\b/; 

console.log(numberMatch.test("0000000000"));

console.log(numberMatch.test("135")); 

console.log("papa".replace("p","m")); 

console.log("papa".replace(/p/g, "m"));

console.log("Borobudur".replace(/[ou]/, "a")); 

console.log("Borobudur".replace(/[ou]/g, "a")); 

console.log(
  "Hopper, Grace\nMcCarthy, John\nRitchie, Dennis"
    .replace(/([\w ]+), ([\w ]+)/g, "Hello, $2 $1!"));
    
var s = "the cia 123 and fbi 123"; 
console.log(s.replace(/\b(fbi|cia) (\d+)\b/g, random )); 	

function random(match, str, num) {
	num = Number(num) - 1; 
	console.log(num); 
	str = str.toUpperCase();
	return  str + " " + num ; 
}
var stock = "1 lemon, 2 cabbages, and 101 eggs"; 

function minusOne(match, amount, unit) {
	amount = Number(amount) - 1; 
	if(amount == 1) 
		unit = unit.slice(0, unit.length - 1); 
	else if (amount == 0)
		amount = "0"; 
	
	return amount + " " + unit; 
}

console.log(stock.replace(/(\d+) (\w+)/g, minusOne)); 

function stripComments(code) {
	return code.replace(/\/\/.*|\/\*[^]*?\*\//g, ""); 
}


console.log(stripComments("1 + /* 2 */3"));

console.log(stripComments("1 /* a */+/* b */ 1"));

var name = "dea+hl[]rd";
var text = "This dea+hl[]rd guy is super annoying.";
var escaped = name.replace(/[^\w\s]/g, "\\$&");
console.log(escaped); 

var escaped2 = name.replace(/(\+)(h)/, "\\$1\\$2");
console.log(escaped2); 

var regexp = new RegExp("\\b(" + escaped + ")\\b", "gi"); 
console.log(text); 
console.log(text.replace(regexp, "_$1_")); 

console.log("    word".search(/\S/)); 
console.log("        ".search(/\S/)); 


var pattern = /z/g; 
pattern.lastIndex = 2; 
var match = pattern.exec("xzyz"); 
console.log(match);
console.log(match.index); 

var digit = /\d/g; 
console.log(digit.exec("here it is: 1")); 
console.log(digit.lastIndex);
digit.lastIndex = 0; 
console.log(digit.exec("and now 1"));  

console.log("Banana".match(/an/g)); 

var input = "A string with 3 numbers in it... 42 and 88."; 
var number = /\b(\d+)\b/g; 
var match; 

while(match = number.exec(input))
	console.log("Found", match[1], "at", match.index); 
//console.log(pattern.lastIndex); 


