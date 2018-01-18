import assert from 'assert';
import { TwoSum } from '../src/TwoSum';
import { ListNode, addTwoNumber } from '../src/AddTwoNumber';

describe('> Problem TwoSum: #Easy', function(){
    it('target 4, listofNums[4, 3, 2, 0]: should return [0, 3]',function(){
        let target = 4;
        let listofNums = [4, 3, 2, 0];
        let answer = [0, 3];
        assert.deepEqual(TwoSum(listofNums, target), answer);
    });
    it('target -5, listofNums[-3, 0, -2, -1]: should return [0, 2]',function(){
        let target = -5;
        let listofNums = [-3,0,-2,-1];
        let answer = [0, 2];
        assert.deepEqual(TwoSum(listofNums,target), answer);
    });
});

describe('> Problem AddTwoNumber: #Easy', function(){
    it('example from the problem:', function(){
        let x = new ListNode(2);
        x.next = new ListNode(4);
        x.next.next = new ListNode(3);
        // console.log(x.val);
        // console.log(x.next.val);
        // console.log(x.next.next.val);
        let y = new ListNode(5);
        y.next = new ListNode(6);
        y.next.next = new ListNode(4);

        let answer = new ListNode(7);
        answer.next = new ListNode(0);
        answer.next.next = new ListNode(8);

        let actual = addTwoNumber(x, y);
        for(var i = 0; i < 3; i++){
            assert.equal(actual.val, answer.val);
            actual = actual.next;
            answer = answer.next;
        }
    });

    it('1-> 0 -> 0 -> 1 + 2-> 4 ->3: should equal 2 -> 4 -> 3 -> 1: explanation: 1001+ 342 = 1343', function(){
        // testing for different number of digits on each of them;
        let x = new ListNode(1);
        x.next = new ListNode(0);
        x.next.next = new ListNode(0);
        x.next.next.next = new ListNode(1);

        let y = new ListNode(2);
        y.next = new ListNode(4);
        y.next.next = new ListNode(3);

        let answer = new ListNode(3);
        answer.next = new ListNode(4);
        answer.next.next = new ListNode(3);
        answer.next.next.next = new ListNode(1);

        let actual = addTwoNumber(x, y);

        for(var i = 0; i < 4; i++){
            assert.equal(actual.val, answer.val);
            actual = actual.next;
            answer = answer.next;
        }
    });
    it('5 + 5 = 0 -> 1', function(){
        let x = new ListNode(5);
        let y = new ListNode(5);
        let answer = new ListNode(0);
        answer.next = new ListNode(1);

        let actual = addTwoNumber(x, y);
        for(var i = 0; i < 2; i++){
            assert.equal(actual.val, answer.val);
            actual = actual.next;
            answer = answer.next;
        }
    });
    it('1 + 99 = 0 -> 0 -> 1', function(){
        let x = new ListNode(1);
        let y = new ListNode(9);
        y.next = new ListNode(9);
        let answer = new ListNode(0);
        answer.next = new ListNode(0);
        answer.next.next = new ListNode(1);

        let actual = addTwoNumber(x, y);
        for(var i = 0; i < 3; i++){
            assert.equal(actual.val, answer.val);
            actual = actual.next;
            answer = answer.next;
        }
    });
})