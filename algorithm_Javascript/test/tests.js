import assert from 'assert';
import { TwoSum } from '../src/TwoSum';
import { ListNode, addTwoNumber } from '../src/AddTwoNumber';
import { LongestSubstringWithoutRepeatingCharacters } from '../src/LSWRC';
import { longestPalindromicSubstring } from '../src/LPS';
import { ZigZagConversion } from '../src/ZigZagConversion';
import { reverse } from '../src/reverseInteger';

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
    });
});

// input is string
// output is string
describe('> Longest Palindromic Substring:',function(){
    it('input babad: should return bab or aba', function(){
        let answer = 'bab';
        let actual = longestPalindromicSubstring('babad');
        assert.equal(actual, answer);
    });
    it('input cbbd: should return bb', function(){
        let answer = 'bb';
        let actual = longestPalindromicSubstring('cbbd');
        assert.equal(actual, answer);
    });
    it('input empty string: should return empty string', function(){
        let answer = '';
        let actual = longestPalindromicSubstring('');
        assert.equal(actual, answer);
    });
    it('input single quote: should return that quote', function(){
        let answer = 'a';
        let actual = longestPalindromicSubstring('a');
        assert.equal(actual, answer);
    });
    it('input abceeecbaqw: should return abceeecba', function(){
        let answer = 'abceeecba';
        let actual = longestPalindromicSubstring('abceeecbaqw');
        assert.equal(actual, answer);
    });
});


describe('> ZigZag Conversion: ', function(){
    it('input PAYPALISHIRING with 3 rows: should return PAHNAPLSIIGYIR', function(){
        let answer = 'PAHNAPLSIIGYIR';
        let actual = ZigZagConversion('PAYPALISHIRING', 3);
        assert.equal(actual, answer);
    });

    it('input WHYISDANIELNOTPICKINGUPTHEPHONE with 2 rows: should return WYSAILOPCIGPHPOEHIDNENTIKNUTEHN', function(){
        let answer = 'WYSAILOPCIGPHPOEHIDNENTIKNUTEHN';
        let actual = ZigZagConversion('WHYISDANIELNOTPICKINGUPTHEPHONE', 2);
        assert.equal(actual, answer);
    });

    it('input TESTINGTHESINGLEROWCASE with 1 row: should return TESTINGTHESINGLEROWCASE', function(){
        let answer = 'TESTINGTHESINGLEROWCASE';
        let actual = ZigZagConversion(answer, 1);
        assert.equal(actual, answer);
    });

    it('input "" with 4 rows: should return ""', function(){
        let answer = '';
        let actual = ZigZagConversion('', 4);
        assert.equal(actual, answer);
    });
});


describe('> Reverse Integer: ', function(){
    it('input 123: should return 321', function(){
        let answer = 321;
        let actual = reverse(123);
        assert.equal(actual, answer);
    });
    it('input -123: should return -321', function(){
        let answer = -321;
        let actual = reverse(-123);
        assert.equal(actual, answer);
    });
    it('input 120: should return 21', function(){
        let answer = 21;
        let actual = reverse(120);
        assert.equal(actual, answer);
    });
    it('input 0: should return 0', function(){
        let answer = 0;
        let actual = reverse(0);
        assert.equal(actual, answer);
    });
    it('input -120: should return -21', function(){
        let answer = -21;
        let actual = reverse(-120);
        assert.equal(actual, answer);
    });
    it('input 1201: should return 1021', function(){
        let answer = 1021;
        let actual = reverse(1201);
        assert.equal(actual, answer)
    })
})