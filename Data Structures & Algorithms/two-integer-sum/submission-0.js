class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        
        // brute force: sum of 2 numbers starting from zero calculate all if target reached break the loop and send both indexes back.

        for(let i=0; i<nums.length-1;i++){
            for(let j=i+1;j<nums.length;j++){
                if(nums[i] + nums[j] == target) return [i,j];
            }
        }

    }
}
