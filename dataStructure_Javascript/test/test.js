

import assert from 'assert';
import { Node } from '../src/Node';
import { LinkedList } from '../src/Linkedlist';



describe('Data Structure Test', function() {
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
});

