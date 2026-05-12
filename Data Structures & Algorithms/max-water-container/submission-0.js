class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let max = 0;
        let n = heights.length;

        let l = 0, r = n - 1;
        while(l < r) {
            let height = Math.min(heights[l], heights[r]);
            let width = r - l;

            max = Math.max(height * width, max);
            if(heights[l] === height) {
                l++;
            } else r--;
        }

        return max;
    }
}
