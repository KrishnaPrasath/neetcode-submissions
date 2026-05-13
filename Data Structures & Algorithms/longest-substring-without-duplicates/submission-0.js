class Solution {
    /**
     * @param {string} s
     * @return {number}
     */

    // abcabcbb
    lengthOfLongestSubstring(s) {
        const n = s.length;
        if(n === 0 || n === 1) return n;
        let sett = new Set();

        let l = 0, maxLength = 0;

        for(let r = 0; r < n; r++) {
            while(sett.has(s[r])) {
                sett.delete(s[l]);
                l++;
            }
            sett.add(s[r]);
            maxLength = Math.max(maxLength, r - l + 1);
        }
 
        return maxLength;
    }
}
