class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let profit = 0;

        // BruteForce
        // for(let i = 0; i < prices.length - 1; i++) {
        //     for(let j = i + 1; j < prices.length; j++) {
        //         let buyPrice = prices[i];
        //         let sellingPrice = prices[j];
        //         profit = Math.max(profit, sellingPrice - buyPrice);
        //     }   
        // }

        // DP
        let cheapestPrice = prices[0];
        for(let i = 1; i < prices.length; i++) {
            let currentPrice = prices[i];
            cheapestPrice = Math.min(cheapestPrice, currentPrice);
            profit = Math.max(profit, currentPrice - cheapestPrice);
        }

        return profit;
    }
}
