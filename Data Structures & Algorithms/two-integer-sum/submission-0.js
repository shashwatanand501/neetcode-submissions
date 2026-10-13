class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let seenMap = new Map();

        for (let i = 0; i < nums.length; i++) {
            let currentNum = nums[i]
            let check = target - currentNum;

            if(seenMap.has(check)){
                return [seenMap.get(check), i]
            }
            seenMap.set(currentNum,i)
        }
        return []
    }
}
