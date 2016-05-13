function pickPeaks(arr) {
  
  var peaksObj = {
    pos: [],
    peaks: []
  };
  
  var currVal = arr[0];
  var nextVal = arr[1];
  var newMax, newPos;
  var peak;
  
  for (var i = 1; i < arr.length; i++) {
    
    if (nextVal > currVal) {
      peak = true;
      newMax = nextVal;
      newPos = i;
    }
    
    if (nextVal < currVal && peak) {
      peaksObj.pos.push(newPos);
      peaksObj.peaks.push(newMax);
      peak = false;
    }
    currVal = arr[i];
    nextVal = arr[i + 1];
  }
  
  return peaksObj;
}