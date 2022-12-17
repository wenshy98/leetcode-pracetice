/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function (head) {
    // 快慢指针
    // 52 ms	41 MB
    let i = head, j = head;
    while (j && j.next) {
        i = i.next;
        j = j.next.next;
    }
    return i;
};