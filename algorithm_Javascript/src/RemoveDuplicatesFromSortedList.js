import { ListNode } from "./AddTwoNumber";

/**
 * 
Given a sorted linked list, delete all duplicates such that each element appear only once.

For example,
Given 1->1->2, return 1->2.
Given 1->1->2->3->3, return 1->2->3.
 */



export function removeDuplicatesFromSortedList(head){
    if(head == null){
        return null;
    }
    let currentNode = head;
    let result = new ListNode(head.val);
    let pointer = result;
    let nextNode = head.next;
    while(nextNode != null){
        if(nextNode.val !== currentNode.val){
            pointer.next = new ListNode(nextNode.val);
            pointer = pointer.next;
            currentNode.next = nextNode;
            currentNode = nextNode;            
        }
        nextNode = nextNode.next;        
    }
    return result;
}