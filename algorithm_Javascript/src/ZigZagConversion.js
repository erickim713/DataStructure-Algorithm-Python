export function ZigZagConversion(s, numRows){
    if(numRows === 1){
        return s;
    }
    let rowsOfStrings =[];
    let changeInRow = 1;
    let textBlockEndingIndex = numRows - 1;
    let answer = '';
    
    for(let i = 0; i < numRows; i++){
        rowsOfStrings.push('');
    }

    let currentState = {
        goingDown: true,
        row: 0
    };


    for(let j = 0; j < s.length; j++){ 
        rowsOfStrings[currentState.row] = rowsOfStrings[currentState.row].concat(s[j]);
        // console.log( rowsOfStrings[currentState.row]);        
        if(currentState.row === numRows - 1 && currentState.goingDown){
            currentState.goingDown = false;
            changeInRow = changeInRow * -1;
        }
        if(currentState.row === 0 && !currentState.goingDown){
            currentState.goingDown = true;
            changeInRow = changeInRow * -1;
        }
        currentState.row = currentState.row + changeInRow;
    }
    
    for(let k = 0; k < rowsOfStrings.length; k++){
        answer = answer.concat(rowsOfStrings[k]);
    }
    return answer;
}