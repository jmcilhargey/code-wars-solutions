function titleCase(title, minorWords) {

  var newStr = "";
  
  if (!title) return newStr;
  
  var wordArr = title.toLowerCase().split(" ");
  
  if (minorWords) {
    var minorArr = minorWords.toLowerCase().split(" ");
  } else {
    var minorArr = [];
  }
  
  return wordArr.map(function(value, index) {
  
    if (minorArr.indexOf(value) === -1 || index === 0) {
      return value.charAt(0).toUpperCase() + value.substr(1).toLowerCase();
    } else {
      return value;
    }
    
  }).join(" ");
  
}