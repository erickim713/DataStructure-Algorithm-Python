import assert from 'assert';
import { TwoSum } from '../src/TwoSum';
import { ListNode, addTwoNumber } from '../src/AddTwoNumber';
import { LongestSubstringWithoutRepeatingCharacters } from '../src/LSWRC';
import { longestPalindromicSubstring } from '../src/LPS';
import { ZigZagConversion } from '../src/ZigZagConversion';
import { reverse } from '../src/reverseInteger';
import { PalindromeNumber } from '../src/PalindromeNumber';
import { IntegertoRomanNumeral } from '../src/IntegertoRomanNumeral';
import { ContainerWithMostWater } from '../src/ContainerWithMostWater';
import { threeSum } from '../src/3Sum';
import { validParanthesis } from '../src/ValidParanthesis';
import { mergeTwoSortedLists } from '../src/MergeTwoSortedLists';
import { removeElement } from '../src/RemoveElement';
import { removeDuplicatesFromSortedArray } from '../src/RemoveDuplicatesFromSortedArray';
import { strStr } from '../src/strStr()';
import { searchInsertPosition } from '../src/SearchInsertPosition';
import { addBinary } from '../src/AddBinary';
import { mySqrt } from '../src/Sqrtx';
import { climbStairs } from '../src/ClimbStairs';
import { isSameTree, TreeNode } from '../src/SameTree';
import { findMedianSortedArrays } from '../src/MedianOfTwoSortedList';
import { countAndSay } from '../src/CountandSay';
import { lengthOfLastWord } from '../src/LengthofLastWord';
import { maxSubArray } from '../src/MaxSubArray';
import {plusOne} from '../src/PlusOne';
import { removeDuplicatesFromSortedList } from '../src/RemoveDuplicatesFromSortedList';
import { mergeSortedList } from '../src/MergeSortedList';


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
    });
});

describe('> Palindrome Number: ', function(){
    it('input: 1234321 should return true', function(){
        let answer = true;
        let actual = PalindromeNumber(1234321);
        assert.equal(actual, answer);
    });
    it('input: 1001 should return true', function(){
        let answer = true;
        let actual = PalindromeNumber(1001);
        assert.equal(actual, answer);
    });
    it('input: -10001 should return false', function(){
        let answer = false;
        let actual = PalindromeNumber(-10001);
        assert.equal(actual, answer);
    });
    it('input: -22 should return false', function(){
        let answer = false;
        let actual = PalindromeNumber(-22);
        assert.equal(actual, answer);
    });
    it('input: -2233 should return false', function(){
        let answer = false;
        let actual = PalindromeNumber(-2233);
        assert.equal(actual, answer);
    }); 
    it('input: 100 should return false', function(){
        let answer = false;
        let actual = PalindromeNumber(100);
        assert.equal(actual, answer);
    });
    it('input: 0 should return true', function(){
        let answer = true;
        let actual = PalindromeNumber(0);
        assert.equal(actual, answer);
    })
});

describe('> Container with Most Water: ', function(){
    it('input [3, 6]: should return 3', function(){
        let answer = 3;
        let actual = ContainerWithMostWater([3, 6]);
        assert.equal(actual, answer);
    });
    it('input [1, 4, 6, 3, 1]: should return 6', function(){
        let answer = 6;
        let actual = ContainerWithMostWater([1, 4, 6, 3, 1]);
        assert.equal(actual, answer);
    });
    it('input [100, 4, 6, 3, 1]: should return 12', function(){
        let answer = 12;
        let actual = ContainerWithMostWater([100, 4, 6, 3, 1]);
        assert.equal(actual, answer);
    });
});

