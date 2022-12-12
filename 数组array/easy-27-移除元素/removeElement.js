/**
* @param {number[]} nums
* @param {number} val
* @return {number}
*/
var removeElement = function(nums, val) {
    // 双指针	44 ms	41.2 MB	JavaScript
    const len = nums.length;
    let i = 0;
    for (let j = 0; j< len; j++) {
        if (nums[j] !== val) {
            nums[i] = nums[j];
            i++;
        }
    }
    return i;
};