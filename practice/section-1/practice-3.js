'use strict';

function collectSameElements(collectionA, objectB) {
  
  console.log(objectB.value);
  var result= new Array();
  for(var i=0;i<collectionA.length;i++){
    for(var k=0;k<objectB.value.length;k++){
      if(collectionA[i]==objectB.value[k]){
        result.push(collectionA[i]);
      }
    }
  }
  return result;
}
