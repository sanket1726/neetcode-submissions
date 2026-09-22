class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let prodArr = Array(nums.length)
        let prefix = 1;
        for(let i=0; i<nums.length ; i++){
            prodArr[i]=prefix;
            prefix*=nums[i];
        }

        let sufix = 1;
        for(let i=nums.length-1; i>=0 ; i--){
            prodArr[i]*=sufix;
            sufix*=nums[i];
        }
        return prodArr;
    }
}
 