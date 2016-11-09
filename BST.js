
function BST() {
	this._root = null; 
}

BST.prototype.insert_recursion = function(current, node) {
	if(current.data > node.data) {
		if(current.left === null) {
			current.left = node; 
			return; 
		}
		else {
			this.insert_recursion(current.left, node); 
		}
	}
	else {
		if(current.right === null) {
			current.right = node; 
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


BST.prototype.clear_recursion = function(current) {
	if(current.right == null && current.left == null) {
		delete data; 
		delete left; 
		delete right; 
		return; 
	}
	
	//I need the if statement because javascript will not be able to evaluate null objects
	if(current.left !== null) {
		this.clear_recursion(current.left); 
	}
	
	if(current.right !== null) {
		this.clear_recursion(current.right); 
	}
	
	delete current.data; 
	delete current.left; 
	delete current.right; 
	
}

BST.prototype.clear = function() {
	this.clear_recursion(this._root); 
}

BST.prototype.print_pre_order = function() {
	var list = []; 
	var output = this.pre_order(this._root, list); 
	
	console.log(output); 
}

BST.prototype.print_in_order = function() {
	var list = []; 
	var output = this.in_order(this._root, list); 
	
	console.log(output); 
}

BST.prototype.print_post_order = function() {
	var list = []; 
	var output = this.post_order(this._root, list); 
	
	console.log(output); 
}

BST.prototype.pre_order = function(current, array) {
	array.push(current.data); 
	
	if(current.right == null && current.left == null) {
		return array; 
	}
	
	if(current.left !== null) {
		this.pre_order(current.left, array); 
	}
	
	if(current.right !== null) {
		this.pre_order(current.right, array); 
	}
	
	return array; 
}

BST.prototype.post_order = function(current, array) {
	
	if(current.left == null && current.right == null) {
		array.push(current.data); 
		return array; 
	}
	
	if(current.left !== null) {
		this.post_order(current.left, array); 
	}
	
	if(current.right !== null) {
		this.post_order(current.right, array); 
	}
	
	array.push(current.data); 

	return array; 
}

BST.prototype.in_order = function(current, array) {
	if(current.right == null && current.left == null) {
		
		array.push(current.data); 
		return array; 
	}
	
	if(current.left !== null) {
		this.in_order(current.left, array); 
	}
	
	
	array.push(current.data);
	
	
	if(current.right !== null) {
		this.in_order(current.right, array); 
	}
	
	 

	return array; 
}


BST.prototype.delete_this = function(value) {
	if(this.search(value)) {
		var current = this._root; 
		this.delete_specific(value); 
	}
	else {
		console.log("Value is not in the list."); 
	}
}

BST.prototype.delete_specific = function(current, value) {

}; 

BST.prototype.search = function(value) {
	var current = this._root; 
	var found = false; 
	
	while(!found && current) {
		if(current.data == value) {
			found = true; 
		}
		
		if(current.data > value) {
			current = current.left; 
		}
		else if(current.data < value) {
			current = current.right; 
		}
		
	}
	return found; 
}

var first = new BST(); 
first.insert(30); 
first.insert(5); 
first.insert(50); 
first.insert(70); 
console.log(first); 
console.log(first.search(100)); 
first.delete_this(1); 
first.clear(); 
console.log(first); 