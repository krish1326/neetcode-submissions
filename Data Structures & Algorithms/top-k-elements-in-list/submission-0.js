class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const obj = {};
        for( let num of nums){
            if(!obj[num]) obj[num] = 1;
            else obj[num]+=1;
        }
        const resArr = Object.entries(obj).sort((a,b)=> b[1] - a[1]);
        

        const result = [];
        for(let j=0;j<k;j++){
            result.push(Number(resArr[j][0]));
        }
        return result;
    }
}
