function solution(roman){
  
  var romanValues = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  };
  
  var totalNum = 0;
  
  for (var i = roman.length - 1; i >= 0; i--) {
    var currentNum = romanValues[roman.charAt(i)];
    var nextNum = romanValues[roman.charAt(i - 1)];
    
    
    if (nextNum < currentNum) {
      totalNum += currentNum - nextNum;
      i--;
    } else {

      totalNum += currentNum;
    }
  }
  return totalNum;
}