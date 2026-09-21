class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const numSet = new Set();
        let dup = false; 
        nums.forEach((num) => {
            if(numSet.has(num)){
                console.log('dup was here')
                dup = true;
            };
            numSet.add(num);
        })
        return dup
    }
}
