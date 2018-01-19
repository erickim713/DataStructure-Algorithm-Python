// Longest Substring without Repeating Characters
// Given a string, find the length of the longest substring without repeating characters.
// Examples:
// Given "abcabcbb", the answer is "abc", which the length is 3.
// Given "bbbbb", the answer is "b", with the length of 1.
// Given "pwwkew", the answer is "wke", with the length of 3. Note that the answer must be a substring, "pwke" is a subsequence and not a substring.

export function LongestSubstringWithoutRepeatingCharacters(string){
    let dictionary = new Map();
    let currentStartingIndex = 0;
    let LongestSubstringLength = 0;
    for (let index = 0; index < string.length; index++) {
         if(dictionary.has(string[index]) && currentStartingIndex <= dictionary.get(string[index])){
            currentStartingIndex = dictionary.get(string[index])  + 1;
         }
         else{
            LongestSubstringLength = LongestSubstringLength > (index - currentStartingIndex + 1) ? LongestSubstringLength : (index -currentStartingIndex + 1);
         }
         dictionary.set(string[index], index);
    }
    return LongestSubstringLength;
}