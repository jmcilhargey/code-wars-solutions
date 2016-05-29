var nbrOfLaps = function (x, y) {
  
  var minNum = Math.min(x, y);
  var runnersMeet = false;
  var currCount = minNum;
  
  while (!runnersMeet) {
    
    if (currCount % x === 0 && currCount % y === 0) {

      return [currCount / x, currCount / y];
    }
    currCount += minNum;
  }
};