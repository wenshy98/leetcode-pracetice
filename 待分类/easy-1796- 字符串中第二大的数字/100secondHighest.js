/**
 * @param {string} s
 * @return {number}
 */
var secondHighest = function (s) {
    // 44 ms	43.1 MB
    return [...new Set(s.split(""))].filter(el => !isNaN(el)).sort((a, b) => b - a)[1] || -1;
};