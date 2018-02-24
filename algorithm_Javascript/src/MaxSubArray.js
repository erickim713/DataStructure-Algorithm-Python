/*
Find the contiguous subarray within an array (containing at least one number) which has the largest sum.

For example, given the array [-2,1,-3,4,-1,2,1,-5,4],
the contiguous subarray [4,-1,2,1] has the largest sum = 6.



*/
export function maxSubArray(nums){
    let maximum = nums[0]; 
    let lastMax = maximum;
    for(let idx = 1; idx < nums.length; idx++){
        lastMax = Math.max(lastMax + nums[idx], nums[idx]);
        maximum = Math.max(maximum, lastMax);
    }
    return maximum;
}