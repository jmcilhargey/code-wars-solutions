var justify = function(str, len) {
  
  var strArray = str.split(" ");
  var letterCount = 0;
  var startIndex = 0;
  var justifiedStr = "";
  var totalSpaces, spacePerWord, remainderSpaces, wordsForLine;
  
  strArray.forEach(function(word, index) {
    
    letterCount += word.length + 1;
    
    if (letterCount >= len + 1) {
      
      wordsForLine = strArray.slice(startIndex, index);
      totalSpaces = len - wordsForLine.join("").length;
      console.log(wordsForLine.join(""));
      
      while (totalSpaces > 0) {
        
        for (var i = 0; i < wordsForLine.length - 1 && totalSpaces; i++) {
          wordsForLine[i] += " ";
          totalSpaces--;
        }
      }
      justifiedStr += wordsForLine.join("") + "\n";
      
      startIndex = index;
      letterCount = word.length + 1;
    }
  });
  return justifiedStr;
};