/**
* @param {number[]} nums
* @param {number} target
* @return {number[]}
*/
const twoSum = function(nums, target) {
    // 暴力枚举法 112 ms	41.5 MB	JavaScript
//    const len = nums.length;
//    for(let i=0; i< len; i++) {
//        for(let j=0; j<len,j!==i; j++) {
//            if((nums[i]+nums[j]) === target) return [i,j];
//        }
//    }
//    return [];

    // 方法二： map 64 ms	42.5 MB	JavaScript
    let map = new Map();
    for(let i = 0; i< nums.length;i++) {
        const remain = target - nums[i];
        if (map.has(remain)) {
            return [i,map.get(remain)];
        } else {
            map.set(nums[i],i);
        }
    }
    return [];

};