/*
Determine whether an integer is a palindrome. 
Do this without extra space.
*/

// done

// just using one integer solve the problem.
export function PalindromeNumber(x){
    let reversedNumber = 0;
    if(x === 0){
        return true;
    }
    if(x < 0){
        return false;
    }
    if(x % 10 === 0){
        return false;
    }
    while(x > reversedNumber){
        reversedNumber = reversedNumber * 10 + x % 10;
        x = Math.floor(x/10);
    }  
    return reversedNumber === x || Math.floor(reversedNumber/10) === x;
}