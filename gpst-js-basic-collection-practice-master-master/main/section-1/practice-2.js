'use strict';

module.exports = function collectSameElements(collectionA, collectionB) {
 var result = new Array(); 
5         var c=collectionB[0][0].toString(); 
6        for(var i=0;i<collectionA.length;i++) 
7              { 
8                if(c.indexOf(collectionA[i].toString())>-1) 
9                { 
10                  for(var j=0;j<collectionB[0][0].length;j++) 
11                  { 
12                      if(collectionA[i]==collectionB[0][j])  
13                      { 
14                         result.push(collectionA[i]); 
15                         break; 
16                      } 
17                  } 
18               }       
19              } 
20              return result; 
;
}
