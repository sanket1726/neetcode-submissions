class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const topMap = new Map();

        for (const num of nums) {
            topMap.set(num, (topMap.get(num) || 0) + 1);
        }

        // Sort and extract keys
        return [...topMap.entries()]
            .sort((a, b) => b[1] - a[1])
            .slice(0, k)
            .map(([key, value]) => key); // Destructuring makes it readable
        }
}
