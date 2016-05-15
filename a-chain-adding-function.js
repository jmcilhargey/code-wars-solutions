var add = function (n) {
  
  var totalSum = n;
  var innerVal = function(m) {
    totalSum += m;
    return innerVal;
  };
  innerVal.valueOf = function() {
    return totalSum;
  };
  return innerVal;
  
};