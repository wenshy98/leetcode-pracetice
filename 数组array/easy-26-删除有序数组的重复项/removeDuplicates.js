/**
* @param {number[]} nums
* @return {number}
*/
var removeDuplicates = function(nums) {
    // 双指针遍历 68 ms	43.5 MB
    const len = nums.length;
    let i = 0, j = 1;
    if (len <= 0) return 0;
    // 2个指针一个指向0，一个指向1
    for(; j< len;j++) {
        // 相等，j移到下一位，不相等，i的下一位就是j
        if(nums[i] !== nums[j]) nums[++i] = nums[j];
    }
    return i+1;
};