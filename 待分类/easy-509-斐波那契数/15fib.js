/**
 * @param {number} n
 * @return {number}
 */
var fib = function (n) {
    // 84 ms	40.9 MB
    if (n === 0) return 0;
    if (n === 1) return 1;
    return fib(n - 1) + fib(n - 2);
};