var countChange = function countChange(money, coins) {
  
  if (money === 0) {

    return 1;
  }
  if (money < 0) {
    return 0;
  }
  
  if (!coins.length) {
    return 0;
  }
  
  var currCoin = coins[0];
  var remainingCoins = coins.slice(1);
  
  var numOfPossibleSums = 0;
  
  while (money >= 0) {
    numOfPossibleSums += countChange(money, remainingCoins);
    money -= currCoin;
  }
  return numOfPossibleSums;
};