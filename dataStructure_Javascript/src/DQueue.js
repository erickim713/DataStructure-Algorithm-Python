
export class Deque{
	constructor(){
		if(arguments.length >0){
			throw new Error('no arguments allowed');
		}
		this.queue = [];
		this.size = 0;
	}
	/**
	 * adds data to the end of the queue
	 * 
	 * @param {any} data 
	 * @memberof Deque
	 */
	append(data){
		if(arguments.length < 1){
			throw new Error('need an argument inside the method');
		}
		if(arguments.length > 1){
			throw new Error('should throw an error');
		}
		this.queue.push(data);
		this.size++;
	}
	
	/**
	 * adds data to the front of the queue
	 * 
	 * @param {any} data 
	 * @memberof Deque
	 */
	prepend(data){
		if(arguments.length < 1){
			throw new Error('no data input');
		}
		if(arguments.length > 1){
			throw new Error('need an argument inside')
		}
		this.queue.unshift(data);
		this.size++;
	}

	/**
	 * deletes the data at the back of the queue
	 * 
	 * @memberof Deque
	 */
	deleteLast(){
		if(!this.isEmpty()){
			this.queue.pop();
			this.size--;
		}
		else{
			throw new Error('Deque is empty');
		}
	}

	/**
	 * deletes the data at the front of the queue
	 * 
	 * @memberof Deque
	 */
	deleteFirst(){
		//removes the first element in the queue.
		if(!this.isEmpty()){
			this.queue.shift();
			this.size--;
		}
		else{
			throw new Error('Deque is empty');
		}
	}
	isEmpty(){
		if(arguments.length > 0){
			throw new Error('no argument is allowed');
		}
		if(this.size == 0){
			return true;
		}
		else{
			return false;
		}
	}
	/**
	 * function to show the current state of the double ended queue.
	 * @method show
	 * @return {[none]} [just prints out the current state of the queue on the console.]
	 */
	show(){
		console.log(this.queue);
	}
}
