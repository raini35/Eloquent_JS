//car and cat

/ca(r|t)/
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
/\b\b/
/\w{9,}/
//
*/

var notBinary = /[^e]+/;
console.log(notBinary.test("bee"));
// → false
console.log(notBinary.test("bbbebbbbbb"));
