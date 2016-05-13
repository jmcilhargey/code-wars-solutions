function calc(expr) {
  
  if (expr === "") {
    return 0;
  }
  
  var numArray = expr.split(" ");
  var calcArray = [];
  
  for (var i = 0; i < numArray.length; i++) {
    if (!isNaN(numArray[i])) {
      calcArray.push(parseFloat(numArray[i]));  
    } else if (numArray[i] === "+") {
      calcArray.push(calcArray.pop() + calcArray.pop());
    } else if (numArray[i] === "-") {
      calcArray.push(- calcArray.pop() + calcArray.pop());
    } else if (numArray[i] === "/") {
      calcArray.push(1 / calcArray.pop() * calcArray.pop());
    } else if (numArray[i] === "*") {
      calcArray.push(calcArray.pop() * calcArray.pop());
    }
  }
  
  return calcArray[calcArray.length - 1];
}