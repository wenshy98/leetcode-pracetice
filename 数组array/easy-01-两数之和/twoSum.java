import java.util.HashMap;
import java.util.Map;

class Solution {

    public static int[] twoSum(int[] nums, int target) {
        // 方法一：暴力枚举  97 ms	41.6 MB	Java
//        int n = nums.length;
//        for ( int i = 0; i < n; ++i ) {
//            for ( int j = 0 ; j < n; ++j ) {
//                if ( j != i && nums[i] + nums [j] == target ) {
//                    return new int[]{ i, j};
//                }
//            }
//        }
//        return new int[0];

        // 方法二：哈希表 2 ms	41.8 MB	Java
        Map<Integer, Integer> resultMap = new HashMap<Integer, Integer>();
        for ( int i = 0; i < nums.length; ++i ) {
            if ( resultMap.containsKey(target - nums[i])) {
                return new int[]{resultMap.get(target - nums[i]),i};
            }
            resultMap.put(nums[i], i);
        }
        return new int[0];
    }


    public static void main(String[] args) {
        int[] nums = {2,7,11,15};
        int target = 9;
        int[] result = twoSum(nums, target);
        for ( int i = 0; i < result.length; ++i ) {
            System.out.println(result[i]);
        }
    }

}