describe('> Integer to Roman Numeral', function(){
    //basic test cases
    it('input: 1 should return "I"',function(){
        let answer  = 'I';
        let actual = IntegertoRomanNumeral(1);
        assert.equal(actual, answer);
    });
    it('input: 10 should return "X"',function(){
        let answer  = 'X';
        let actual = IntegertoRomanNumeral(10);
        assert.equal(actual, answer);
    });
    it('input: 1000 should return "M"',function(){
        let answer  = 'M';
        let actual = IntegertoRomanNumeral(1000);
        assert.equal(actual, answer);
    });
    //test case: [no subtraction needed]
    it('input: 231 should return "CCXXXI"',function(){
        let answer  = 'CCXXXI';
        let actual = IntegertoRomanNumeral(231);
        assert.equal(actual, answer);
    });
    it('input: 566 should return "DLXVI"',function(){
        let answer  = 'DLXVI';
        let actual = IntegertoRomanNumeral(566);
        assert.equal(actual, answer);
    });

    //test case: [subtraction needed]
    it('input 444 should return "CDXLIV"', function(){
        let answer = 'CDXLIV';
        let actual = IntegertoRomanNumeral(444);
        assert.equal(actual, answer);
        
    });
    it('input 99 should return "XCIX"', function(){
        let answer = 'XCIX';
        let actual = IntegertoRomanNumeral(99);
        assert.equal(actual, answer);
        
    });
});

// it wasn't easy making tests for these, since you can go about making combinations, so i decided to sort the list before hand
// and compare the answer in a sorted manner.
// TODO: Time limit exceeded. I need to make this one better.
describe('> 3 Sum: ', function(){
    it('input: [-1, 0, 1, 2, -1, -4] should return [[-1, 0, 1], [2, -1 -1]]', function(){
        let answer = [[-1, -1, 2], [-1, 0, 1]];
        let actual = threeSum([-1, 0, 1, 2, -1, -4]);
        assert.deepEqual(actual, answer);
    });
    
    it('input: [ 0, 0, 0] should return [[0, 0, 0]]', function(){
        let answer = [[0, 0, 0]];
        let actual = threeSum([0 , 0, 0]);
        assert.deepEqual(actual, answer);
    });
});


describe('> Valid Paranthesis: ', function(){
    it('input: "()[]{}" should return true [basic case]', function(){
        let answer = true;
        let actual = validParanthesis('()[]{}');
        assert.equal(actual, answer);
    });

    it('input: "([])" should return true [pair inside pair case]', function(){
        let answer = true;
        let actual = validParanthesis('([])');
        assert.equal(actual, answer);
    });

    // fail cases;

    it('input: "([)]" should return false [basic case]', function(){
        let answer = false;
        let actual = validParanthesis('([)]');
        assert.equal(actual, answer);
    });

    it('input "([{}]))" should return false [extra character with no pair]', function (){
        let answer = false;
        let actual = validParanthesis('([{}]))');
        assert.equal(actual, answer);
    });

    it('input "{)" [no pair]', function(){
        let answer = false;
        let actual = validParanthesis('{)');
        assert.equal(actual, answer);
    });
});


describe('> Merge Two Sorted Lists:', function(){
    it('input: 1->2->4,  1->3->4: should return 1->1->2->3->4->4', function(){
        let l1 = new ListNode(1);
        l1.next = new ListNode(2);
        l1.next.next = new ListNode(4);

        let l2 = new ListNode(1);
        l2.next = new ListNode(3);
        l2.next.next = new ListNode(4);

        let answer = new ListNode(1);
        answer.next = new ListNode(1);
        answer.next.next = new ListNode(2);
        answer.next.next.next = new ListNode(3);
        answer.next.next.next.next = new ListNode(4);
        answer.next.next.next.next.next = new ListNode(4);
        
        let actual = mergeTwoSortedLists(l1, l2);

        for(let i = 0; i<6; i++){
            assert.equal(actual.val, answer.val);
            actual = actual.next;
            answer = answer.next;
        }
    });

    it('input: 0->2->3,  -1->100->200: should return -1->0->2->3->100->200 [negative number included with just pasting the rest of the stuff]', function(){
        let l1 = new ListNode(0);
        l1.next = new ListNode(2);
        l1.next.next = new ListNode(3);

        let l2 = new ListNode(-1);
        l2.next = new ListNode(100);
        l2.next.next = new ListNode(200);

        let answer = new ListNode(-1);
        answer.next = new ListNode(0);
        answer.next.next = new ListNode(2);
        answer.next.next.next = new ListNode(3);
        answer.next.next.next.next = new ListNode(100);
        answer.next.next.next.next.next = new ListNode(200);

        let actual = mergeTwoSortedLists(l1, l2);

        for(let i = 0; i<6; i++){
            assert.equal(actual.val, answer.val);
            actual = actual.next;
            answer = answer.next;
        }
    });

    it('input: ,  1->3->4: should return 1->3->4 [one just normal list and one empty list]', function(){
        let l1  = null;
        let l2 = new ListNode(1);
        l2.next = new ListNode(3);
        l2.next.next = new ListNode(4);

        let answer = new ListNode(1);
        answer.next = new ListNode(3);
        answer.next.next = new ListNode(4);

        let actual = mergeTwoSortedLists(l1, l2);
        for(let i = 0; i<3; i++){
            assert.equal(actual.val, answer.val);
            actual = actual.next;
            answer = answer.next;
        }
    });
});

