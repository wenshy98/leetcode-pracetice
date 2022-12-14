/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    let res = "";
    const len = strs[0].length;
    for (let i = 0; i < len; i++) {
        let flag = true;
        for (let j = 1; j < strs.length; j++) {
            if (strs[j][i] !== strs[0][i]) {
                flag = false;
                i = len;
            }
        }
        if (flag) res += strs[0][i];
    }
    return res;
}