var Converter = {
  toAscii: function (hex) {
        var index = 0;
    var message = "";
    
    while (index < hex.length) {
      message += String.fromCharCode(parseInt(hex.substr(index, 2), 16));
      index += 2;
    }
    return message;
  },
  toHex: function (ascii) {
    var hexEncode = "";
    
    for (var i = 0; i < ascii.length; i++) {
      hexEncode += ascii.charCodeAt(i).toString(16);
    }
    return hexEncode;
  }
}