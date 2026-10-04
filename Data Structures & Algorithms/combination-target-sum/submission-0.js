class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums, target) {
        const result = [];

    function backtrack(remaining, combo, start) {
        // Base case: exact target met
        if (remaining === 0) {
            result.push([...combo]);
            return;
        }
        // Base case: overshot target
        if (remaining < 0) {
            return;
        }

        // Iterate through nums starting from 'start' to avoid duplicate permutations
        for (let i = start; i < nums.length; i++) {
            combo.push(nums[i]);
            // Pass 'i' instead of 'i + 1' to allow reuse of the same element
            backtrack(remaining - nums[i], combo, i);
            // Backtrack by removing the latest element
            combo.pop();
        }
    }

    backtrack(target, [], 0);
    return result;
    }
}