describe('> Remove Element: ', function(){
    it('input nums = [3,2,2,3], val = 3 should return number 2 [basic case]', function(){
        let answer = 2;
        let actual = removeElement([3,2,2,3], 3);
        assert.equal(actual, answer);
    });
    it('input nums = [1,2,2,3], val = 4 should return number 4 [case when the value is not in the list]', function(){
        let answer = 4;
        let actual = removeElement([1,2,2,3], 4);
        assert.equal(actual, answer);
    });

    it('input nums = [3,3,3,3], val = 3 should return number 0', function(){
        let answer = 0;
        let actual = removeElement([3,3,3,3], 3);
        assert.equal(actual, answer);
    });
});

describe('> Remove Duplicates From Sorted Array', function(){
    it('input nums = [1,1,2] should return 2', function(){
        let answer = 2;
        let actual = removeDuplicatesFromSortedArray([1,1,2]);
        assert.equal(actual, answer);
    });
    it('input nums = [1,3,5,6] should return 4 [no duplicates case]', function(){
        let answer = 4;
        let actual = removeDuplicatesFromSortedArray([1,3,5,6]);
        assert.equal(actual, answer);
    });

    it('input nums = [1,1,1,1] should return 1 [all elements are same so everything but first is removed]', function(){
        let answer = 1;
        let actual = removeDuplicatesFromSortedArray([1,1,1,1]);
        assert.equal(actual, answer);
    });  
});

describe('> strStr', function(){
    it('input: haystack = "hello", needle = "ll" should return 2 [basic test case]', function(){
        let answer = 2;
        let actual = strStr('hello', 'll');
        assert.equal(actual, answer);
    });

    it('input: haystack = "aaaaa", needle = "bba" should return -1 [basic non-found test case]', function(){
        let answer = -1;
        let actual = strStr('aaaaa', 'bba');
        assert.equal(actual, answer);
    });

    it('input haystack = "asfddsafsdf", needle = "" should return 0 [case where "always occuring" needle needs to be found]', function(){
        let answer = 0;
        let actual = strStr('asfddsafsdf', '');
        assert.equal(actual, answer);
    });
});

describe('> search Insert Position', function(){
    it('input: [1,3,5,6] target:5 should return 2', function(){
        let answer = 2;
        let actual = searchInsertPosition([1,3,5,6], 5);
        assert.equal(actual, answer);
    });
    it('input: [1,3,5,6] target:2 should return 1', function(){
        let answer = 1;
        let actual = searchInsertPosition([1,3,5,6], 2);
        assert.equal(actual, answer);
    });
    it('input: [1,3,5,6] target:7 should return 4', function(){
        let answer = 4;
        let actual = searchInsertPosition([1,3,5,6], 7);
        assert.equal(actual, answer);
    });
    it('input: [1,3,5,6] target:0 should return 0', function(){
        let answer = 0;
        let actual = searchInsertPosition([1,3,5,6], 0);
        assert.equal(actual, answer);
    });
    it('input: [1] target: 1 should return 1', function(){
        let answer = 0;
        let actual = searchInsertPosition([1], 0);
        assert.equal(actual, answer);
    });
    it('input: [1, 3] target: 3 should return 1', function(){
        let answer = 1;
        let actual = searchInsertPosition([1, 3], 3);
        assert.equal(actual, answer);
    });
    it('input: [1, 3] target: 0 should return 0', function(){
        let answer = 0;
        let actual = searchInsertPosition([1, 3], 0);
        assert.equal(actual, answer);
    })
});



