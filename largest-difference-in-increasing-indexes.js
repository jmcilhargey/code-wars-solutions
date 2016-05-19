var largestDifference = function(data) {

  var maxDistance = 0;

  for (var startIndex = 0; startIndex < data.length - maxDistance; startIndex++) {
  
    var endIndex = data.length - 1;
    
    while (endIndex > startIndex) {
      
      if (data[startIndex] <= data[endIndex] && maxDistance < endIndex - startIndex) {
        maxDistance = endIndex - startIndex;
      }
      endIndex--;
    }
  }
  return maxDistance;
};