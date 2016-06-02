function isValidIP(str) {
  
  var ipArray = str.split(".");
  
  if (ipArray.length !== 4) {
    return false;
  }
  
  for (var i = 0; i < ipArray.length; i++) {
    var num = Number(ipArray[i]); 
    
    if (num < 0 || num > 255 || isNaN(num) || /\s/g.test(ipArray[i])) {
      return false;
    }
  }
  return true;
}