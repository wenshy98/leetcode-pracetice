class Solution {
    public int removeElement(int[] nums, int val) {
        // 双指针 0 ms	40.5 MB	Java
        int i = 0;
        for(int j = 0; j< nums.length; j++) {
            if(nums[j] != val) {
                nums[i] = nums[j];
                i++;
            }
        }
        return i;
    }
}