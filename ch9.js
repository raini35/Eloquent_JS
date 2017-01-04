/*
var re1 = new RegExp("abc"); 
var re2 = /abc/; 

//TESTING FOR MATCHES 
console.log(/abc/.test("abcde")); 
console.log(/abc/.test("abxde")); 

//MATCHING A SET OF CHARACTERS
console.log(/[0123456789]/.test("in 1992")); 
console.log(/[0-9]/.test("in 1992")); 

var dateTime = /\d\d-\d\d-\d\d\d\d \d\d:\d\d/; 
console.log(dateTime.test("30-01-2003 15:20"));
console.log(dateTime.test("30-jan-2003 15:20"));

//REPEATING PARTS OF A PATTERN 
console.log(/'\d+'/.test("'123'"));
console.log(/'\d+'/.test("''"));
console.log(/'\d*'/.test("'123'"));
console.log(/'\d*'/.test("''"));

var neighbor = /neighbou?r/; 
console.log(neighbor.test("neighbour"));

var dateTime = /\d{1,2}-\d{1,2}-\d{2,44} \d{1,2}:\d{2}/;
console.log(dateTime.test("30-1-2003 8:45"));
console.log(dateTime.test("30-1-95 9:00"));

//GROUPING SUBEXPRESSIONS
var cartoonCrying = /boo+(hoo+)+/i;
console.log(cartoonCrying.test("Boohoooohooooo"));

//MATCHES AND GROUPS
var match = /\d+/.exec("one two 100");
console.log(match);
console.log(match.index);
console.log("one two 100".match(/d+/));

var quotedText = /'([^']*)'/;
console.log(quotedText.exec("she said 'hello'"));

//GREED 
function stripComments(code) {
  return code.replace(/\/\/.*|\/\*[^]*\*\//g, "");
}

*/
var notBinary = /[^ab]/;

console.log(/[\w]/.test("A1111"));
console.log(notBinary.test("1100100010100110")); 
console.log(notBinary.test("11001002010100110")); 

var cartoonCrying = /boo+(hoo+)+/i; 

console.log(cartoonCrying.test("BOOhOOOhOOhOOOO"));

var match = /\d+/.exec("one two 100");
console.log(match);

console.log("one two 100".match(/\d+/));

var quotedText = /'([^']*)'/;
console.log(quotedText.exec("she said 'hello'"));

console.log(/bad(ly)?/.exec("bad"));
console.log(/(\d)+/.exec("123"));

console.log(new Date());
console.log(new Date(2009, 13, 9));

function findDate(string) {
	var dateTime = /(\d{1,2})(-|\/)(\d{1,2})(-|\/)(\d{4})/;
	var match = dateTime.exec(string); 
	return new Date(Number(match[5]), 
					Number(match[3]) - 1, 
					Number(match[1])); 
}
console.log(findDate("Hello I was born in 30/1/2003"));

//WORD STRING BOUNDARIES

