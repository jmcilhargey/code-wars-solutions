function whoIsNext(names, r) {
  
  var peopleInLine = names.length;
  var numOfRounds = 0;

  while (r > peopleInLine) {
  
    r -= peopleInLine;
    peopleInLine *= 2;
    numOfRounds++;
    
  }
  
  return names[Math.ceil(r / (peopleInLine / names.length)) - 1];
}