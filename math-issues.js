Math.floor = function (number) {
  
  if (!(number % 1)) {
    return number;
  } else {
    var strNum = number.toString();
    return Number(strNum.substr(0, strNum.indexOf(".")));
  }
};

Math.ceil = function (number) {
  
  if (!(number % 1)) {
    return number;
  } else {
    return number > 0 ? Math.floor(number) + 1 : Math.floor(number) - 1;
  }
};

Math.round = function (number) {
  
  if (!(number % 1)) {
    return number;
  } else {
    var strNum = number.toString();
    return Number(strNum.charAt(strNum.indexOf(".") + 1)) >= 5 ? Math.ceil(number) : Math.floor(number);
  }
};