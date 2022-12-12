/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    // 滑动窗口
    const len = s.length;
    if (len <= 1) return len;
    let left = 0, max = 0;
    // 左边指针
    while (left < len) {
        let map = new Map();
        map.set(s[left], left);
        if (max > len - left) return max;
        // 右边指针
        for (let right = left + 1; right < len; right++) {
            if (map.has(s[right])) {
                const gap = right - left;
                if (gap > max) max = gap;
                right = len;
                map.clear;
            } else {
                map.set(s[right], right)
                const gap = right - left + 1;
                if (gap > max) max = gap;
            }
        }
        left++;
    }
    return max;
};