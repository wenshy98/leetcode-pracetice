/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    // 暴力解法 244 ms	47.9 MB	JavaScript
    // const len = s.length;
    // if (len <= 1) return len;
    // let left = 0, max = 0;
    // // 左边指针
    // while (left < len) {
    //     let map = new Map();
    //     map.set(s[left], left);
    //     if (max > len - left) return max;
    //     // 右边指针
    //     for (let right = left + 1; right < len; right++) {
    //         if (map.has(s[right])) {
    //             const gap = right - left;
    //             if (gap > max) max = gap;
    //             right = len;
    //             map.clear;
    //         } else {
    //             map.set(s[right], right)
    //             const gap = right - left + 1;
    //             if (gap > max) max = gap;
    //         }
    //     }
    //     left++;
    // }
    // return max;

    // 滑动窗口 72 ms	45.5 MB	JavaScript
    const len = s.length;
    if (len <= 1) return len;
    let max = 1, left = 0, set = new Set();
    for (let right = 0; right < len; right++) {
        if (max > len - left) return max;

        // 有重复的删除所有set里的元素直到不重复
        while (set.has(s[right])) {
            set.delete(s[left++]);
            // left++; 先运算后加减(等价与)
            // set.delete(s[left]);  left++;
        }
        // 添加右指针的元素到set里
        set.add(s[right], right);
        max = Math.max(max, set.size);
    }
    return max;
};