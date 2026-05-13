class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        // let maxProfit = 0;
        // let pricesLength = prices.length;

        // for(let i = 0; i < pricesLength - 1; i++) {
        //     for(let j = i + 1; j < pricesLength; j++) {
        //         if(prices[j] - prices[i] > maxProfit) maxProfit = prices[j] - prices[i];
        //     }
        // }

        // return maxProfit;

        // time : O(n) space: O(1)
        let minBuyPrice = prices[0];
        let maximumProfitPossible = 0;

        for(let i = 1; i < prices.length; i++) {
            minBuyPrice = Math.min(minBuyPrice, prices[i]);

            maximumProfitPossible = Math.max(prices[i] - minBuyPrice, maximumProfitPossible)
        }

        return maximumProfitPossible;
    }
}
