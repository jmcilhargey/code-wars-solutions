function getPINs(observed) {
  
  var keyArr = { 
    "0": function() { return ["8", "0"]; }, 
    "1": function() { return ["1", "2", "4"]; }, 
    "2": function() { return ["1", "2", "3", "5"]; }, 
    "3": function() { return ["2", "3", "6"]; }, 
    "4": function() { return ["1", "4", "5", "7"]; }, 
    "5": function() { return ["2", "4", "5", "6", "8"]; }, 
    "6": function() { return ["3", "5", "6", "9"]; }, 
    "7": function() { return ["4", "7", "8"]; }, 
    "8": function() { return ["5", "7", "8", "9", "0"]; }, 
    "9": function() { return ["6", "8", "9"]; } 
  };
  
  var totalComb = observed.split("").map(function(curr) {
    return keyArr[curr]();
  });
  
  var addValue = [];
  var buildArr = [];
  
  return totalComb.reduce(function(prevArr, currArr) {
    
    buildArr = [];
    addValue = [];
    
    while (prevArr.length > 0) {
      
      addValue = prevArr.pop();
      
      currArr.map(function(curr) {
        buildArr.push(addValue + curr);
      });
    }
    return buildArr.sort();
  });
  
}