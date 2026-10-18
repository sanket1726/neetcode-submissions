class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        if (!matrix.length || !matrix[0].length) return false;

    const rows = matrix.length;
    const cols = matrix[0].length;
    
    let left = 0;
    let right = (rows * cols) - 1;

    while (left <= right) {
        const mid = Math.floor(left + (right - left) / 2);
        
        // Map 1D index back to 2D matrix coordinates
        const row = Math.floor(mid / cols);
        const col = mid % cols;
        const value = matrix[row][col];

        if (value === target) {
            return true;
        } else if (value < target) {
            left = mid + 1; // Search the right half
        } else {
            right = mid - 1; // Search the left half
        }
    }

    return false;
    }
}
