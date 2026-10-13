class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let temp = new Set(nums);
        if (temp.size === nums.length) {
            return false;
        } else {
            return true;
        }
    }
}
