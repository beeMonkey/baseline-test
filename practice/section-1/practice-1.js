'use strict';

function collectSameElements(collectionA, collectionB) {
  var result = new Array();
  var j=0;
  for(var i=0;i<collectionA.length;i++){
    for(var k=0;k<collectionB.length;k++){
      if(collectionA[i]==collectionB[k]){
        result[j]=collectionA[i];
        ++j;
      }
    }
  }
  return result;
}
