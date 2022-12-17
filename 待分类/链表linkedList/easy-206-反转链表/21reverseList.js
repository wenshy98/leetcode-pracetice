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
var reverseList = function (head) {
    // 判断列表是否到末尾
    // 72 ms	43.4 MB
    if (head === null || head.next === null) {
        return head;
    }
    ans = reverseList(head.next)
    head.next.next = head;
    head.next = null;
    return ans;
};

