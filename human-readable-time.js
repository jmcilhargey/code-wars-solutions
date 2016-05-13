function humanReadable(seconds) {
	
  var hours = Math.floor(seconds / 3600);
  var mins = Math.floor(seconds / 60 % 60);
  var secs = Math.floor(seconds % 60);
  
  if (secs < 9) secs = "0" + secs;
  if (mins < 9) mins = "0" + mins;
  if (hours < 9) hours = "0" + hours;
  
  return hours + ":" + mins + ":" + secs;
  
}