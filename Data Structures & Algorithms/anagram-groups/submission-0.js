class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const keySet = new Map();
        for (let i=0 ; i<strs.length ; i++){
            const sorted = strs[i].split("").sort().join('');
            if(keySet.has(sorted)){
                const existing = keySet.get(sorted)
                existing.push(strs[i])
                keySet.set(sorted, existing)
            } else {
                keySet.set(sorted, [strs[i]]);
            }
        }
        return Array.from(keySet.values());
    }
}
