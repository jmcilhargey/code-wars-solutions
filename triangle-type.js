function triangleType(a, b, c) {

  var sideArray = [a, b, c];

  sideArray.sort(function(a, b) {
    return a - b;
  });
  
  if (sideArray[0] + sideArray[1] <= sideArray[2]) {
    return 0;
  }
  
  sideArray.forEach(function(side, index) {
    sideArray[index] = Math.pow(side, 2);
  })
  
  if (sideArray[0] + sideArray[1] > sideArray[2]) {
    return 1;
  } else if (sideArray[0] + sideArray[1] < sideArray[2]) {
    return 3;
  } else if (sideArray[0] + sideArray[1] == sideArray[2]) {
    return 2;
  }
  
  return 0;
}