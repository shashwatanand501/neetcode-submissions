class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let map = {};
        for (let str of strs) {
            let sortedKey = [...str].sort().join("");
            if (!map[sortedKey]) {
                map[sortedKey] = [];
            }
            map[sortedKey].push(str);
        }
        let output =  Object.values(map);
        return output
    }
}
