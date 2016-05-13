var moveZeros = function (arr) {

  var zeros = 0;
  
  var minusZeros = arr.filter(function(value) {
    if (value === 0) {
      zeros++;
    }
    return value !== 0;
  });
  
  for (var i = 0; i < zeros; i++) {
    minusZeros.push(0);
  }
  
   return minusZeros;
};