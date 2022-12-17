/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
    // 60 ms	43.5 MB
    // 递归终止条件， 一方为空返回另一方;
    if (!list1 || !list2) {
        return list1 || list2;
    }
    if (list1.val <= list2.val) {
        // list1的值小
        list1.next = mergeTwoLists(list1.next, list2);
        return list1;
    } else {
        // list2的值小
        list2.next = mergeTwoLists(list1, list2.next);
        return list2;
    }

    // 递归分析
    // 比较 [1,2] [1,2,3] list1小，返回list1
    // -> 头节点 1  next(比较   [2]    [1,2,3] list2小，返回list2)
    //                  -> 头节点 1  next(比较 [2] [2,3] list1小，返回list1)         
    //                                   -> 头节点 2  next(比较 null [2,3] list1为空，返回list2 [2,3])
    // 结果 [1, 1, 2, 2, 3]                                      
};