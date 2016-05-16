function sierpinski(n) {
  
  return (sierpinskiArray(n).join('\n'));
}

function sierpinskiArray(n) {
  
  var triangle = []; 
  var space;
  var size;

  if (n === 0) {
    triangle[0] = "L";
    return triangle;
    
  } else if (n > 0) {
    
    triangle = sierpinskiArray(n - 1);
    size = triangle.length;

    for(var i = 0; i < size; i++) {
      space = " ";
      
      for(var j = 0; j < size - 1 - i; j++) {
        space += "  ";
      }

      triangle[i+size] = triangle[i] + space + triangle[i];
    }
    return triangle;
  }
}