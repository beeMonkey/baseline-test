'use strict';

function collectSameElements(collectionA, objectB) {
  var result= new Array();
  console.log(collectionA);
  for(var i=0;i<collectionA.length;i++){
    for(var k=0;k<objectB.value.length;k++){
      if(collectionA[i].key==objectB.value[k]){
        result.push(collectionA[i].key);
      }
    }
  }
  return result;
}
