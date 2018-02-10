/*
Given two binary strings, return their sum (also a binary string).

For example,
a = "11"
b = "1"
Return "100".
*/
export function addBinary(a, b){
    let answer = '';
    if(a.length >b.length){
        b = '0'.repeat(a.length - b.length) + b;
    }
    if(b.length > a.length){
        a = '0'.repeat(b.length - a.length) + a;        
    }
    let carryover = 0;
    var sum = 0;
    for(let i = a.length - 1; i >= 0; i--){
        sum = parseInt(a[i]) + parseInt(b[i]) + carryover;
        carryover = 0;
        if(sum > 1){
            carryover = 1;
            sum = sum - 2;
        }
        answer = sum.toString() + answer;
    }
    if(carryover ==1){
        answer = '1' + answer;
    }
    return answer;

}