function getAllPrimeFactors(n) {

  var primeArr = [];
  
  if (n === 1) {
    return [1];
  }
  
  for (var i = 2; i <= n; i++) {
    if (n % i === 0) {
      primeArr.push(i);
      n /= i;
      i = 1;
    }
  }
  return primeArr;  
}

function getUniquePrimeFactorsWithCount(n) {
  
  var primeArr = getAllPrimeFactors(n);
  var uniqueArr = [[],[]];
  var index = -1;
 
  for (var i = 0; i < primeArr.length; i++) {
    if (primeArr[i] === uniqueArr[0][index]) {
      uniqueArr[1][index] += 1;
    } else {
      index++;
      uniqueArr[0][index] = primeArr[i];
      uniqueArr[1][index] = 1;
    }
  }
  return uniqueArr;
}

function getUniquePrimeFactorsWithProducts(n) { 
  
  var primeArr = getUniquePrimeFactorsWithCount(n);
  var factorsArr = [];
  
  for (var i = 0; i < primeArr[0].length; i++) {
    factorsArr.push(Math.pow(primeArr[0][i], primeArr[1][i]));
  }
  return factorsArr;
}