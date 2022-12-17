/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
    // 92 ms 46.2 MB
    // 合并2个数组
    let arr = nums1.concat(nums2).sort(compareNumbers);
    function compareNumbers(a, b) {
        return a - b;
    }
    // 找出中位数
    if (arr.length % 2 === 1) {
        return arr[(arr.length - 1) / 2];
    } else {
        return (arr[arr.length / 2] + arr[(arr.length / 2) - 1]) / 2;
    }
};  