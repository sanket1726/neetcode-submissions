class Solution {
    /**
     * @param {number[][]} intervals
     * @param {number[]} newInterval
     * @return {number[][]}
     */
    insert(intervals, newInterval) {
        const result = [];
    let i = 0;
    const n = intervals.length;

    // Phase 1: Add all intervals that end before the new interval starts
    while (i < n && intervals[i][1] < newInterval[0]) {
        result.push(intervals[i]);
        i++;
    }

    // Phase 2: Merge all overlapping intervals with the new interval
    while (i < n && intervals[i][0] <= newInterval[1]) {
        newInterval[0] = Math.min(newInterval[0], intervals[i][0]);
        newInterval[1] = Math.max(newInterval[1], intervals[i][1]);
        i++;
    }
    // Push the merged final newInterval
    result.push(newInterval);

    // Phase 3: Add all remaining intervals that start after the new interval ends
    while (i < n) {
        result.push(intervals[i]);
        i++;
    }

    return result;
    }
}
