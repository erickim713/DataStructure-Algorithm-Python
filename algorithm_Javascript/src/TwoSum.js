/*
Given an array of integers, return indices of the two numbers such that they add up to a specific target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

Example:
Given nums = [2, 7, 11, 15], target = 9,

Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1].

*/

export function TwoSum(listofNumber, target){
    let hashmap = new Map();
    let answer = [];
    for (let index in listofNumber) {
        if (hashmap.has(target - listofNumber[index])) {
            answer.push(parseInt(hashmap.get(target-listofNumber[index])));
            answer.push(parseInt(index));
            break;
        }
        else{
            hashmap.set(listofNumber[index], index);
        }
    }
    return answer
}