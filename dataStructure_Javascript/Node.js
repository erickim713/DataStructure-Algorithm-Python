export class Node{
	constructor(data){
		this.data = data;
		this.next = null;
	}
	getData(){
		return this.data;
	}
	getNext(){
		return this.next;
	}
	setData(newValue){
		this.data = newValue;
	}
	setNext(newNext){
		this.next = newNext;
	}
}

