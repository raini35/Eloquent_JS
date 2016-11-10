

Array.prototype.insert = function(value) {
	if(this.root == null) {
		this.root[1] = value; 
	}
}

var heap = []; 
heap.insert(30);
console.log(heap); 