class Solution {
    public int[] runningSum(int[] nums) {
        // 0 ms	41.4 MB 100
        for(int i = 1; i< nums.length; i++) {
            nums[i] += nums[i - 1];
        }
        return nums;
    }
}