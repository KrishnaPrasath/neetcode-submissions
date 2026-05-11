class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        nums = nums.sort((x, y) => x - y);

        const n = nums.length;
        let output = [];

        for(let i = 0; i < n; i++) {
            if(i > 0 && nums[i] === nums[i - 1]) continue;
            
            let l = i + 1, r = n - 1;

            while(l < r) {
                const sum = nums[i] + nums[l] + nums[r];

                if(sum === 0) {
                    output.push([nums[i], nums[l], nums[r]]);

                    while(l < r && nums[l] === nums[l + 1]) l++;
                    while(l < r && nums[r] === nums[r-1]) r--;

                    l++; r--;
                } else if(sum < 0) l++;
                else r--;
            }
        }

        return output;
    }
}
