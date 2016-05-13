function digitize(n) {
  
  var digitArr = [];
  
  while (n > 0) {
    digitArr.push(n % 10);
    n = Math.floor(n / 10);
  }
  return digitArr;
}