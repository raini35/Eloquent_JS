//OBJECTS AS INTERFACES
var weekDay = function() {
	var names = ["Sunday", "Monday", "Tuesday", "Wednesday",
               "Thursday", "Friday", "Saturday"];
	
	return {
		name: function(number) { return names[number]; }, 
		number: function(name) { return names.indexOf(name); }
	}; 
}(); 


(function(exports) {
	var names = ["Sunday", "Monday", "Tuesday", "Wednesday",
               "Thursday", "Friday", "Saturday"];
    
    exports.name = function(number) {
    	return names[number]; 
    }; 
    
    exports.number = function(name) {
    	return names.indexOf(name); 
    }; 
})(this.weekDay = {}); 

//EVALUATING DATA AS CODE 
var plusOne = new Function("n", "return n + 1;"); 
console.log(plusOne(4)); 

//REQUIRE 
function require(name) {
	var code = new Function("exports", readFile(name)); 
	var exports = {}; 
	code(exports); 
	return exports; 
}

function require(name) {
	if (name in require.cache) 
		return require.cache[name]; 
		
	var code = new Function("exports, module", readFile(name)); 
	var exports = {}, module = {exports: exports}; 
	code(exports, module); 
	
	require.cache[name] = module.exports; 
	return module.exports; 
}

require.cache = Object.create(null); 

