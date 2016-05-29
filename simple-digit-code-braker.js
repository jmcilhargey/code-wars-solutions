var guessArr = [5, 5, 5];
var maxBound = [10, 10, 10];
var minBound = [-1, -1, -1];

function tryCode(indications) {
  
  if (indications) {
    for (var i = 0; i < indications.length; i++) {
      
      if (indications[i] > 0) {
        minBound[i] = guessArr[i];
        guessArr[i] = Math.floor((maxBound[i] + minBound[i]) / 2);
      }
      if (indications[i] < 0) {
        maxBound[i] = guessArr[i]
        guessArr[i] = Math.floor((minBound[i] + maxBound[i]) / 2);
      }    
    }
  }
  return guessArr;
}