var MOUNTAINS = require('./mountains.js');
/*
HISTORY OF OBJECTS

Complexity can be made manageable by separating the entire program into 
small compartments isolated from each other. 

An object is a hard shell that hides the gooey complexity inside it and 
instead offers methods that present an interface through which the object
is used. 

The idea is that the interface allows the user to work with the object 
without knowing what's going inside.

Encapsulation - distinguishing between internal and external interface

*/

//METHODS

var rabbit = {}; 
rabbit.speak = function(line) {
	console.log("The rabbit says '" + line +"'"); 
};

console.log(rabbit); 
rabbit.speak("I'm alive."); 

function speak(line) {
	console.log("The " + this.type + " rabbit says '" + 
				line + "'"); 
}

var whiteRabbit = {type: "white", speak: speak }; 
var fatRabbit = {type: "fat", speak: speak }; 
var asianRabbit = {type: "asian", speak: speak}; 

whiteRabbit.speak("Oh my ears and whiskers, how late it's getting!"); 
fatRabbit.speak("I could sure use a carrot right now."); 
asianRabbit.speak("I'm from the Philippines."); 

//apply & call method 
speak.apply(fatRabbit, ["Burp!"]); 
speak.call({type: "old"}, "Oh my."); 

//PROTOTYPES
var empty = {}; 
console.log(empty.toString); 
console.log(empty.toString());

console.log(Object.getPrototypeOf({}) ==
			Object.prototype); 
console.log(Object.getPrototypeOf(Object.prototype)); 

console.log(Object.getPrototypeOf(isNaN) ==
			Function.prototype); 
console.log(Object.getPrototypeOf([]) == 
			Array.prototype); 

var protoRabbit = {
	speak: function(line) {
		console.log("The " + this.type + " rabbit says '" + 
					line + "'"); 
	}
}; 

var killerRabbit = Object.create(protoRabbit); 
killerRabbit.type = "killer"; 
killerRabbit.speak("SKREE!"); 

//The protoRabbit acts as the container for all instances such as killerRabbit

//CONSTRUCTORS 
//Before you had to use Object.create() to make an instance of the object 
//now by using new ObjectName you can create instances 

function Rabbit(type) {
	this.type = type; 
}
var killerRabbit = new Rabbit("killer"); 
var blackRabbit = new Rabbit("black"); 
console.log(blackRabbit.type); 
console.log(blackRabbit); 

//By using var ObjectName = function() {} the objectName is not included 
//when it the object is outputted
var rabbit = function(type) {
	this.type = type; 
}

var hello = new rabbit("asian"); 
console.log(hello);

Rabbit.prototype.speak = function(line) {
	console.log("The " + this.type + " rabbit says '" + 
				line + "'"); 
};

blackRabbit.speak("Doom...");

//OVERRIDING DERVIED PROPERTIES
Rabbit.prototype.teeth = "small"; 
console.log(killerRabbit.teeth); 

killerRabbit.teeth = "long, sharp, and bloody"; 
console.log(killerRabbit.teeth); 

console.log(blackRabbit.teeth); 

console.log(Rabbit.prototype.teeth);

//Overriding properties that exist in a prototype is often a useful to do. 
//You can place a base class throughout the instances of the object but 
//when you need to be more specific for an individual instance, you can 
//override the property for specificity. 

console.log(Array.prototype.toString == Object.prototype.toString); 
			
console.log([1, 2].toString()); 

console.log(Object.prototype.toString.call([1,2])); 

//PROTOTYPE INTERFERENCE 
//A prototype can be used at any time to add new properties and methods to 
//all objects based on it. 

Rabbit.prototype.dance = function() {
	console.log("The " + this.type + " rabbit dances a jig."); 
}; 	

killerRabbit.dance(); 

var map = {}; 
function storePhi(event, phi) {
	map[event] = phi; 
}	

storePhi("pizza", 0.069); 
storePhi("touched tree", -0.081);

Object.prototype.nonsense = "hi";
for(var name in map)
	console.log(name); 
	
console.log("nonsense" in map); 
console.log("toString" in map); 

delete Object.prototype.nonsense; 

//Enumerable vs Non-enumerable Properties
//Enmerable properties - all properties that we create by simply assigning
//to them are enumerable
//Non-enumerable - the standard properties of an object are all non-enumerable

Object.defineProperty(Object.prototype, "hiddenNonsense", {enumerable: false, value: "hi"});

for (var name in map) 
	console.log(name); 

console.log(map.hiddenNonsense);

console.log(map.hasOwnProperty("toString"));


//When you are worried that someone might have messed with the base object prototype...
for(var name in map) {
	if(map.hasOwnProperty(name)){
		//..this is an own property
	}
}

