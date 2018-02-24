/**
Given a non-negative integer represented as a non-empty array of digits, plus one to the integer.
You may assume the integer do not contain any leading zero, except the number 0 itself.
The digits are stored such that the most significant digit is at the head of the list.
 */

export function plusOne(digits){
    
    let lengthofArray = digits.length;
    let carry = 0;
    digits[lengthofArray - 1] = digits[lengthofArray - 1] + 1;
    if (digits[lengthofArray -1] >= 10){
        carry = 1;
        digits[lengthofArray -1]  -= 10;
    }
    for(let idx = lengthofArray - 2; idx >= 0; idx--){
        //reset the sum;
        if(carry === 1){
            digits[idx] = digits[idx] + 1;
            carry = 0;
        }
        if(digits[idx] >= 10){
            carry = 1;
            digits[idx] = digits[idx] - 10;
        }
    }
    if(carry === 1){
        digits.unshift(1);
    }
    return digits
}