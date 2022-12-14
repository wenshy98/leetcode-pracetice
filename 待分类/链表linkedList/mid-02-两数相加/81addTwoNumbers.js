/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
    // 92 ms	45.6 MB
    // 判断列表是否为空
    if (l1 === null || l2 === null) return null;

    // 新建结果头节点
    const dummyNode = new ListNode(-1);
    // 设置指针、进位
    let cur1 = l1,
        cur2 = l2,
        cur = dummyNode,
        carry = 0;
    // 遍历链表（非空）
    while (cur1 != null || cur2 != null) {
        let val1 = cur1 !== null ? cur1.val : 0,
            val2 = cur2 !== null ? cur2.val : 0,
            sum = val1 + val2 + carry,
            newNode = new ListNode(sum % 10);
        // 赋值
        carry = sum >= 10 ? 1 : 0;
        cur.next = newNode;
        // 移动指针到下一个节点
        cur = cur.next;
        if (null !== cur1) cur1 = cur1.next;
        if (null !== cur2) cur2 = cur2.next;

        if (carry > 0) {
            cur.next = new ListNode(carry);
        }
    }
    return dummyNode.next;
};