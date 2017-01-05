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