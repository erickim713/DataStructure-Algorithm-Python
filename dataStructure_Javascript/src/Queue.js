export class Queue{
	constructor(){
		if(arguments.length >0){
			throw new Error('does not take input');
		}
		this.list = [];
		this.size = 0;
	}
	enqueue(arg1){
		if(arguments.length < 1){
			throw new Error('needs an input data');
		}
		if(arguments.length > 1){
			throw new Error('does not take multiple inputs');
		}
		this.list.push(arg1);
		this.size++;
	}
	dequeue(){
		if(arguments.length > 0){
			throw new Error('no argument is needed');
		}

		if(this.size < 1){
			throw new Error('cannot dequeue from an empty queue');
		}
		else{
			let result = this.list.shift();
			this.size--;
			return result;
		}
	}
	show(){
		if(arguments.length > 0){
			throw new Error('no arguments needed');
		}
		return this.list;
	}
}