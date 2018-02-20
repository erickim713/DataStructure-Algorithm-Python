/**
 *   
 1.     1
 2.     11
 3.     21
 4.     1211
 5.     111221 
 6.     312211
 7.     13112221
 8.     1113213211
 9.     31131211131221
 10.    13211311123113112211 
 thanks to xin15 for the examples above.
 * 
 */
export function countAndSay(n){
    let quote = '1';
    let result;
    if(n == 1){
        return '1';
    }
    for(let i = 1; i < n; i++){
        quote = sayIt(quote);
    }
    return quote;
    
    
}

function sayIt(string){
    let index = 0;
    let currentCharacter = '';
    let counter = 0;
    let result = '';
    while(string.charAt(index).length == 1){
        if(currentCharacter !== string.charAt(index)){
            if(counter > 0){
                //add to the result string
                result = result + counter.toString() + currentCharacter;
            }
            currentCharacter = string.charAt(index);
            counter = 1;
        }
        else{
            counter++;
        }
        index++;
    }
    result = result + counter.toString() + currentCharacter;
    return result;
}