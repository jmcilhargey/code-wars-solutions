var bowlingScore = function(rolls) {
  var totalScore = 0;
  
  for (var i = 0; i < rolls.length; i++) {
    if (rolls[i] + rolls[i + 1] == 10) {
      totalScore += 10 + rolls[i + 2];
      i++;
    } else if (rolls[i] == 10 && i < rolls.length - 2) {
      totalScore += 10 + rolls[i + 1] + rolls[i + 2];
    } else if (rolls[i - 1] + rolls[i - 2] != 10 && rolls[i - 1] !=10) {
      totalScore += rolls[i];
    }
  }
  
  return totalScore;
};