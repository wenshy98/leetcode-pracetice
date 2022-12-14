/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
    // 68 ms	44.2 MB
    // 思路：先求出每个index的下标和，然后从左到右遍历下标，找出满足条件的中心下标
    let len = nums.length, sum = [];
    sum[0] = nums[0];
    for (let i = 1; i < len; i++) sum[i] = nums[i] + sum[i - 1];
    if (sum[len - 1] - sum[0] === 0) return 0;
    let result = 0;
    for (let j = 1; j < len; j++) {
        if (sum[j - 1] === (sum[len - 1] - sum[j])) {
            result = j;
            // 终止！！
            j = len;
        }
    }
    if (result <= 0) result = -1;
    return result;
};