'use strict';

module.exports = function collectSameElements(collectionA, objectB) {
         var result = new Array(); 
         var colloctionC=collectinB.value()
         var c=collectionB.value.toString(); 
            for(var i=0;i<collectionA.length;i++) 
              { 
                if(c.indexOf(collectionA[i].toString())>-1) 
                  { 
                  for(var j=0;j<collectionB.value.length;j++) 
                  { 
                      if(collectionA[i]==collectionB.value[j])  
                      { 
                         result.push(collectionA[i]); 
                           break; 
                      } 
                  } 
               }       
            } 
              return result; 
}
