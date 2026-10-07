/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1, list2) {
        // Base cases: if either list is empty, return the other list
        if (list1 === null) return list2;
        if (list2 === null) return list1;

        // Pick the smaller value and make a recursive call for its next pointer
        if (list1.val < list2.val) {
            list1.next = this.mergeTwoLists(list1.next, list2);
            return list1; // Return the head of the merged list
        } else {
            list2.next = this.mergeTwoLists(list1, list2.next);
            return list2; // Return the head of the merged list
        }
    }
}
