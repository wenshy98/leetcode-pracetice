class Solution {
    public boolean isPalindrome(int x) {
        // % / 来逐位判断 5 ms 40.8 MB
        if (x < 0) return false; // 负数不是回文数
        if (x % 10 == 0 && x != 0) return false; // 如果数字的末尾是 0，则不是回文数
        // 反转数字，并与原数字进行比较
        int res = 0;
        // 如果反转后的数字比原数字小, 达到字符串的一半长度
        // x = res 就是偶数回文
        while (x > res) {
            // 取出反转数字的最后一位，即取出 10 的位数，然后进行比较。
            res = res * 10 + x % 10;
            x /= 10;
        }
        // 反转后的数字等于原数字，或者反转后的数字除以 10 等于原数字
        // x == res 偶数回文 || x == res / 10 奇数回文
        return x == res || x == res / 10;


        // 例子 121
        //          res = 0         x = 121
        // 121 > 0  res = 1(0 + 1)  x = 12
        // 12 > 1   res = 12(10 + 2)  x = 1
        // 1 > 12 × 1 == 12 || 1 == 1 √

        // 例子 1221
        //             res = 0            x = 1221
        // 1221 > 0    res = 1(0 + 1)     x = 122
        // 122  > 1    res = 12(10 + 2)   x = 12
        // 12   > 12 × 12 == 12 || 

        // 例子 2212
        //           res = 0            x = 2212
        // 2212 > 0  res = 2(0 + 2)     x = 221
        // 221  > 2  res = 21(20 + 1)   x = 22
        // 22   > 21 res = 212(210 + 2) x = 2
        // 2 > 212 × 2 == 212 || 2 == 21 ×
    }
}