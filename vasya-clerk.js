function tickets(peopleInLine) {
  
  var changeDrawer = {
    "25": 0,
    "50": 0,
    "100": 0
  };
  
  for (var i = 0; i < peopleInLine.length; i++) {
    var payment = peopleInLine[i];
    
    switch(payment) {
      case 25: 
        changeDrawer["25"] += 1;
        break;
      case 50:
        if (changeDrawer["25"] <= 0) {
          return "NO";
        }
        changeDrawer["25"] -= 1;
        changeDrawer["50"] += 1;
        break;
      case 100:
        changeDrawer["50"] >= 1 ? changeDrawer["50"] -= 1 : changeDrawer["25"] -= 2;
        changeDrawer["25"] -= 1;
        if (changeDrawer["25"] < 0 || changeDrawer["50"] < 0) {
          return "NO";
        }
        break;
    }
  }
  return "YES";
}