var longestPalindrome = function(s){
  
  var currSize = s.length;
  var frame = 1;
  var testStr;
  
  while (currSize > 0) {
    
    for (var i = 0; i < frame; i++) {
      
      testStr = s.substr(i, currSize);

      if (isPalindrome(testStr)) {
        return testStr;
      }
    }
    
    frame++;
    currSize--;
  }
};

function isPalindrome(str) {
  
  if (str.length === 1 || str.length === 0) {
    return true;
  }
  
  if (str.charAt(0) !== str.charAt(str.length - 1)) {
    return false;
  }
  
  return isPalindrome(str.substr(1, str.length -  2));
}