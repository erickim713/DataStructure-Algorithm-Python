//design process.
//------------------------condition ----------------------
//tree node: not allowed to have more than k number of children
//trivial/non trivial fact: binary tree is a special case of k-ary tree, where k is 2 for binary tree.
//
// each node will have
//  data
//  children: storedin the form of list.

class KaryNode extends Node {
    constructor(content, limitation) {
        super(content); //get the structure from the Node Class even though there's nothing much
        this.children = []; //the nodes are stored in each node
        this.parentNode;
        this.maxChildrenAllowed = limitation;
    }
    isFull(){

        if(this.children.length == this.maxChildrenAllowed){
            console.log("dude the children list is full\n");
        }
        return this.children.length == this.maxChildrenAllowed;
    }

}
//
// Breadth-First-Search(Graph, root):
//
//     create empty set S
//     create empty queue Q
//
//     add root to S
//     Q.enqueue(root)
//
//     while Q is not empty:
//         current = Q.dequeue()
//         if current is the goal:
//             return current
//         for each node n that is adjacent to current:
//             if n is not in S:
//                 add n to S
//                 Q.enqueue(n)


class KaryTree{
    constructor(kFactor){
        this.limitation = kFactor;
        this.root;
    }
    /**
     * adds the node to the kary tree [complete form]
     * @method add
     * @param  {any data} data [data to be added to the tree]
     */
    add(data){
        let searchQueue = new Queue();
        let newNode = new KaryNode(data, this.limitation);
        let current;
        let status = true;
        if(this.root == undefined){
            this.root = newNode;
            console.log('empty root has been filled');
        }
        else{
            searchQueue.enqueue(this.root);
            while(status){
                searchQueue.showQueue();
                current = searchQueue.dequeue();
                console.log("dequeued just now");
                if(current.isFull() == false){
                    console.log("it's still not full");
                    current.children.push(newNode);
                    status = false;
                }
                else{
                    if(searchQueue.list.length == 0){
                        for (var i = 0; i < current.children.length; i++) {
                            searchQueue.enqueue(current.children[i]);
                        }
                    }
                    else{
                        continue;
                    }
                }
            }
        }
    }
    /**
     * removes a node at the end of the tree.
     * @method remove
     * @return {[type]} [description]
     */
    remove(){

    }
}
