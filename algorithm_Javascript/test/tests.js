import assert from 'assert';
import { TwoSum } from '../src/TwoSum';
import { ListNode, addTwoNumber } from '../src/AddTwoNumber';
import { LongestSubstringWithoutRepeatingCharacters } from '../src/LSWRC';

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

    it('1-> 0 -> 0 -> 1 + 2-> 4 ->3: should equal 2 -> 4 -> 3 -> 1 (explanation: 1001+ 342 = 1343)', function(){
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
    it('5 + 5: should equal 0 -> 1 (explanation: 5 + 5 = 10)', function(){
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
    it('1 + 9 -> 9: should equal 0 -> 0 -> 1 (explanation  1 + 99 = 100)', function(){
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
});

describe('> Longest Substring Without Repeating Characters:', function(){
    // given test cases
    it('abcabcbb: should return 3', function(){
        let answer = 3;
        let actual = LongestSubstringWithoutRepeatingCharacters('abcabcbb');
        assert.equal(actual, answer);
    });
    it('bbbbbbb: should return 1', function(){
        let answer = 1;
        let actual = LongestSubstringWithoutRepeatingCharacters('bbbbbbb');
        assert.equal(actual, answer);
    });
    it('pwwkew: should return 3', function(){
        let answer = 3;
        let actual = LongestSubstringWithoutRepeatingCharacters('pwwkew');
        assert.equal(actual, answer);        
    });
    // my own test cases
    it('empty string should return 0', function(){
        let answer = 0;
        let actual = LongestSubstringWithoutRepeatingCharacters('');
        assert.equal(actual, answer);
    });

    it('abcba: should return 3', function(){
        let answer = 3;
        let actual = LongestSubstringWithoutRepeatingCharacters('abcba');
        assert.equal(actual, answer);
    })
})