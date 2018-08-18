class Heap{
    /**
     * creates an empty heap (min heap where the root is going to be the minimum value of the heap)
     * @method constructor
     * @return empty heap
     */
    constructor(){
        this.size = 0;
        this.heap = []; //focus pointer is the place the next insertion should take place.
    }
    /**
     * inserts a data in
     * @method insert
     * @param  {[type]} data [description]
     * @return {[type]}      [description]
     */
    insert(data){
        let nodeToBeInserted = new Node(data);
        this.heap.push(nodeToBeInserted);
        if(this.size == 0){
            this.size++;
        }
        else{
            this.size++;
            this.bubbleup();
        }
    }
    /**
     * delete the minimum node
     * @method delete
     * @return {[type]} [description]
     */
    delete(){
        if(this.isEmpty()){
            return;
        }
        else{
            this.heap[0] = this.heap[this.size-1]; //last element gets to go to the front
            this.heap.pop() //last element gets popped
            this.size--;    
            if(this.size > 1){
                this.bubbledown()
            }        
        }
    }
    /**
     * checks if the heap is empty.
     * @method isEmpty
     * @return {Boolean} returns true if empty [else false]
     */
    isEmpty(){
        if(this.size == 0){
            return true;
        }
        else{
            return false;
        }
    }
    root(){
        return this.heap[0].data;
    }
    /**
     * when the node is inserted the heap should make sure that heap is in the [used when inserted]
     * minimum state
     * @method bubbleup
     * @return {undefined} [returns nothing]
     */
    bubbleup(){
        let currentIndex = this.size-1;
        while(currentIndex != 0){
            console.log(this.heap[currentIndex]);
            if(this.heap[currentIndex].data < this.heap[Math.floor(currentIndex/2)].data){
                //if the current value is smaller than the parent then bubbleup.
                this.switchPlaces(currentIndex, Math.floor(currentIndex/2));
                currentIndex = Math.floor(currentIndex/2)
            }
            else{
                break;
            }
        }
    }
    /**
     * when the root is deleted, the last one should come up at bubble down.
     * @return {[type]} [description]
     */
    bubbledown(){
        let currentIndex = 0;
        console.log('doing the bubble down!')
        while(true){
            if(currentIndex*2 + 1 < this.size-1){
                if(this.heap[currentIndex].data > this.heap[currentIndex*2 +1].data){
                console.log('switching with left child');
                this.switchPlaces(currentIndex, currentIndex*2 + 1);
                currentIndex = currentIndex*2+1;
                }
            }
            else if(currentIndex*2 + 2 < this.size-1){
                if(this.heap[currentIndex].data > this.heap[currentIndex*2 +2].data){
                    console.log('switching with right child');
                    this.switchPlaces(currentIndex, currentIndex*2 + 2);
                    currentIndex = currentIndex *2 +2;
                }
            }
            else{
                console.log('done switching.');
                break;
            }
        }
    }

    switchPlaces(from_index, to_index){
        let temp = this.heap[from_index];
        this.heap[from_index] = this.heap[to_index];
        this.heap[to_index] = temp;
    }
}
