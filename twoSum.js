/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
let nums = [5,2,6,8,7];
let target = 12;
var twoSum = function(nums, target) {
    let numsAr = [];
    for(var i=0; i<= nums.length;i++){
        for(var j=(i+1); j<= nums.length;j++){
            if(nums[i] + nums[j]==target){
                numsAr.push(i)
                numsAr.push(j)
                return numsAr
            }
        }
    }
};
console.log(twoSum(nums,target))