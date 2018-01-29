/**
 * Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

The brackets must close in the correct order, "()" and "()[]{}" are all valid but "(]" and "([)]" are not.
 */



export function validParanthesis(s){
    let stringInput = s;
    let Stillvalid = true;
    let stack = [];
    let openingParanthesis = new Map();
    openingParanthesis.set('[', ']');
    openingParanthesis.set('{', '}');
    openingParanthesis.set('(', ')');

    for(let idx = 0; idx < stringInput.length; idx++){
        if(openingParanthesis.has(stringInput[idx])){
            stack.push(stringInput[idx]);
        }
        else{
            var topOftheStack = stack.pop();
            if(openingParanthesis.get(topOftheStack) !== stringInput[idx]){
                Stillvalid = false;
            }
        }
    }
    if(stack.length > 0){
        Stillvalid = false;
    }
    return Stillvalid;
} 