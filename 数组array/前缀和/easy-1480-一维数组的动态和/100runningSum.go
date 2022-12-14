func runningSum(nums []int) []int {
	// 0 ms	2.5 MB 100%
    len := len(nums)
    for i := 1; i < len; i++ {
        nums[i] += nums[i-1]
    }
    return nums;
}