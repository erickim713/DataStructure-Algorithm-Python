/*
Given a 32-bit signed integer, reverse digits of an integer.

Example 1:
Input: 123
Output:  321

Example 2:
Input: -123
Output: -321

Example 3:
Input: 120
Output: 21

Note:
Assume we are dealing with an environment which could only hold integers within the 32-bit signed integer range. For the purpose of this problem, assume that your function returns 0 when the reversed integer overflows.

*/

export function reverse(x) {
    let numberAtHand = x;
    let answer = 0;
    let multiplier = 1;
    if(numberAtHand < 0){
        // negative case;
        let negativeNumberAtHandStringForm = numberAtHand.toString()
        for(var index = 1; index <negativeNumberAtHandStringForm.length; index++){
            answer = answer + parseInt(negativeNumberAtHandStringForm[index]) * multiplier;
            multiplier = multiplier * 10;
        }
        answer = answer * -1;
    }else{
        let numberAtHandStringForm = numberAtHand.toString();
        for(var index = 0; index <numberAtHandStringForm.length; index++){
            answer = answer + parseInt(numberAtHandStringForm[index]) * multiplier;
            multiplier = multiplier * 10;
        }
    }
    return answer;
};