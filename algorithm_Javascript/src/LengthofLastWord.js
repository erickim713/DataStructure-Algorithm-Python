/*
Given a string s consists of upper/lower-case alphabets and empty space characters ' ', return the length of last word in the string.

If the last word does not exist, return 0.

Note: A word is defined as a character sequence consists of non-space characters only.

Example:

Input: "Hello World"
Output: 5
*/

export function lengthOfLastWord(s){
    let splitCollection = s.split(' ');
    let lastword;
    let lastidx = splitCollection.length - 1;
    while(lastword === undefined && lastidx >= 0){
        if(splitCollection[lastidx]== ''){
            lastidx--;
        }
        else{
            lastword = splitCollection[lastidx];
        }
    }
    if(lastword === undefined){
        return 0;
    }
    return lastword.length;
}