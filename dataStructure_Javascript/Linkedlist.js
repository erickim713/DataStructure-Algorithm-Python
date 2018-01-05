import {Node} from "./Node.js";

class LinkedList{
	constructor(){
		console.log('linkedlist created');
		this.head = null;
		this.tail = null;
	}

	add(data){
		let nodeTobeAdded = new Node(data);
		if(this.isEmpty()){
			this.head = nodeTobeAdded;
			this.tail = nodeTobeAdded;
		}
		else{
			this.tail.setNext(nodeTobeAdded);
			this.tail = nodeTobeAdded;
		}
	}
	isEmpty(){
		return this.head == null;
	}
}

let x =new LinkedList()
console.log(x.isEmpty());