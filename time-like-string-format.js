function solution(hour) {

  var hourStr = hour.toString();  
  
  if (hourStr.length < 3 || hourStr.length > 4 ) {
    throw new Error("Less than 3 digits!");
  }
  
  return hourStr.slice(0, -2) + ":" + hourStr.slice(-2);
}