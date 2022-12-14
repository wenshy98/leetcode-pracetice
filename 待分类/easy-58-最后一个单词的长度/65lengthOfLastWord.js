/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
    // api战士
    // 60 ms	41 MB 
    // s = s.trim();
    // return s.length - s.lastIndexOf(" ") - 1;

    // 反向遍历字符串
    // 	60 ms	41.1 MB
    let index = s.length - 1;
    let res = 0;
    // 过滤最后一串单词后的空格
    while (s[index] === ' ') {
        index--;
    }
    while (index >= 0 && s[index] != ' ') {
        res++;
        index--;
    }
    return res;

};