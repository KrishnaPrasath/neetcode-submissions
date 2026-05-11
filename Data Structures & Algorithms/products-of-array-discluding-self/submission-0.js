class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let output = [];
        const n = nums.length;
        let prefix = new Array(n).fill(1), suffix = new Array(n ).fill(1);

        // prefix
        for(let i = 1; i < n; i++) {
            prefix[i] = prefix[i - 1] * nums[i - 1];
        }

        // prefix
        for(let j = n - 2; j >= 0; j--) {
            suffix[j] = nums[j + 1] * suffix[j + 1];
        }

        //product
        for(let k = 0; k < nums.length; k++) {
            output[k] = prefix[k] * suffix[k];
        }

        return output;
    }
}
