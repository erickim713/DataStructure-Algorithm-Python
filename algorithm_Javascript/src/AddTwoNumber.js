// You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

// Example

// Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
// Output: 7 -> 0 -> 8
// Explanation: 342 + 465 = 807.


/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
export function ListNode(val){
    this.val = val;
    this.next = null;
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
export function addTwoNumber(l1, l2){
    let answer = new ListNode(0);
    let answercopy = answer;
    let l1currNumber = 0;
    let l2currNumber = 0;
    let carry = 0;
    let sum = 0;

    while(l1 !== null || l2 !== null){
        if(l1 === null){
            l1currNumber = 0;
        }
        else{
            l1currNumber = l1.val;
            l1 = l1.next;
        }

        if(l2 === null){
            l2currNumber = 0;
        }
        else{
            l2currNumber = l2.val;
            // console.log(l2currNumber);
            l2 = l2.next;
        }
        sum = l1currNumber + l2currNumber + carry;
        if(sum >= 10){
            carry = 1;
        }
        else{
            carry = 0;
        }
        answercopy.next = new ListNode(sum % 10);
        answercopy = answercopy.next
    }

    //if there's carry at the end of all calculation and l1 and l2 are both at the end, then add 1 at the end of the number.
    if(carry === 1){
        answercopy.next = new ListNode(carry);
    }

    return answer.next;
}

