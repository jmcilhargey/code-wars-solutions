function buildParenthesis(open, closed, str) {
  
  if (open === 0 && closed === 0) {
    console.log(str);
  }
  
  if (open > 0) {
    buildParenthesis(open - 1, closed + 1, str + "(");
  }
  if (closed > 0) {
    buildParenthesis(open, closed - 1, str + ")");
  }
}