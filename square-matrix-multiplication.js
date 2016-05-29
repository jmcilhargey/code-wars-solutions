function matrixMultiplication(a, b) {
  
  var n = a.length;
  var product = [];
  
  for (var i = 0; i < n; i++) {
    var row = [];
    
    for (var j = 0; j < n; j++) {
      var sum = 0;

      for (var k = 0; k < n; k++) {
        sum += a[i][k] * b[k][j];
      }
      row.push(sum);
    }
    product.push(row);
  }
  return product;
}