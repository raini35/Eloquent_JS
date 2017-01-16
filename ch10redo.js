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