class Solution {
    public int lengthOfLastWord(String s) {
        // 	0 ms	39.8 MB
        int index = s.length() -1;
        int res = 0;
        while(s.charAt(index) == ' ') {
            index--;
        }
        while(index>=0 && s.charAt(index) != ' ') {
            res++;
            index--;
        }
        return res;
    }
}