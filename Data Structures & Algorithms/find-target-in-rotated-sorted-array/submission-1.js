class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let left = 0;
        // let right = nums.length-1

        // while(left<=right) {
        //     let mid = Math.floor((left+right)/2);
        //     if(nums[mid] === target) {
        //         return mid;
        //     } 
        //     if( target > nums[right] ) {
        //         left = mid + 1;
        //     } 
        //     if(target < nums[right] ){
        //         right = mid - 1; 
        //     }
        // }
        // return -1
        while(left <= nums.length-1) {
            if(nums[left] === target) {
                return left;
            }
            left++;
        }
        return -1
    }
}
