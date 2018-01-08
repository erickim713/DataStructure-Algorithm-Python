export class Stack{
	/**
	 * Creates an instance of Stack.
	 * @memberof Stack
	 */
	constructor(){
		if(arguments.length > 0){
			throw new Error('no arguments allowed');
		}
		this._buffer = [];
		this.size = 0;
		this.top = null;
	}
	
	/**
	 * if not empty, pops the last pushed element from the stack
	 * if empty, throws error;
	 * @returns {any} last element, or Error
	 * @memberof Stack
	 */
	pop(){
		if(!this.isEmpty()){
			let toBeReturned = this.top;
			this._buffer.pop();
			this.size--;
			if(this.size > 0){
				this.top = this._buffer[this.size - 1];
			}
			else{
				this.top = null;
			}
			return toBeReturned;	
		}
		else{
			throw new Error('stack is empty');
		}
	}
	
	/**
	 * pushes the input data into the stack, if no argument or more than one args,
	 * are passed, then throws errors.
	 * 
	 * @param {any} data 
	 * @memberof Stack
	 */
	push(data){
		if(arguments.length > 1){
			throw new Error('more than one argument is not allowed');
		}
		else if(arguments.length < 1){
			throw new Error('one argument is needed to push data');
		}
		this._buffer.push(data);
		this.top = data;
		this.size++;
	}

	/**
	 * checks if the stack is empty
	 * if empty, true, else false
	 * @returns {Boolean}
	 * @memberof Stack
	 */
	isEmpty(){
		if(this.size == 0){
			return true;
		}
		else{
			return false;
		}
	}

	/**
	 * empties the stack and resets all the attributes accordingly.
	 * 
	 * @memberof Stack
	 */
	emptyStack(){
		this._buffer = [];
		this.size = 0;
		this.top = null;
	}
	
	/**
	 * just a function to see inside the stack on console terminal
	 * 
	 * @returns 
	 * @memberof Stack
	 */
	show(){
		console.log(this._buffer);
	}
}