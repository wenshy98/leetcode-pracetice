func removeElement(nums []int, val int) int {
    // 双指针 0 ms	2 MB	Go
    i := 0
    for j:=0; j< len(nums); j++ {
        if nums[j] != val {
            nums[i] = nums[j]
            i++
        }
    }
    return i
}