/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
    // 72 ms	48.1 MB
    // 2柱子间隔gap 和 最小柱子高度 minHeight  max = gap * minHeight;
    const len = height.length;
    let max = 0;
    for (let i = 0; i < len;) {
        for (let j = len - 1; j >= 0;) {
            if (i === j) return max;
            const gap = j - i;
            if (height[i] <= height[j]) {
                max = Math.max(max, gap * height[i]);
                i++;
            } else {
                max = Math.max(max, gap * height[j]);
                j--;
            }
        }
    }
};