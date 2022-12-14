class Solution {
    public int romanToInt(String s) {
        // 哈希表，小数据量很慢，可以用switch替代
        Map<String,Integer> nums = new HashMap<>();
        nums.put("M", 1000);
        nums.put("CM", 900);
        nums.put("D", 500);
        nums.put("CD", 400);
        nums.put("C", 100);
        nums.put("XC", 90);
        nums.put("L", 50);
        nums.put("XL", 40);
        nums.put("X", 10);
        nums.put("IX", 9);
        nums.put("V", 5);
        nums.put("IV", 4);
        nums.put("I", 1);
        int sum = 0;
        for (int i = 0; i < s.length();i++) {
            if (i + 1 < s.length() && nums.get(s.substring(i, i + 2)) != null) {
                sum += nums.get(s.substring(i, i + 2));
                i++;
            } else {
                sum += nums.get(s.substring(i, i + 1));
            }
        }
        return sum;
    }
}