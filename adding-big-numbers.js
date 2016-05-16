function add(a, b) {
  
  var arrA = a.split("").reverse();
  var arrB = b.split("").reverse();
  
  var addToIndex = Math.max(arrA.length, arrB.length);
  var addTwoNums;
  var getRemainder;
  var carryTheOne = 0;
  var totalArr = [];
  
  for (var i = 0; i < addToIndex; i++) {
    
    addTwoNums = Number(arrA[i]) + Number(arrB[i]) + carryTheOne;
    
    if (!arrA[i]) {
      getRemainder = Number(arrB[i]) + carryTheOne
      totalArr.push(getRemainder % 10);
      getRemainder % 10 === 0 ? carryTheOne = 1 : carryTheOne = 0;
      
    } else if (!arrB[i]) {
      getRemainder = Number(arrA[i]) + carryTheOne
      totalArr.push(getRemainder % 10);
      getRemainder % 10 === 0 ? carryTheOne = 1 : carryTheOne = 0;
      
    } else if (addTwoNums > 9) {
      totalArr.push(addTwoNums % 10);
      carryTheOne = 1;  
      
    } else {
      totalArr.push(addTwoNums);
      carryTheOne = 0;      
    }

  }
  if (carryTheOne === 1) totalArr.push(1);
  
  return totalArr.reverse().join("");
}