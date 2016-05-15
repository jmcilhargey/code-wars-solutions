function runoff(voters){
  
  while (voters.length > 1) {
    
    var votes = {};
    
    for (var i = 0; i < voters[0].length; i++) {
      votes[voters[0][i]] = 0;
    }
  
    for (var j = 0; j < voters.length; j++) {
      votes[voters[j][0]] += 1;
    }

    var min = voters.length + 1;
    
    for (var vote in votes) {

      if (votes[vote] > Math.floor(voters.length / 2)) {
        return vote;
      }
      if (votes[vote] < min) { 
        min = vote;
      }
    }

    var search = -1;
    console.log(votes);

    for (var k = 0; k < voters.length; k++) {
          console.log(voters[k]);
      search = voters[k].indexOf(min);
 
      if (search > -1) {
        voters[k].splice(search, 1);
      }
    }
  }
}

voters =[ [ 'e', 'c', 'd', 'b', 'a' ],
[ 'b', 'e', 'a', 'c', 'd' ],
[ 'c', 'e', 'd', 'a', 'b' ],
[ 'a', 'd', 'e', 'b', 'c' ],
[ 'e', 'd', 'c', 'a', 'b' ] ];

console.log(runoff(voters));