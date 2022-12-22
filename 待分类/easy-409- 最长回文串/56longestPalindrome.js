/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function (s) {
    // 68 ms	42.3 MB
    let map = new Map();
    for (let i = 0; i < s.length; i++) {
        if (map.has(s[i])) {
            let time = map.get(s[i]);
            map.set(s[i], time + 1);
        } else {
            map.set(s[i], 1);
        }
    }
    let exist = false, length = 0;
    [...map.values()].forEach(el => {
        if (el === 1) {
            exist = true;
        } else if (parseInt(el / 2) > 0) {
            if (el % 2 === 1) exist = true;
            length += parseInt(el / 2) * 2;
        }
    })
    return length + (exist ? 1 : 0);
};