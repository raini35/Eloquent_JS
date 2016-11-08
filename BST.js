
function BST() {
	this._root = null; 
}

BST.prototype.insert_recursion = function(current, node) {
	if(current.data < node.data) {
		if(current.left === null) {
			current.left = node; 
			console.log(current); 
			return; 
		}
		else {
			this.insert_recursion(current.left, node); 
		}
	}
	else {
		if(current.right === null) {
			current.right = node; 
			console.log(current); 
			return; 
		}
		else {
			this.insert_recursion(current.right, node); 
		}
	}
	
}

BST.prototype.insert = function(value) {
	var current = this._root; 
	var node = { 
		data: value, 
		left: null, 
		right: null
	}
	
	if(current == null) {
		this._root = node; 
	}
	else {
		this.insert_recursion(current, node); 
		
	}
	
	
	
}



var first = new BST(); 
first.insert(30); 
first.insert(5); 
first.insert(50); 
first.insert(70); 
console.log(first); 