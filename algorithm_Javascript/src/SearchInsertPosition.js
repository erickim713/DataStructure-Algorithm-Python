/*
Given a sorted array and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

You may assume no duplicates in the array.

Example 1:

Input: [1,3,5,6], 5
Output: 2
Example 2:

Input: [1,3,5,6], 2
Output: 1
Example 3:

Input: [1,3,5,6], 7
Output: 4
Example 1:

Input: [1,3,5,6], 0
Output: 0
*/





export function searchInsertPosition(nums, target){
    if(nums.length === 0){
        return 0;
    }
    let centerIdx = Math.ceil(nums.length/2); //round down the number;
    let firstIdx = 0;
    let lastIdx = nums.length - 1;
    while(true){
        if(firstIdx === lastIdx){
            if(nums[firstIdx] > target){
                if(firstIdx === 0){
                    return 0;
                }
                else{
                    return firstIdx - 1;
                }
            }
            else{
                return firstIdx + 1;
            }
        }
        if(nums[centerIdx] > target){
            lastIdx = centerIdx - 1;
            centerIdx = Math.ceil((lastIdx + firstIdx )/2);
        }
        else{
            firstIdx = centerIdx + 1;
            centerIdx = Math.floor((lastIdx + firstIdx )/2);
        }
    }
}

