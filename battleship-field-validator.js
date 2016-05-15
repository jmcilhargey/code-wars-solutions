function validateBattlefield(field) {
  
  var ships = {
    battleship: 1,
    cruiser: 2,
    destroyer: 3,
    submarine: 4
  };
  
  var spaces = 0;
  var incRow = 1;
  var incCol = 1;
  var shipsLeft = true; 
  var validPos = true;
  
  for (var row = 0; row < field.length - 1; row++) {
    
    for (var col = 0; col < field.length - 1 && validPos; col++) {
      
      if (field[row][col] === 1) {
        
        spaces = 1;
        field[row][col] = 0;
        
        if (row > 1 && col > 1 && (field[row + incRow][col + incCol] === 1 || field[row - incRow][col - incCol] === 1  || field[row - incRow][col + incCol] === 1)  || field[row + incRow][col - incCol] === 1) {
            validPos = false;
        }
        
        
        while (field[row + incRow][col] === 1) {
          
          spaces += 1;
          field[row + incRow][col] = 0;
          incRow++;
        }
        incRow = 1;
        
        while (field[row][col + incCol] === 1) {
          
          
          spaces += 1;
          field[row][col + incCol] = 0;
          incCol++;
        }
        incCol = 1;
      }
      
      switch (spaces) {
          
        case 1: ships.submarine -= 1;
        break;
        case 2: ships.destroyer -= 1;
        break;
        case 3: ships.cruiser -= 1;
        break;
        case 4: ships.battleship -= 1;
        break;
      }
      spaces = 0;
    }
  }
  

  
  for (var ship in ships) {
    if (ships[ship] !== 0) {
      return false;
    }
  }
  return shipsLeft;
}