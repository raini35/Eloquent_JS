//REGEXP GOLF

///ca(r|t)/
//pop and prop
//ferret, ferry, and ferrari
//Any word ending in ious
//A whitespace character followed by a dot, comma, colon, or semicolon
//A word longer than six letters
//A word without the letter e
/*
/car[r|t]/
/pr?op/
/ferr[et|y|ari]/
/\w+ious/
/ (\?|=|\+|.)/
/\w{7,}/
/\b[a-df-z]+\b/
*/



function verify(regexp, yes, no) {
  // Ignore unfinished exercises
  if (regexp.source == "...") return;
  yes.forEach(function(s) {
    if (!regexp.test(s))
      console.log("Failure to match '" + s + "'");
  });
  no.forEach(function(s) {
    if (regexp.test(s))
      console.log("Unexpected match for '" + s + "'");
  });
}
var match = /\b[a-df-z]+\b/i.exec("red blu platypus blue")
console.log(match); 


//QUOTING STYLE 

var text = "'I'm the cook,' he said, 'it's my job.'";
var regex = /(^|\W)'|'(\W\|$)/g; 
console.log(text.replace(regex, '$1"$2')); 
//It iterates through the entire text file 
//When it recognizes 1 or 2 it then initiates the replace function 
//it can either do one of two things 
//Gets the start or non word character (1) and then replace the ' with " 
//Gets the non word character or last (2) and then replace the ' with " 


//NUMBERS AGAIN 
var regexTest = /^-?\d+e?-?\+?\d+$/gi; 
console.log(regexTest.test("1e-12")); 