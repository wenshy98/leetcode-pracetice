/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function (nums) {
    // 规律，nums[i] + res[i - 1]
    // 60 ms	41.3 MB 76.92	JavaScript
    let res = [], i = 1;
    res[0] = nums[0];
    while (i < nums.length) {
        res[i] = nums[i] + res[i - 1];
        i++;
    }
    return res;

    // 直接原数组上修改
    // 64 ms	41.3 MB 55
    // let len = nums.length;
    // for (let i = 1; i < len; i++) {
    //     nums[i] += nums[i - 1];
    // }
    // return nums;
};