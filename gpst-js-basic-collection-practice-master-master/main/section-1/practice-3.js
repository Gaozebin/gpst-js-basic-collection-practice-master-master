'use strict';

module.exports = function collectSameElements(collectionA, objectB) {
         var result = new(); 
            for(var i=0;i<collectionA.length;i++) 
              { 
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
