/**
 Given an array S of n integers, are there elements a, b, c in S such that a + b + c = 0? Find all unique triplets in the array which gives the sum of zero.

Note: The solution set must not contain duplicate triplets.

For example, given array S = [-1, 0, 1, 2, -1, -4],

A solution set is:
[
  [-1, 0, 1],
  [-1, -1, 2]
]
 */
function equalCollection(array1, array2){
    for(let i = 0; i < array1.length; i++){
        if(array1[i] !== array2[i]){
            return false;
        }
    }
    return true;
}

function containsthisArray(array, collectionOfArray){
    for(let idx = 0; idx < collectionOfArray.length; idx++){
        if(equalCollection(array, collectionOfArray[idx])){
            return true;
        }
    }
    return false;
}

export function threeSum(nums){
    nums = nums.sort((a, b) => {
        return a - b;
    });
    let answer = [];
    let hashmap = new Map();
    let currentSum = 0;

    // initial set up for the problem using map
    for(var i = 0; i < nums.length; i++){
        if(hashmap.has(nums[i])){
            
            hashmap.set(nums[i], hashmap.get(nums[i]) + 1);
        }
        else{
            hashmap.set(nums[i], 1);
        }
    }
    

    for(var i = 0; i < nums.length - 1; i++){
        hashmap.set(nums[i], hashmap.get(nums[i]) - 1);
        for(var j = i + 1; j < nums.length; j++){
            hashmap.set(nums[j], hashmap.get(nums[j]) -1);
            currentSum = nums[i] + nums[j];
            // The reason I did it this way is because 0 results in -0 if multiplied by 0; read #2 for more explanation
            if(currentSum === 0){
                var tobeInsertedList = [nums[i], nums[j], currentSum].sort((a,b)=>{
                    return a - b;
                });
                if(hashmap.has(currentSum) && hashmap.get(currentSum) > 0 && !containsthisArray(tobeInsertedList, answer)){
                    answer.push(tobeInsertedList);
                }    
            }
            else{
                // I could have just done this and it would have been absolutely fine. but if currentSum was 0 then we would need 0 for the third
                // digit; however, if we use this logic which is to find whatever's left to get to zero and GET A CASE WITH CURRENTSUM BEING ZERO
                // we would multiply zero with negative one which would end up with negative sign on zero. weird...
                var tobeInsertedListNotZero =[nums[i], nums[j], currentSum * -1].sort((a, b)=>{
                    return a - b;
                });
                if(hashmap.has(-1 * currentSum) && hashmap.get(-1 * currentSum) > 0 && !containsthisArray(tobeInsertedListNotZero, answer)){
                    answer.push(tobeInsertedListNotZero);
                }
            }
            hashmap.set(nums[j], hashmap.get(nums[j])+ 1);
        }
        hashmap.set(nums[i], hashmap.get(nums[i]) + 1);
    }
    return answer;
}