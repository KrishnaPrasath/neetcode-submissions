class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let numsSet = new Set(nums);
        let result = 0, maxLength = 0;

        for(let i = 0; i < nums.length; i++) {
            // check if num has left neighbor 
            // then we'll start counting the length
                // result = 0;
            //      check if consecutive # exist in set
                    // if yes = result++
                    // no maxLength = Math.max(result, maxLength); result = 0;
            // 
            if(!numsSet.has(nums[i] - 1)) {
                result++;
                let temp = nums[i] + 1;
                while(numsSet.has(temp)) {
                    result++;
                    temp++;
                }
                maxLength = Math.max(maxLength, result);
                
            }
            result = 0
        }

        return maxLength;
    }
}
