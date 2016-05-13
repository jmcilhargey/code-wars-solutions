function isValidWalk(walk) {
  if (walk.length < 10 || walk.length > 10) {
    return false;
  }
  
  var vertical = 0;
  var horizontal = 0;
  
  walk.forEach(function(step) {
    if (step == "n") {
      vertical += 1;
    } else if (step == "s") {
      vertical -= 1;
    } else if (step == "e") {
      horizontal += 1;
    } else if (step == "w") {
      horizontal -= 1;
    }
  });
  
  return vertical == 0 && horizontal == 0;
}