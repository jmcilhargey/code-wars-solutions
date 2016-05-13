function validate(n){
  
  var numArray = n.toString().split("");
  
  for (var i = numArray.length - 2; i >= 0; i = i - 2) {
    numArray[i] *= 2;
    if (numArray[i] > 9) {
      numArray[i] = numArray[i] - 9;
    }
  }
  
  console.log(numArray.toString());
  
  var totalSum = 0;
  
  for (var j = 0; j < numArray.length; j++) {
    totalSum += parseInt(numArray[j]);
  }
  
  return totalSum % 10 === 0;
}