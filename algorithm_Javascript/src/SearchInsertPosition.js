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
    let centerIdx = Math.floor((nums.length-1)/2); 
    let firstIdx = 0;
    let lastIdx = nums.length - 1;
    while(firstIdx <= lastIdx){
        if(firstIdx == lastIdx){
            if(target > nums[firstIdx]){
                return firstIdx + 1;
            }
            else{
                return firstIdx;
            }
        }
        if(nums[centerIdx] == target){
            return centerIdx;
        }
        else if(nums[centerIdx] > target){
            lastIdx = centerIdx - 1;
            centerIdx = Math.floor((firstIdx + lastIdx)/2);
        }
        else{
            firstIdx = centerIdx + 1;
            centerIdx = Math.floor((firstIdx + lastIdx )/2);
        }   
    }
    return firstIdx;
}


