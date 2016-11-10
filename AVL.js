function AVL() {
	this._root = null; 
}

AVL.prototype.insert = function(value) {
	var current = this._root; 
	var node = {
		data: value, 
		height: 0, 
		right: null, 
		left: null
	}
	if(current === null) {
		this._root = node; 
	}	
	else {
		this.insert_recursion(current, node); 
	}

}

AVL.prototype.insert_recursion = function(current, node) {
	if(current.right == null && current.left == null) {
		if(current.data > node.data) {
			current.left = node;
		}
		else {
			current.right = node; 
		}
	}
	else if (current.data > node.data) {
		insert_recursion(current.left, node); 
	}
	else if (current.data < node.data) {
		insert_recursion(current.right, node); 
	}

}

var first = new AVL(); 
console.log(first); 
first.insert(30); 
console.log(first); 