describe('> Add Binary:', function(){
    it('input: 11 and 1 should return 100', function(){
        let a = '11';
        let b = '1';
        let answer = '100';
        let actual = addBinary(a,b);
        assert.equal(actual, answer);
    });
    
    it('input: 101 and 1111 should return 10100', function(){
        let a = '101';
        let b = '1111';
        let answer = '10100';
        let actual = addBinary(a, b);
        assert.equal(actual, answer);
    });

    it('input: 0 and 10101 should return 10101', function(){
        let a = '0';
        let b = '10101';
        let answer = '10101';
        let actual = addBinary(a, b);
        assert.equal(actual, answer);
    });
});


describe('> mySqrt: ', function(){
    it('input: 5 should return 2', function(){
        let answer = 2;
        let actual = mySqrt(5);
        assert.equal(actual, answer);
    });

    it('input: 100 should return 10', function(){
        let answer = 10;
        let actual = mySqrt(100);
        assert.equal(actual, answer);
    });

    it('input: 99 should return 9', function(){
        let answer = 9;
        let actual = mySqrt(99);
        assert.equal(actual, answer);
    });
});

describe('> Climb Stairs: ', function(){
    it('input: 2 should return 2', function(){
        let answer = 2;
        let actual = climbStairs(2);
        assert.equal(actual, answer);
    });

    it('input: 3 should return 3', function(){
        let answer = 3;
        let actual = climbStairs(3);
        assert.equal(actual, answer);
    });

    it('input: 0 should return 0', function(){
        let answer = 0;
        let actual = climbStairs(0);
        assert.equal(actual, answer);
    });

    it('input: 5 should return 8', function(){
        let answer = 8;
        let actual = climbStairs(5);
        assert.equal(actual, answer);
    });
});

describe('> Same Tree: ', function(){
    it('input: when two trees are same, it should return true [i am not sure on what to write for this test...]', function(){
        let q = new TreeNode(4);
        q.left = new TreeNode(1);
        q.right = new TreeNode(5);

        let p = new TreeNode(4);
        p.left = new TreeNode(1);
        p.right = new TreeNode(5);

        let answer = true;
        let actual = isSameTree(p, q);
        assert.equal(actual, answer);
    });
});

// describe('> Median of Two Sorted List: ', function(){
//     it('input: [1, 3] and [2] should return 2.0', function(){
//         let answer = 2.0;
//         let actual = findMedianSortedArrays([1,3], [2]);
//         assert.equal(actual, answer);
//     });

//     it('input: [1, 2] and [3, 4] should return 2.5', function(){
//         let answer = 2.5;
//         let actual = findMedianSortedArrays([1,2], [3,4]);
//         assert.equal(actual, answer);
//     });

//     it('input: [] and [1, 2] should return 1.5', function(){
//         let answer = 1.5;
//         let actual = findMedianSortedArrays([], [1,2]);
//         assert.equal(actual, answer);
//     });

//     it('input: [1, 5] and [2,3,4] should return 3', function(){
//         let answer = 3;
//         let actual = findMedianSortedArrays([1, 5], [2, 3, 4]);
//         assert.equal(actual, answer);
//     });

   
//     // i am assuming that there are no empty array collections 
// });

describe('> Count and Say: ', function(){
    it('input n = 1 should return "1"', function(){
        let answer = '1';
        let actual = countAndSay(1);
        assert.equal(actual, answer);
    });
    it('input n = 2 should return "11"', function(){
        let answer = '11';
        let actual = countAndSay(2);
        assert.equal(actual, answer);
    });
    it('input n = 3 should return "21"', function(){
        let answer = '21';
        let actual = countAndSay(3);
        assert.equal(actual, answer);
    });
    it('input n = 4 should return "1211"', function(){
        let answer = '1211';
        let actual = countAndSay(4);
        assert.equal(actual, answer);
    });
});


