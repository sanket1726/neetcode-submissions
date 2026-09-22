class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let res = Array(nums.length)
        let prefix = 1;
        for(let i=0; i<nums.length ; i++){
            res[i]=prefix;
            prefix*=nums[i];
        }

        let sufix = 1;
        for(let i=nums.length-1; i>=0 ; i--){
            res[i]*=sufix;
            sufix*=nums[i];
        }
        return res;
    }
}
 