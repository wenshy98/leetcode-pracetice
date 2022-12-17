/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    // 56 ms	41.6 MB
    let map = new Map();
    map.set("(", ")");
    map.set("[", "]");
    map.set("{", "}");
    let arr = [];
    for (let i = 0; i < s.length; i++) {
        if (map.has(s[i])) {
            arr[arr.length] = s[i];
        } else {
            if (s[i] === map.get(arr[arr.length - 1])) {
                arr.length -= 1;
            } else {
                return false;
            }
        }
    }
    return arr.length === 0;
};