/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    // 暴力法 超时
    // const len = prices.length;
    // let max = 0;
    // for(let i = 0;i < len; i++) {
    //     let j = i+1;
    //     for(;j < len; j++) {
    //         const f = prices[j] - prices[i];
    //         if(f > max) max = f;
    //     }
    // }
    // return max;

    // 一次遍历，算出最低价和最大利润
    // 84 ms	50.5 MB
    let cost = prices[0], maxProfit = 0;
    for (let i = 0; i < prices.length; i++) {
        if (prices[i] < cost) cost = prices[i];
        if (prices[i] - cost > maxProfit) maxProfit = prices[i] - cost;
    }
    return maxProfit;
};