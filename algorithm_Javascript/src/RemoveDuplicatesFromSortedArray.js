/**
Given a sorted array, remove the duplicates in-place such that each element appear only once and return the new length.

Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.

Example:

Given nums = [1,1,2],

Your function should return length = 2, with the first two elements of nums being 1 and 2 respectively.
It doesn't matter what you leave beyond the new length.

*/


/**
 * @param {number[]} nums
 * @return {number}
 */
//  TODO: improve this solution later.
export function removeDuplicatesFromSortedArray(nums){
    if(nums.length === 0 || nums.length === 1){
        return nums.length;
    }
    let startingpointer, endpointer;
    for(let idx = 0; idx < nums.length-1; idx++){
        if(nums[idx] === nums[idx+1]){
            startingpointer = idx;
            endpointer  = idx +1;
            for(;endpointer < nums.length;){
                if(nums[endpointer] == nums[endpointer+1]){
                    endpointer++;
                }     
                else{
                    break;
                }
            }
            nums.splice(startingpointer + 1, endpointer - startingpointer);
        }
    }
    return nums.length
}