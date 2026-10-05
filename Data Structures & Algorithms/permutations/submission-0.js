class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    permute(nums) {
        const result = []
        // An elegant approach using an in-place swap to avoid the extra memory overhead of a 'used' array.
        function backtrack(first) {
            // Base case: If we have reached the end of the array, we have a complete permutation.
            if (first === nums.length) {
                result.push([...nums]); // Push a shallow copy of the current state of nums
                return;
            }

            for (let i = first; i < nums.length; i++) {
                // 1. Choose: Swap the current element into the 'first' position
                [nums[first], nums[i]] = [nums[i], nums[first]];

                // 2. Explore: Recurse for the remaining elements
                backtrack(first + 1);

                // 3. Unchoose (Backtrack): Swap back to restore the original array structure
                [nums[first], nums[i]] = [nums[i], nums[first]];
            }
        }

        backtrack(0);
        return result;
    }
}
