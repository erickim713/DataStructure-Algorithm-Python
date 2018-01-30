/**
 * Implement strStr().

Return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

Example 1:

Input: haystack = "hello", needle = "ll"
Output: 2
Example 2:

Input: haystack = "aaaaa", needle = "bba"
Output: -1
 */
// my solution goes time limit exceeded.. why... i think it's doing the same thing but okay
export function strStr(haystack, needle){
   if (needle.length === 0){
       return 0;
   }
   for (let idx = 0; ;idx++){
       for(let needleIdx = 0; ;needleIdx++){
           if(needleIdx == needle.length){
               return idx;
           }
           if(idx + needleIdx == haystack.length){
               return -1;
           }
           if(haystack[idx + needleIdx] != needle[needleIdx]){
               break;
           }
       }
   }
   
}
/**apparently you can do this in one line. which is haystack.indexOf(needle) ....*/
// TODO: https://en.wikipedia.org/wiki/Knuth%E2%80%93Morris%E2%80%93Pratt_algorithm 