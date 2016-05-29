/*

// Doesn't work for cases where letters appear in same order on both sub-strings. i.e. -- isMerge("Bananas from Bahamas", "Bahas", "Bananas from am")

function isMerge(str, substr1, substr2) {
  
  if (substr1.length + substr2.length !== str.length) {
    return false;
  }
  
  if (str === "") {
    return true;
  }
  
  var posInSubstr1 = 0;
  var posInSubstr2 = 0;
  var isValid = true;
  
  console.log(str, substr1, substr2);
  
  for (var i = 0; i < str.length & isValid; i++) {
    
    var foundPos1 = searchStr(substr1, str.charAt(i), posInSubstr1);
    var foundPos2 = searchStr(substr2, str.charAt(i), posInSubstr2);
    
    if (foundPos1 === posInSubstr1) {
      posInSubstr1++;
    } else if (foundPos2 === posInSubstr2) {
      posInSubstr2++;
    } else {
      console.log(foundPos1, foundPos2);
      isValid = false;
    }
  }
    return isValid;
}

function searchStr(substr, char, currIndex) {
  return substr.indexOf(char, currIndex);
}

*/

function isMerge(str, substr1, substr2) {
  
  if (str.length !== substr1.length + substr2.length) {
    return false;
  }
  if (str.length === 0) {
    return true;
  }
  
  return (substr1[0] === str[0] && isMerge(str.slice(1), substr1.slice(1), substr2)) ||
  (substr2[0] === str[0] && isMerge(str.slice(1), substr1, substr2.slice(1)));
  
}