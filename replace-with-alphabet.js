function alphabetPosition(text) {
  
  var numArr = [];
  var alphabet = "abcdefghijklmnopqrstuvwxyz";
  
  for (var i = 0; i < text.length; i++) {
    var currChar = text.charAt(i).toLowerCase();
    var searchPos = alphabet.indexOf(currChar);
    
    if (searchPos !== -1) {
      numArr.push(searchPos + 1);
    }
  }
  return numArr.join(" ");
}