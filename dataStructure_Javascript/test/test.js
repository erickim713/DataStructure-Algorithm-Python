

import assert from 'assert';
import { Node } from '../src/Node';
import { LinkedList } from '../src/Linkedlist';
import { Stack } from '../src/Stack';



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
    describe("> Stacks Tests:", function(){
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
        })
    });

    //

    
});

