

export class Node{
	constructor(data = 0){
		if (arguments.length >1){
			throw new Error("too many argument variables");
		} 
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


