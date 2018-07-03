'use strict';

function collectSameElements(collectionA, collectionB) {
  console.log(collectionB[0][1])
  console.log(collectionA[1])
  var result = new Array();
  for(var i=0;i<collectionA.length;i++){
    for(var k=0;k<collectionB[0].length;k++){
      if(collectionA[i]==collectionB[0][k]){
        result.push(collectionA[i]);
      }
    }
  }
  return result;
}
