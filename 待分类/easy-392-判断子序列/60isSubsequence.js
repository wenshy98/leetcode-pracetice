/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
    // API战士
    // 判断s是否是t的子序列
    // let index = 0;;
    // for (let i = 0; i < s.length; i++) {
    //     if (!t.includes(s[i])) return false;
    //     if (index !== -1) {
    //         index = t.indexOf(s[i], index);
    //         if (index !== -1) index++;
    //     } else {
    //         return false;
    //     }
    // }
    // if (index === -1) {
    //     return false;
    // } else {
    //     return true;
    // }

    // 双指针
    let i = 0, j = 0;
    for (; i < s.length, j < t.length;) {
        if (s[i] === t[j]) i++;
        j++;
    }
    return i === s.length;

    // 动态规划 TODO
};