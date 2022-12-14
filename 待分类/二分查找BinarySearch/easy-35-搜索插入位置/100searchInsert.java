class Solution {
    public int searchInsert(int[] nums, int target) {
        // 0 ms	40.6 MB
        int len = nums.length;
        if(nums[0] >= target) return 0;
        if(nums[len - 1] < target) return len;
        int res = 0;
        for(int i = 1; i < len; i++) {
            if(nums[i] == target) {
                res = i;
                i = len;
            }
            if((nums[i - 1] < target) && (nums[i] > target)) {
                res = i;
                i = len;
            }
        }
        return res;
    }
}