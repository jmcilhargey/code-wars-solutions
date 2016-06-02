function insideOrOutsideNum(num, oper) {
  if (typeof oper === "undefined") {
    return num;
  } else {
    return oper(num);
  }
}

function zero(oper) {
  return insideOrOutsideNum(0, oper);
}
function one(oper) {
  return insideOrOutsideNum(1, oper);
}
function two(oper) {
  return insideOrOutsideNum(2, oper);
}
function three(oper) {
  return insideOrOutsideNum(3, oper);
}
function four(oper) {
  return insideOrOutsideNum(4, oper);
}
function five(oper) {
  return insideOrOutsideNum(5, oper);
}
function six(oper) {
  return insideOrOutsideNum(6, oper);
}
function seven(oper) {
  return insideOrOutsideNum(7, oper);
}
function eight(oper) {
  return insideOrOutsideNum(8, oper);
}
function nine(oper) {
  return insideOrOutsideNum(9, oper);
}

function plus(num1) {
  return function(num2) {
    return num2 + num1;
  };
}
function minus(num1) {
  return function(num2) {
    return num2 - num1;
  };
}
function times(num1) {
  return function(num2) {
    return num2 * num1;
  };
}
function dividedBy(num1) {
  return function(num2) {
    return num2 / num1;
  };
}