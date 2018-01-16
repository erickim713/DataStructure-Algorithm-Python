

import assert from 'assert';
import { Node } from '../src/Node';
import { LinkedList } from '../src/Linkedlist';
import { Stack } from '../src/Stack';
import { Queue } from '../src/Queue';
import { Deque } from '../src/DQueue';
import { BST } from '../src/BST';



describe('Data Structure Test', function() {
    // Node.js tests
    describe("> Node Tests",function(){
        describe("> testing constructor()", function(){
            it('#standard create: check data and next pointer', function(){
                let node = new Node(5);
                assert.equal(node.getData(), 5);
                assert.equal(node.getNext(), null);
            });
            it('#non-standard create: multiple values and arguments', function(){
                assert.throws(function(){
                    new Node(4, 5);
                }, Error, "too many argument variables");
            });
            it('#empty argument create: no input to constructor function', function(){
                let node = new Node();
                assert.equal(node.getData(), 0);
                assert.equal(node.getNext(), null);
            });
        });
    });
    // LinkedList.js tests
    describe("> Linked List Tests", function(){
        describe("> testing constructor()", function(){
            it('#standard create: head and tail should be empty', function(){
                let linkedlist = new LinkedList();
                assert.equal(linkedlist.head, null);
                assert.equal(linkedlist.tail, null);
            });
            it('#extra argument should be notified with errors', function(){
                assert.throws(function(){
                    new LinkedList(3);
                }, Error, "too many argument variables");
            });
        });
        describe('> testing add()', function(){
            it('#adding one variable: and checking both head and tail', function(){
                let linkedlist = new LinkedList();
                linkedlist.add(4);
                assert.equal(linkedlist.head.getData(), 4);
                assert.equal(linkedlist.tail.getData(), 4);
            });
            it('#inputing more than one argument: should end up in error', function(){
                assert.throws(function(){
                    let linkedlist = new LinkedList();
                    linkedlist.add(4, 5);                
                }, Error, "too many argument variables");
            });
            it('#empty inputs: should end up in error', function(){
                assert.throws(function(){
                    let linkedlist = new LinkedList();
                    linkedlist.add();
                }, Error, "must have an input argument");
            });
            it('#adding multiple data into the linked list', function(){
                let linkedlist = new LinkedList();
                for (let i = 0; i < 5; i++) {
                    linkedlist.add(i);
                }
                assert.equal(linkedlist.head.getData(), 0); // head should have the first value
                assert.equal(linkedlist.tail.getData(), 4); // tails should have the last value
                let pointer = linkedlist.head;
                for (let i = 0; i<5 ; i++){
                    assert.equal(pointer.getData(), i);
                    pointer = pointer.getNext();
                }
                assert.equal(pointer, null); //after tail, it should be null 0 -> 1 -> 2 -> 3-> null
            });
        });
        describe('> testing remove()', function(){
            it("#trying to remove empty linked list: should return false", function(){
                let linkedlist = new LinkedList();
                assert.equal(linkedlist.remove(5),false);
            });
            it('#trying to remove element that does not exist: should return false', function(){
                let linkedlist = new LinkedList();
                linkedlist.add(5);
                linkedlist.add(3);
                assert.equal(linkedlist.remove(4), false);
            });
            it('#trying to remove an element that does exist: should return true', function(){
                let linkedlist = new LinkedList();
                linkedlist.add(4);
                linkedlist.add(3);
                assert.equal(linkedlist.remove(4), true);
                assert.equal(linkedlist.head.getData(),3);
            });
        });
        describe('> testing traverse()', function(){
            it('#trying to put something into the traverse is not allowed here.', function(){
                assert.throws(function(){
                    let linkedlist = new LinkedList();
                    linkedlist.traverse(5);
                }, Error, 'no arguments allowed');
            });
            it('#normal traversing: sample input and expected should equal', function(){
                let linkedlist = new LinkedList();
                let sampleInput = [3, 5, 1];
                for (var index in sampleInput) {
                    linkedlist.add(sampleInput[index]);
                }
                let resultCollection = linkedlist.traverse();
                for(var index in resultCollection){
                    if(resultCollection[index] !== sampleInput[index]){
                        assert.fail("data of your traversed collection does not meet expected value from sample Input!");
                    }
                }
                assert.ok(1, 'passed');
            });
        });
        describe('> testing isEmpty()', function(){
            it('#checking empty linkedlist: should return true', function(){
                let linkedlist = new LinkedList();
                assert.equal(linkedlist.isEmpty(), true);
            });
            it('#adding a data to the linked list: should return false', function(){
                let linkedlist = new LinkedList();
                linkedlist.add(5);
                assert.equal(linkedlist.isEmpty(), false);
            });
            it('#adding a data to the linked list and removing the same element should return true', function(){
                let linkedlist = new LinkedList();
                linkedlist.add(5); 
                linkedlist.remove(5);
                assert.equal(linkedlist.isEmpty(), true);
            });
        });
    });
    // Stack.js Tests
    describe("> Stack Tests:", function(){
        describe('> testing constructor()', function(){
            it('#checking normal constructor', function(){
                let stack = new Stack();
                assert.equal(stack._buffer.length, 0);
                assert.equal(stack.size, 0);
            });
            it('#input to stack constructor: is not allowed, should throw errors', function(){
                assert.throws(function(){
                    new Stack(4);
                }, Error, "no arguments allowed");
            });
        });
        describe('> testing push()', function(){
            it("#normal adding to the stack should work", function(){
                let stack = new Stack();
                stack.push(4);
                stack.push(5);
                assert.equal(stack._buffer[0], 4);
                assert.equal(stack._buffer[1], 5);
            });
            it('#pushing more than one argument: should throw Error', function(){
                assert.throws(function(){
                    let stack = new Stack();
                    stack.push(5, 4);
                }, Error, 'more than one argument is not allowed');
            });
            it('#pushing nothing: should throw Error', function(){
                assert.throws(function(){
                    let stack = new Stack();
                    stack.push();
                }, Error, 'one argument is needed to push data');
            });
        });
        describe('> testing pop()', function(){
            it('#popping when there is no data in the stack: should throw an error', function(){
                assert.throws(function(){
                    let stack = new Stack();
                    stack.pop();
                }, Error, 'stack is empty');
            });
            it('#normal pop when stack has some data: popped value should equal pre-popped stack top', function(){
                let stack = new Stack();
                stack.push(4);
                stack.push(5);
                let top = stack._buffer[stack.size-1];
                assert.equal(stack.pop(), top);
            });
        });
        describe("> testing isEmpty()", function(){
            it('#when stack is empty: should return true', function(){
                let stack = new Stack();
                assert.equal(stack.isEmpty(), true);
            });
            it('#when stack is not empty: should not return true', function(){
                let stack = new Stack();
                stack.push(5);
                stack.push(3);
                stack.pop();
                assert.equal(stack.isEmpty(), false);
                assert.equal(stack.size, 1);
            });
        });
        describe("> testing emptyStack()", function(){
            it('#emptying stack: should have empty buffer, and size 0', function(){
                let stack = new Stack();
                stack.push(5);
                stack.push('hihi');
                stack.emptyStack();
                assert.equal(stack._buffer.length, 0);
                assert.equal(stack.size, 0);
                assert.equal(stack.isEmpty(), true);
            });
        });
    });
    // Queue.js tests
    describe('> Queue Tests', function(){
        describe('> testing constructor()',function(){
            it('#creating a normal queue without any input argument should have size 0',function(){
                let queue = new Queue();
                assert.equal(queue.size, 0);
            });
            it('#creating a queue with input: should throw an error', function(){
                assert.throws(function(){
                    let queue = new Queue([4, 5]);
                }, Error, 'does not take input');
            });
        })
        describe('> testing enqueue()',function(){
            it('#enqueue with no data input: should throw an error', function(){
                assert.throws(function(){
                    let queue = new Queue();
                    queue.enqueue();
                }, Error, 'needs an input data');
            });
            it('#enqueue with multiple data input: should throw an error', function(){
                assert.throws(function(){
                    let queue = new Queue();
                    queue.enqueue(2, 5);
                }, Error, 'does not take multiple inputs');
            });
            it('#enqueue with one input: should have size based on n input',function(){
                let queue = new Queue();
                for (let i = 0; i < 4; i++) {
                    queue.enqueue(i);
                }
                assert.equal(queue.size, 4);
            });
        });
        describe('> testing dequeue()',function(){
            it('#dequeuing with no data input: should dequeue based on FIFO rule', function(){
                let queue = new Queue();
                for (let i = 0; i < 4; i++) {
                    queue.enqueue(i);
                }
                assert.equal(queue.dequeue(), 0);
            });
            it('#dequeuing with no data input multiple times: should dequeue based on FIFO rule', function(){
                let queue = new Queue();
                for (let i = 0; i < 4; i++) {
                    queue.enqueue(i);
                }
                assert.equal(queue.dequeue(), 0);
                assert.equal(queue.dequeue(), 1);
            });
            it('#dequeuing with data input: should throw an error', function(){
                assert.throws(function(){
                    let queue = new Queue();
                    queue.enqueue(4);
                    queue.dequeue(4);
                }, Error, 'no argument is needed');
            });
            it('dequeuing when there is no data in queue: should throw an error', function(){
                assert.throws(function(){
                    let queue = new Queue();
                    queue.dequeue();
                }, Error, 'cannot dequeue from an empty queue');
            });
        });
        describe('> testing show()', function(){
            it('#showing with an argument: should throw an error', function(){
                assert.throws(function(){
                    let queue = new Queue();
                    queue.show(true);
                }, Error, 'no arguments needed');
            });
            it('#showing with no argument: should return a list with expected result', function(){
                let queue = new Queue();
                queue.enqueue(6);
                queue.enqueue(5);
                let expectedQueue = [6, 5];
                let resultQueue = queue.show()
                for(const index in resultQueue){
                    assert.equal(expectedQueue[index], resultQueue[index]);
                }
            });
        });
    });
    describe('> Deque tests', function(){
        describe('> testing constructor()',function(){
            it('#normal constructor: should have empty queue with size of 0', function(){
                let deque = new Deque();
                assert.equal(deque.size, 0);
                assert.equal(deque.queue.length, 0);
            });
            it('#no arguments allowed: should throw an error', function(){
                assert.throws(function(){
                    let deque = new Deque(5);                
                },Error, 'no arguments allowed');
            });
        });
        describe('> testing append()',function(){
            it('#appending with no data input: should throw an error', function(){
                assert.throws(function(){
                    let deque = new Deque();
                    deque.append();
                }, Error, 'need an argument inside the method');
            });
            it('#appending with data: should increase the size and add it to the end of the deque',function(){
                let deque = new Deque();
                deque.append(5);
                assert.equal(deque.size, 1);
                deque.append(1);
                assert.equal(deque.queue[1], 1);
            });
            it('#appending with more than one arguments: should throw an error',function(){
                assert.throws(function(){
                    let deque = new Deque();
                    deque.append(5, 4);
                }, Error, 'need an argument inside');
            });
        });
        describe('> testing prepend()',function(){
            it('#prepending with no data input: should thrown an error', function(){
                assert.throws(function(){
                    let deque = new Deque();
                    deque.prepend();
                }, Error, 'need an argument inside the method');
            });
            it('#prepending with data input should increase the size and add it to the front of the deque',function(){
                let deque =  new Deque();
                deque.prepend(5);
                assert.equal(deque.size, 1);
                deque.prepend(1);
                assert.equal(deque.queue[0], 1);
            });
            it('#prepending with more than one arguments: should throw an error',function(){
                assert.throws(function(){
                    let deque = new Deque();
                    deque.prepend(5, 4);
                }, Error, 'need an argument inside');
            });
        });
        describe('> testing deleteLast()',function(){
            it('#deleting last element should reduce size and actually delete the last element', function(){
                let deque = new Deque();
                deque.append(5);
                deque.append(3);
                deque.deleteLast();
                assert.equal(deque.size, 1);
                assert.equal(deque.queue[deque.size - 1], 5);
            });
            it('# deleting last element when deque is empty: should throw an error', function(){
                assert.throws(function(){
                    let deque = new Deque();
                    deque.deleteLast();
                }, Error, 'Deque is empty');
            });
        });
        describe('> testing deleteFirst()',function(){
            it('#deleting first element: should reduce size and actually delete the first element', function(){
                let deque = new Deque();
                deque.append(3);
                deque.append(77);
                deque.deleteFirst();
                assert.equal(deque.size, 1);
                assert.equal(deque.queue[deque.size - 1], 77);
            });
            it('# deleting first element when deque is empty: should throw an error', function(){
                assert.throws(function(){
                    let deque = new Deque();
                    deque.deleteFirst();
                }, Error, 'Deque is empty');
            });
        });
        describe('> testing isEmpty()', function(){
            it('#inputting any argument: should throw an Error',function(){
                assert.throws(function(){
                    let deque = new Deque();
                    if(deque.isEmpty(4)){
                        console.log("should not reach this place");
                    }
                }, Error, 'no argument is allowed');
            });
            it('#checking empty: should return true or false', function(){
                let deque = new Deque();
                assert.equal(deque.isEmpty(), true);
                deque.append(5);
                assert.equal(deque.isEmpty(), false);
                deque.deleteFirst();
                assert.equal(deque.isEmpty(), true);                
            });
        });
    });
    // let's do tree now.
    describe('> Tree Tests', function(){
        describe('> testing constructor()', function(){
            it('#constructor: should create BST with root as null and size of 0', function(){
                let bst = new BST();
                assert.equal(bst.root, null);
                assert.equal(bst.size, 0);
            });
            it('#constructor multiple input: should throw error', function(){
                assert.throws(
                    function(){
                        let bst = new BST(4);
                    },
                    Error,
                    'no parameters are allowed'
                );
            });
        });

        describe('> testing insert()', function(){
            it('#inserting first data: should be the new root', function(){
                let bst = new BST();
                bst.insert(5);
                assert.equal(bst.root.getData(), 5);
                bst.insert(3);
                assert.equal(bst.root.leftChild.getData(), 3);
                assert.equal(bst.size, 2);
            });
            it('#not using insert function with one parameter input: should throw an error', function(){
                assert.throws(
                    function(){
                        let bst = new BST();
                        bst.insert();
                    },
                    Error,
                    'wrong number of parameters'
                );
                assert.throws(
                    function(){
                        let bst = new BST();
                        bst.insert(4,3);
                    },
                    Error,
                    'wrong number of parameters'
                );
            });
        });
        describe('> testing remove()', function(){
            it('#normal remove: should remove the first element detected on BST', function(){
                let bst = new BST();
                bst.insert(5);
                bst.insert(4);
                bst.insert(2);
                assert.equal(bst.root.getData(), 5);
                assert.equal(bst.root.leftChild.getData(), 4);
                assert.equal(bst.root.leftChild.leftChild.getData(), 2);
                bst.remove(4);
                assert.equal(bst.root.leftChild.getData(), 2);
                assert.equal(bst.root.leftChild.leftChild, null);
                assert.equal(bst.size, 2);
            });
        })
    })
});

