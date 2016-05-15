function list(names) {
  
  var nameStr = "";
  
  if (names.length === 0) return nameStr;

  if (names.length === 1) return nameStr += names[0].name;
  

  
  for (var i = 0; i < names.length - 2; i++) {
    nameStr += names[i].name + ", ";
  }
  
  nameStr += names[names.length - 2].name + " & " + names[names.length - 1].name;
  
  return nameStr;
}