function isValidCoordinates(coordinates) {
  
  var coordArr = coordinates.split(", ");

  for (var i = 0; i < coordArr.length; i++) {
    if (isNaN(coordArr[i]) || coordArr[i].match(/[A-Z]/gi)) {
      return false;
    }
    coordArr[i] = parseFloat(coordArr[i]);
  }

  if (coordArr[0] > 90 || coordArr[0] < -90 || coordArr[1] > 180 || coordArr[1] < -180) {
    return false;
  }
  
  return true;
}