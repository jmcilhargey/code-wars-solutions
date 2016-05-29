var validBraces = function(braces){

  var bracesKey = {
    "(": ")",
    "[": "]",
    "{": "}"
  };
  
  var bracesStack = [];
  
  for (var i = 0; i < braces.length; i++) {
    
    if (bracesKey.hasOwnProperty(braces.charAt(i))) {
      bracesStack.push(braces.charAt(i));
    } else {
      if (bracesKey[bracesStack.pop()] !== braces.charAt(i)) {
          return false;
      }
    }
  }
  return !bracesStack.length;
};