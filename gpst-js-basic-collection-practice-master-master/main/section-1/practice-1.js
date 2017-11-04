'use strict';

module.exports = function collectSameElements(collectionA, collectionB) {
        var collectionA = ['a', 'e', 'h', 't', 'f', 'c', 'g', 'b', 'd']; 
        var collectionB = ['a', 'd', 'e', 'f']; 
        var result = new Array();
        var c=collectionB.toString();
        for(var i=0 ; i < collectionA.length; i++ )
        { 
          if(c.indexOf(collectionA[i].tosting())>-1) 
          {
           result.push(collectionA[i]);
          } 
         }
  return result;
}
