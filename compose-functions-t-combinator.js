var compose = function() {

  var value = arguments[0];
  
  for (var i = 1; i < arguments.length; i++) {
    value = arguments[i](value);
  }
  return value;
};