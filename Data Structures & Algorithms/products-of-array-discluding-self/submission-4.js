class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let res = new Array(nums.length);

        let magic = 1;

        for (let i=0 ; i<nums.length ; i++){
            res[i]=magic;
            magic*=nums[i]
        }
        magic = 1;
        for(let i=nums.length-1 ; i>=0 ; i--){
            res[i]*=magic;
            magic*=nums[i];
        }

        return res;
    }
}