//PROTOTYPE-LESS OBJECTS
//You can create objects with null as the prototype so that you can create an 
//object with no prototype 
//Uses: when you want to make sure that your object doesn't change any 
//non-enumerable property ie setting hasOwnProperty to the value of 42

var map = Object.create(null); 
map["pizza"] = 0.069; 
console.log("toString" in map); 
console.log("pizza" in map); 

//POLYMORPHISM 
//Polymorphic code can work with alues of different shapes, as long as they 
//support the interface it expects. 

//LAYOUT OUT A TABLE
function rowHeights(rows) {
  return rows.map(function(row) {
    return row.reduce(function(max, cell) {
      return Math.max(max, cell.minHeight());
    }, 0);
  });
}

function colWidths(rows) {
  return rows[0].map(function(_, i) {
    return rows.reduce(function(max, row) {
      return Math.max(max, row[i].minWidth());
    }, 0);
  });
}

function drawTable(rows) {
  var heights = rowHeights(rows);
  var widths = colWidths(rows);

  function drawLine(blocks, lineNo) {
    return blocks.map(function(block) {
      return block[lineNo];
    }).join(" ");
  }

  function drawRow(row, rowNum) {
    var blocks = row.map(function(cell, colNum) {
      return cell.draw(widths[colNum], heights[rowNum]);
    });
    return blocks[0].map(function(_, lineNo) {
      return drawLine(blocks, lineNo);
    }).join("\n");
  }

  return rows.map(drawRow).join("\n");
}

function repeat(string, times) {
  var result = "";
  for (var i = 0; i < times; i++)
    result += string;
  return result;
}

function TextCell(text) {
  this.text = text.split("\n");
}
TextCell.prototype.minWidth = function() {
  return this.text.reduce(function(width, line) {
    return Math.max(width, line.length);
  }, 0);
};
TextCell.prototype.minHeight = function() {
  return this.text.length;
};
TextCell.prototype.draw = function(width, height) {
  var result = [];
  for (var i = 0; i < height; i++) {
    var line = this.text[i] || "";
    result.push(line + repeat(" ", width - line.length));
  }
  return result;
};

function UnderlinedCell(inner) {
  this.inner = inner;
}
UnderlinedCell.prototype.minWidth = function() {
  return this.inner.minWidth();
};
UnderlinedCell.prototype.minHeight = function() {
  return this.inner.minHeight() + 1;
};
UnderlinedCell.prototype.draw = function(width, height) {
  return this.inner.draw(width, height - 1)
    .concat([repeat("-", width)]);
};

function RTextCell(text) {
	TextCell.call(this, text); 
}
RTextCell.prototype = Object.create(TextCell.prototype); 
RTextCell.prototype.draw = function(width, height) {
	var result = []; 
	for(var i = 0; i < height; i++) {
		var line = this.text[i] || ""; 
		result.push(repeat(" ", width - line.length) + line); 
	}
	return result; 
}; 

function dataTable(data) {
  var keys = Object.keys(data[0]);
  var headers = keys.map(function(name) {
    return new UnderlinedCell(new TextCell(name));
  });
  var body = data.map(function(row) {
    return keys.map(function(name) {
    	var value = row[name]; 
    	if(typeof value == "number") 
    		return new RTextCell(String(value)); 
    	else 
      		return new TextCell(String(row[name]));
    });
  });
  return [headers].concat(body);
}

var rows = [];
for (var i = 0; i < 8; i++) {
   var row = [];
   for (var j = 0; j < 2; j++) {
     if ((j + i) % 2 == 0)
       row.push(new TextCell("##"));
     else
       row.push(new TextCell("  "));
   }
   rows.push(row);
}
console.log(drawTable(rows));
console.log(drawTable(dataTable(MOUNTAINS)));


//GETTERS AND SETTERS 
var pile = {
	elements: ["eggshell", "orange peel", "worm"], 
	get height() {
		return this.elements.length; 
	}, 
	set height(value) {
		console.log("Ignoring attempt to set height to", value); 
	}
};

console.log(pile.height); 

pile.height = 100;

Object.defineProperty(TextCell.prototype, "heightProp", { 
	get: function() { return this.text.length; }
});

var cell = new TextCell("no\nway");
console.log(cell.heightProp); 

cell.heightProp = 100; 
console.log(cell.heightProp);

//THE INSTANCE OF OPERATOR 
console.log(new RTextCell("A") instanceof RTextCell); 
console.log(new RTextCell("A") instanceof TextCell); 
console.log(new TextCell("A") instanceof RTextCell); 
console.log([1] instanceof Array);