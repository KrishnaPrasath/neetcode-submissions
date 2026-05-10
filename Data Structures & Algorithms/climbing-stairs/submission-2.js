class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n, cache = {}) {
        if(n  < 2) return 1;

        if(cache[n]) return cache[n];

        cache[n] = this.climbStairs(n-1, cache) + this.climbStairs(n-2, cache);
        return cache[n];
    }
}
