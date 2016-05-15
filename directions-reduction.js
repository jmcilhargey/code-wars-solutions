function dirReduc(arr){
  
  var dirObj = {
    "NORTH": "SOUTH",
    "SOUTH": "NORTH",
    "EAST": "WEST",
    "WEST": "EAST"
  };
  
  var reduceDir = false;
  
  do {
    
    reduceDir = false;
    
    for (var i = 0; i < arr.length; i++) {
      if (dirObj[arr[i]] === arr[i + 1]) {
        arr.splice(i, 2);
        reduceDir = true;
      }
    }
  } while (reduceDir);

  return arr;
}