function zeros(n) {

  if (n < 0) {
    throw new Error("Can't calculate negative factorial");
  }

  var numOfDivisions = 0;
  var totalZeros = 0;
  
  while (n > 0) {
    
    n = Math.floor(n / 5);
    totalZeros += n;
  }
  return totalZeros;
}