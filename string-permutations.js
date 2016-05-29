function permutations(str) {
  
  var permutationMap = {};
  
  function getStrPermutations(str, perm) {
  
    if (!str.length) {
      if (!permutationMap[perm]) {
        permutationMap[perm] = true;
      }
    }
  
    var remainingStr;
    var permFragment;
  
    for (var i = 0; i < str.length; i++) {
      remainingStr = str.substr(0, i) + str.substr(i + 1);
      permFragment = perm + str[i];
      getStrPermutations(remainingStr, permFragment);
    }
  }
  
  getStrPermutations(str, "");
  
  return Object.keys(permutationMap);
}