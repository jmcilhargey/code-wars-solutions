var Vector = function(components) {
  
  this.values = components;  
};


Vector.prototype.add = function(vect) {
  
  if (vect.values.length !== this.values.length) {
    throw new Error("Arrays must be same length!");
  }
  
  var newVector = new Vector(this.values);
  
  for (var i = 0; i < this.values.length; i++) {
    newVector.values[i] += vect.values[i];
  }
  return newVector;
};

Vector.prototype.subtract = function(vect) {
  
  if (vect.values.length !== this.values.length) {
    throw new Error("Arrays must be same length!");
  }
  
  var newVector = new Vector(this.values);
  
  for (var i = 0; i < this.values.length; i++) {
    newVector.values[i] -= vect.values[i];
  }
  return newVector;
};

Vector.prototype.dot = function(vect) {
  
  if (vect.values.length !== this.values.length) {
    throw new Error("Arrays must be same length!");
  }
  
  var totalSum = 0;
  
  for (var i = 0; i < this.values.length; i++) {
    totalSum += this.values[i] * vect.values[i];
  }
  return totalSum;
};

Vector.prototype.norm = function() {
  
  var squareSum = 0;
  
  for (var i = 0; i < this.values.length; i++) {
    squareSum += Math.pow(this.values[i], 2);
  }
  return Math.sqrt(squareSum);
};

Vector.prototype.equals = function(vect) {
  
  if (vect.values.length !== this.values.length) {
    throw new Error("Arrays must be same length!");
  }
  for (var i = 0; i < this.values.length; i++) {
    if (this.values[i] !== vect.values[i]) {
      return false;
    }
  }
  return true;
};

Vector.prototype.toString = function() {
  return "(" + this.values.join(",") + ")";
};