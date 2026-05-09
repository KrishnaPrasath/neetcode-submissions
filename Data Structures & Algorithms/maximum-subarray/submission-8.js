class Solution {
    sum(subArray) {
        return subArray.reduce((acc, cum) => acc += cum, 0);
    }
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxSubArray(nums) {
        if(nums.length < 2) return nums[0];

        let max = nums[0];

        for(let i = 0, j = 0; i < nums.length & j < nums.length;) {
            // for(let j = 0; j < nums.length; j++) {
                const subArray = nums.slice(i, j + 1);
                const summation = subArray.length ? this.sum(nums.slice(i, j + 1)) : max;
                if(summation > max) max = summation;
                if(j === nums.length - 1) {
                    j = 0;
                    i++;
                } else j++;
            // }            
        }

        return max;
    }
}
