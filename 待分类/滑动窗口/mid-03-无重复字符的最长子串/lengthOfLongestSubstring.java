class Solution {
    public int lengthOfLongestSubstring(String s) {
        // 滑动窗口
        Set<Character> set = new HashSet<>();
        int i = 0;
        int max = 0;
        for(int j =0;j<s.length();j++) {
            char c = s.charAt(j);
            while(set.contains(c)) {
                set.remove(s.charAt(i++));
            }
            set.add(c);
            max = Math.max(j - i + 1,max);
        }
        return max;
    }
}