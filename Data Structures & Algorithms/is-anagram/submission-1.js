class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        let mapS = new Map();
        let mapT = new Map();
        
        // 1. Fixed: Changed 'in' to 'of' to get the actual character
        for(let item of s){
            let count = mapS.get(item) || 0;
            mapS.set(item, count + 1);
        }
        for(let item of t){
            let count = mapT.get(item) || 0;
            mapT.set(item, count + 1);
        }
        
        if(mapS.size !== mapT.size) return false;
        
        for (const [key, val] of mapS) {
            // 2. Fixed: Changed mapS.has to mapT.has
            if (!mapT.has(key) || mapT.get(key) !== val) {
                return false;
            }
        }
        
        // 3. Fixed: Only return true AFTER checking all keys
        return true;
    }
}
