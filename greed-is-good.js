function score(dice) {
  
  var diceThrows = {};
  var totalScore = 0;
  
  for (var i = 0; i < dice.length; i++) {
    
    if (diceThrows.hasOwnProperty(dice[i])) {
      diceThrows[dice[i]] += 1;
    } else {
      diceThrows[dice[i]] = 1;
    }
  }
  
  console.log(diceThrows);
  
  for (var value in diceThrows) {
    if (diceThrows[value] >= 3) {
      diceThrows[value] -= 3;
      console.log(value);
      switch (value) {
        case "1": totalScore += 1000;
        break;
        case "6": totalScore += 600;
        break;
        case "5": totalScore += 500;
        break;
        case "4": totalScore += 400;
        break;
        case "3": totalScore += 300;
        break;
        case "2": totalScore += 200;
        break;        
      }
    }
    if (value === "1" && diceThrows[value] >= 1) {
      totalScore += diceThrows[value] * 100;
    }
    if (value === "5" && diceThrows[value] >= 1) {
      totalScore += diceThrows[value] * 50;
    }
  }
  return totalScore;
}