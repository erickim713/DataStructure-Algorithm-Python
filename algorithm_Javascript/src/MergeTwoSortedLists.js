/**
Merge two sorted linked lists and return it as a new list. The new list should be made by splicing together the nodes of the first two lists.

Example:

Input: 1->2->4, 1->3->4
Output: 1->1->2->3->4->4
 */


/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

function ListNode(val) {
    this.val = val;
    this.next = null;
}

export function mergeTwoSortedLists(l1, l2){
    let answer = new ListNode(0);
    let pointer = answer;
    while(l1 !== null && l2 !== null){
        if(l1.val < l2.val){
            pointer.next = l1;
            l1 = l1.next;
        }
        else{
            pointer.next = l2;
            l2 = l2.next;
        }
        pointer = pointer.next
    }    
    
    if(l1 === null && l2 === null){
        return answer.next;
    }
    else if(l1 === null){
        pointer.next = l2;
    }
    else{
        pointer.next = l1;
    }
    return answer.next;
}
