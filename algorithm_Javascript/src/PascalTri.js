/*Given numRows, generate the first numRows of Pascal's triangle.

For example, given numRows = 5,
Return

[
     [1],
    [1,1],
   [1,2,1],
  [1,3,3,1],
 [1,4,6,4,1]
]
*/
export function generatePasTri1(numRows){
    if(numRows == 0){
        return [];
    }
    let answer = [[1]];
    if(numRows == 1){
        return answer;
    }
    let row = [];
    for(let currentRow = 1; currentRow < numRows; currentRow++){
        row = [];
        for(let newRowIndex = 0; newRowIndex <= answer[currentRow-1].length; newRowIndex++){
            if(newRowIndex == 0 || newRowIndex == answer[currentRow-1].length){
                row.push(1);
            }
            else{
                row.push(answer[currentRow-1][newRowIndex-1] + answer[currentRow -1][newRowIndex]);
            }
        }
        answer.push(row);        
    }
    return answer;
}