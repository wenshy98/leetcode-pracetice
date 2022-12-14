/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
    const map = new Map();
    map.set("I", 1)
        .set("IV", 4)
        .set("V", 5)
        .set("IX", 9)
        .set("X", 10)
        .set("XL", 40)
        .set("L", 50)
        .set("XC", 90)
        .set("C", 100)
        .set("CD", 400)
        .set("D", 500)
        .set("CM", 900)
        .set("M", 1000);
    let sum = 0;
    for (let i = 0; i < s.length; i++) {
        // 112 ms	48.5 MB  72%
        // 判断是否是组合字符
        if (map.has(s[i] + s[i + 1])) {
            sum += map.get(s[i] + s[i + 1]);
            i++;
        } else {
            sum += map.get(s[i]);
        }
    }
    return sum;
};