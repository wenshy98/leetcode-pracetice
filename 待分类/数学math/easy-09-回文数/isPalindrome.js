/**
* @param {number} x
* @return {boolean}
*/
var isPalindrome = function(x) {
    // 负数不是回文数
    if (x<0) return false;
    // 转字符串 136 ms	49.1 MB
    const str = x + "", len = str.length;
    for(let i=0; i<(len + 1)/2; i++) {
        if(str[i] !== str[len - i - 1]) {
            return false;
        }
    }
    return true;
};