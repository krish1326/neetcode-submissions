class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        var obj = {};

        for(let str of strs){
            let formattedStr = str.toLowerCase().split("").sort().join("");
            if(!obj[formattedStr]) obj[formattedStr] = [str];
            else obj[formattedStr] = [...obj[formattedStr], str]
        }

        return Object.values(obj);
    }
}
