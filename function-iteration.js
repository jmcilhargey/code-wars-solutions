var createIterator = function (func, n) {

  return function (value) {
    for (var i = 0; i < n; i++) {
      value = func(value);
    }
    return value;
  }
};