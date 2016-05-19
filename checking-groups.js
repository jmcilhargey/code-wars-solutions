 function groupCheck(s){
   
   var bracketObj = {
     "(": ")",
     "{": "}",
     "[": "]"
   };
   
   var bracketArr = [];
   var currentChar;
   
   for (var i = 0; i < s.length; i++) {
     currentChar = s.charAt(i);
     
     if (currentChar in bracketObj) {
       bracketArr.push(currentChar);
     } else {
       if (bracketObj[bracketArr.pop()] !== currentChar) {
         return false;
       }
     }
   }
   return bracketArr.length === 0;
 }