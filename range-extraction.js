function solution(list){
  
  var holdingArr = [];
  var resultArr = [];
  
  for (var i = 0; i < list.length; i++) {
    if (list[i] + 1 === list[i + 1]) {

      holdingArr.push(list[i]);
    } else {

      holdingArr.push(list[i]);

      if (holdingArr.length >= 3) {
        
        resultArr.push(holdingArr[0] + "-" + holdingArr[holdingArr.length - 1]);
        holdingArr = [];
      }

      while (holdingArr.length > 0) {
        resultArr.push(holdingArr.shift());
      }
    }
  }
  return resultArr.join(",");
}