var User = function() {
  
  var levels = [-8, -7, -6, -5, -4, -3, -2, -1, 1, 2, 3, 4, 5, 6, 7, 8];
  var progress = { min: 0, max: 100 };
  var rank = { min: levels[0], max: levels[levels.length - 1] };
  
  this.progress = 0;
  this.rank = rank.min;
  
  this.incProgress = function(difficulty) {
    
    if (levels.indexOf(difficulty) < 0) {
      throw new Error("Outside of range!");
    }
    
    var difference = this.getDifference(this.rank, difficulty);
    var score;
    
    if (difference === 0) {
      score = 3;
    } else if (difference === -1) {
      score = 1;
    } else if (difference > 0) {
      score = Math.pow(difference, 2) * 10;
    } else {
      score = 0;
    }

    this.progress += score;
    
    if (this.progress >= progress.max) {
      this.incRank();
    }
  };
  
  this.getDifference = function(rank, difficulty) {
    return levels.indexOf(difficulty) - levels.indexOf(rank);
  };
  
  this.incRank = function() {
      var rankUp = Math.floor(this.progress / progress.max);
      this.rank = levels[levels.indexOf(this.rank) + rankUp];
      this.rank === rank.max ? this.progress = 0 : this.progress %= 100;
  };
};