function pascalsTriangle(n) {

  var triArr = [1];
  var line = 1;
  
  while (n > line) {
    
    line++;
    
    triArr.push(1);
    
    for (var i = 0; i < line - 2; i++) {
      triArr.push(triArr[triArr.length - line] + triArr[triArr.length - line + 1]);
    }
    
    triArr.push(1);

  }

  return triArr;
}