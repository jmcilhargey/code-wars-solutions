function Dictionary(words) {
  this.words = words;
}

Dictionary.prototype.findMostSimilar = function(term) {
  
  var minDistance = Infinity;
  var mostSimilar;
  
  for (var i = 0; i < this.words.length; i++) {
    var wordDistance = getEditDistance(term, this.words[i]);
    
    if (wordDistance < minDistance) {
      mostSimilar = this.words[i];
      minDistance = wordDistance;
    }
  }
  
  return mostSimilar;
};

var getEditDistance = function(a, b) {
  
  if(a.length === 0) return b.length; 
  if(b.length === 0) return a.length; 

  var matrix = [];

  // increment along the first column of each row
  var i;
  for(i = 0; i <= b.length; i++){
    matrix[i] = [i];
  }

  // increment each column in the first row
  var j;
  for(j = 0; j <= a.length; j++){
    matrix[0][j] = j;
  }

  // Fill in the rest of the matrix
  for(i = 1; i <= b.length; i++){
    for(j = 1; j <= a.length; j++){
      if(b.charAt(i-1) == a.charAt(j-1)){
        matrix[i][j] = matrix[i-1][j-1];
      } else {
        matrix[i][j] = Math.min(matrix[i-1][j-1] + 1, // substitution
                                Math.min(matrix[i][j-1] + 1, // insertion
                                         matrix[i-1][j] + 1)); // deletion
      }
    }
  }

  return matrix[b.length][a.length];
};