describe('> Max Sub Array: ', function(){
    it("input string 'hello world' should return 5", function(){
        let answer = 5;
        let actual = lengthOfLastWord('hello world');
        assert.equal(actual, answer);
    });
    it("input string 'i world' should return 5", function(){
        let answer = 5;
        let actual = lengthOfLastWord('i world');
        assert.equal(actual, answer);
    });
    it("input string 'world i' should return 5", function(){
        let answer = 1;
        let actual = lengthOfLastWord('world i');
        assert.equal(actual, answer);
    });
    it("input string 'as eieie' should return 5", function(){
        let answer = 5;
        let actual = lengthOfLastWord('as eieie');
        assert.equal(actual, answer);
    });
});


describe('> max Subarray: ', function(){
    it('input [-2,1,-3,4,-1,2,1,-5,4] should return 6', function(){
        let answer = 6;
        let actual = maxSubArray([-2,1,-3,4,-1,2,1,-5,4]);
        assert.equal(actual, answer);
    });

    it('input [1, 3,3,3,3,3] should return 16', function(){
        let answer = 16; 
        let actual = maxSubArray([1,3,3,3,3,3]);
        assert.equal(actual, answer);
    });
    
    it('input [-3, 4, 1, -19, 2, 5] should return 7', function(){
        let answer = 7;
        let actual = maxSubArray([-3, 4, 1 -19, 2, 5]);
        assert.equal(actual, answer);
    });

    it('input [-3, -4 , -5 , -6] should return -3', function(){
        let answer = -3;
        let actual = maxSubArray([-3, -4, -5, -6]);
        assert.equal(actual, answer);
    });
});

describe('> plus one: ', function(){
    it('input [9, 9, 9] should return array collection with length of 4: [1, 0, 0, 0]', function(){
        let answer = [1, 0, 0, 0];
        let actual = plusOne([9,9,9]);
        assert.deepEqual(actual, answer);
    });

    it('input [0] should return array collection length of 1: [1]', function(){
        let answer = [1];
        let actual = plusOne([0]);
        assert.deepEqual(actual, answer);
    });

    it('input [2, 5] should return array collection with length of 2: [2, 6]', function(){
        let answer = [2, 6];
        let actual = plusOne([2, 5]);
        assert.deepEqual(actual, answer);
    });
});

describe('Remove Duplicates from Sorted List: ', function(){
    it('input 1-> 1-> 2, should return 1->2', function(){
        let answer = new ListNode(1);
        answer.next = new ListNode(2);

        let input = new ListNode(1);
        input.next = new ListNode(1);
        input.next.next = new ListNode(2);
        
        let actual = removeDuplicatesFromSortedList(input);

        for(let count = 0; count < 2; count++){
            assert.equal(actual.val, answer.val);
            actual = actual.next;
            answer = answer.next;
        }
    });


    it('input 1->1->2->3->3 should return 1->2->3', function(){
        let answer = new ListNode(1);
        answer.next = new ListNode(2); 
        answer.next.next = new ListNode(3);

        let input = new ListNode(1);
        input.next = new ListNode(1);
        input.next.next = new ListNode(2);
        input.next.next.next = new ListNode(3);
        input.next.next.next.next = new ListNode(3);

        let actual = removeDuplicatesFromSortedList(input);

        for(let count = 0; count < 3; count++){
            assert.equal(actual.val, answer.val);
            actual = actual.next;
            answer = answer.next;
        }
    });
});

describe('merge sorted list: ', function(){
    it('input nums1 =  [1, 5, 7, 10], nums2 = [2, 5, 7, 9] should return:\n [1, 2, 5, 5, 7, 9 , 10]', function(){
        let answer = [1, 2, 5, 5, 7, 9, 10];
        let actual = mergeSortedList([1,5,7,10],4, [2, 5, 7, 9],4);
        assert.deepEqual(actual, answer);
    });

    it('input nums1 = [], nums2 =[1,2,3,5]', function(){
        let answer = [1, 2, 3, 5];
        let actual = mergeSortedList([], 0, [1,2,3,5], 4);
        assert.deepEqual(actual, answer);
    })
})