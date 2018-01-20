/*
Given a string s, find the longest palindromic substring in s. You may assume that the maximum length of s is 1000.

Example:

Input: "babad"
Output: "bab"
Note: "aba" is also a valid answer.

Example:
Input: "cbbd"
Output: "bb"
*/

function calc_PalindromicSubstrLen(string, leftIdx, rightIdx){
    if(string[leftIdx] !== string[rightIdx]){
        return 0;
    }
    let leftIndex = leftIdx;
    let rightIndex  = rightIdx;
    while(leftIndex >= 0 && rightIndex < string.length && (string[leftIndex] === string[rightIndex])){
        leftIndex--;
        rightIndex++;
    }
    let substringLength = rightIndex - leftIndex - 1;
    return substringLength;
}

export function longestPalindromicSubstring(stringInput){
    let startingIdx = 0, endingIdx = 0;
    let oddSizedSubstringLength = 0;
    let EvenSizeSubstringLength = 0;

    if(stringInput.length === 1 || stringInput.length === 0){
        return stringInput; //length of 1 or 0 is just itself
    }

    for (let index = 0; index < stringInput.length; index++) {
        oddSizedSubstringLength = calc_PalindromicSubstrLen(stringInput, index, index);
        EvenSizeSubstringLength = calc_PalindromicSubstrLen(stringInput, index, index + 1); 
        var maxLength = Math.max(oddSizedSubstringLength, EvenSizeSubstringLength);
        if( maxLength > (endingIdx - startingIdx + 1)){
            startingIdx = index - Math.floor((maxLength-1)/2);
            endingIdx = index + Math.floor(maxLength/2);
        }
    }
    return stringInput.substring(startingIdx, endingIdx + 1);
}