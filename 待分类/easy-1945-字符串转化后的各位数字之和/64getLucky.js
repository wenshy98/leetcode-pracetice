/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var getLucky = function (s, k) {
    // 64 ms	41.7 MB
    let numStr = [...s].map(char => char.charCodeAt() - 96).join('');
    while (k > 0) {
        numStr = sumByChar(numStr + "");
        k--;
    }
    function sumByChar(s) {
        let num = 0;
        for (let i = 0; i < s.length; i++) num += parseInt(s[i]);
        return num;
    }
    return numStr;
};