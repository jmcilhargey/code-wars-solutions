function validSolution(board){
  
  var rowSum = 0;
  var colSum = 0;
  var sqArea = 3;
  var sq1Sum = 0;
  var sq2Sum = 0;
  var sq3Sum = 0;
  var rowNum = 1;
  
  for (var i = 0; i < board.length; i++) {
    for (var j = 0; j < board.length; j++) {
      
      if (board[i][j] === 0 || board[j][i] === 0) {
        return false;
      }
      rowSum += board[i][j];
      colSum += board[j][i];
      
      if (j < 3) {
        sq1Sum += board[i][j];
      } else if (j < 6) {
        sq2Sum += board[i][j];
      } else {
        sq3Sum += board[i][j];
      }
    }
    if (rowSum !== 45 || colSum !== 45) {
      return false;
    }
    if (rowNum === 3) {
      if (sq1Sum !== 45 || sq2Sum !== 45 || sq3Sum !== 45) {
        return false;
      }
      sq1Sum = 0;
      sq2Sum = 0;
      sq3Sum = 0;
      rowNum = 0;
    }
    rowNum++;
    rowSum = 0;
    colSum = 0;
  }
  return true;
}
