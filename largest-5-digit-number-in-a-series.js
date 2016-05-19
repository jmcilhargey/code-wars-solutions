function solution(digits){
  
  if (digits.length <= 5) {
    return +digits;
  }
  
  return Math.max(digits.substr(0, 5), solution(digits.substr(1)));
  
}