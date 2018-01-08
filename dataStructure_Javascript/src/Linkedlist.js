import {Node} from "./Node.js";

export class LinkedList{
	/**
	 * Creates an instance of LinkedList.
	 * @memberof LinkedList
	 */
	constructor(){
		if(arguments.length > 0){
			throw new Error("too many argument variables");
		}
		this.head = null;
		this.tail = null;
	}
	/**
	 * adds any type of data object into the linked list, 
	 * 
	 * @param {any} data 
	 * @memberof LinkedList
	 */
	add(data){
		if(arguments.length !== 1){
			throw new Error("must have an input argument");
		};
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

	/**
	 * removes the wanted data from the linkedlist that matches the input data
	 * 
	 * @param {any} data 
	 * @returns {Boolean} true if removal was successful, else false.
	 * @memberof LinkedList
	 */
	remove(data){
		let currentNodePointer = this.head;
		if(this.isEmpty()){
			return false;
		}
		if(currentNodePointer.getData() == data){
			this.head = this.head.getNext();
			return true;
		}
		
		while(currentNodePointer.getNext() !== null){
			if(currentNodePointer.getNext().getData() === data){
				currentNodePointer.setNext(currentNodePointer.getNext().getNext());
				return true
			}
			else{
				currentNodePointer = currentNodePointer.getNext();
			}
		}
		return false;
	}

	/**
	 * traverses the linked list.
	 * 
	 * @returns {Collection}
	 * @memberof LinkedList
	 */
	traverse(){
		let currentNodePointer = this.head;
		if(arguments.length > 0){
			throw new Error('no arguments allowed');
		}
		let dataCollection = [];
		while(currentNodePointer !== null){
			dataCollection.push(currentNodePointer.getData());
			currentNodePointer = currentNodePointer.getNext();			
		}
		return dataCollection;
	}

	/**
	 * checks if the linked list is empty
	 * 
	 * @returns {Boolean} true if empty, else false.
	 * @memberof LinkedList
	 */
	isEmpty(){
		return this.head == null;
	}
}

