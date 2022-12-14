/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
    // 68 ms	41.3 MB
    const len = s.length;
    if (len === 1) return true;
    const s2t = {}, t2s = {};
    for (let i = 0; i < len; i++) {
        const x = s[i], y = t[i];
        if ((s2t[x] && s2t[x] !== y) || (t2s[y] && t2s[y] !== x)) {
            return false;
        }
        s2t[x] = y;
        t2s[y] = x;
    }
    return true;

};