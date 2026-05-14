class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        // [4,5,6], 10
        const length = nums.length; // 3
        // for(let i = 0; i < length - 1; i++) { // i < 
        //     for(let j = i + 1; j < length; j++) {
        //         if(nums[i] + nums[j] === target) return [i, j];
        //     }
        // }
        let result = [];
        let cache = new Map();
        for(let i = 0; i < length; i++) {
            let required = target - nums[i];
            if(cache.has(required)) result.push(i, cache.get(required));
            else cache.set(nums[i], i);
        }

        return result;
    }
}
