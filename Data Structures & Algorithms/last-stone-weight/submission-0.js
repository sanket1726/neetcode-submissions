class Solution {
    /**
     * @param {number[]} stones
     * @return {number}
     */
    lastStoneWeight(stones) {
        let final = stones
        while(final.length > 1 ){
            const max = final.sort((a,b) => b-a);
            const max1 = max[0];
            const max2 = max[1];
            const gap = max1-max2;
            const spliced = max.splice(2,max.length-1)
            final = [...spliced, gap]
        }

        return final[0];
    }
}
