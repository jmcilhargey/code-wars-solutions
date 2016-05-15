function findNb(m) {
    
    var currVol = 0;
    var cubeNum = 0;
    
    while (currVol < m) {
    	
     cubeNum++;    
     currVol += Math.pow(cubeNum, 3);

    }
    
    return currVol === m ? cubeNum : -1;
}

