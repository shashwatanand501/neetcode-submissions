class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let map = new Map();
        for (let i = 0; i < nums.length; i++) {
            let currentCount = map.get(nums[i]) || 0;
            map.set(nums[i], currentCount + 1);
        }
        console.log(map);
        const lastTwoValues = Array.from(map.keys())
            .sort((a, b) => map.get(b) - map.get(a))
            .slice(0, k);
        return lastTwoValues;
    }
}
