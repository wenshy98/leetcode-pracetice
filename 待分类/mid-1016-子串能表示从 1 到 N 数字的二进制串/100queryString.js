/**
 * @param {string} s
 * @param {number} n
 * @return {boolean}
 */
var queryString = function (s, n) {
    // 1. 1 ~ n 转二进制字符串 2. 判断是否包含在字符串中
    for (let i = 1; i <= n; i++) if (!s.includes(i.toString(2))) return false;
    return true;
}