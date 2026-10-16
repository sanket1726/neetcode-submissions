class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number[][]}
     */
    merge(intervals) {
        if (!intervals || intervals.length === 0) return [];

        // 1. Sort intervals by their start times
        intervals.sort((a, b) => a[0] - b[0]);

        // 2. Initialize the result array with the first interval
        const merged = [intervals[0]];

        // 3. Iterate through the rest of the intervals
        for (let i = 1; i < intervals.length; i++) {
            const current = intervals[i];
            const lastMerged = merged[merged.length - 1];

            // Check if the current interval overlaps with the last merged one
            if (current[0] <= lastMerged[1]) {
                // There is an overlap; update the end boundary to the maximum end
                lastMerged[1] = Math.max(lastMerged[1], current[1]);
            } else {
                // No overlap; push the current interval as a new entry
                merged.push(current);
            }
        }

        return merged;
    }
}
