class Solution {
    public int pivotIndex(int[] nums) {
        // 1 ms	42.4 MB
        int len = nums.length;
        int[] sum = new int[len];
        sum[0] = nums[0];
        for(int i = 1; i< len; i++) {
            sum[i] = nums[i] + sum[i - 1];
        }
        if(sum[len - 1] - sum[0] == 0) {
            return 0;
        }
        int res = 0;
        for(int j = 1; j < len; j++) {
            if(sum[j - 1] == (sum[len - 1] - sum[j])) {
                res = j;
                // 记得找到后终止循环， 不然会找到多个下标，然后返回最大的下标
                j = len;
            }
        }
        if(res <= 0) {
            return - 1;
        }
        return res;
    }
}