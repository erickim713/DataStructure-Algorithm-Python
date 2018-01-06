import {Node} from "./Node.js";

export class LinkedList{
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

	remove(data){
		let currentNodePointer = this.head;
		if(currentNodePointer.getData() == element){
			this.head = this.head.getNext();
		}
		
		while(currentNodePointer.getNext() !== null){
			if(currentNodePointer.getNext().getData() === element){
				currentNodePointer.setNext(currentNodePointer.getNext().getNext());
			}
			else{
				currentNodePointer = currentNodePointer.getNext();
			}
		}
	}

	traverse(){
		let currentNodePointer = this.head;
		while(currentNodePointer !== null){
			console.log(currentNodePointer.getData());
			currentNodePointer = currentNodePointer.getNext()			
		}
	}


	isEmpty(){
		return this.head == null;
	}
}

