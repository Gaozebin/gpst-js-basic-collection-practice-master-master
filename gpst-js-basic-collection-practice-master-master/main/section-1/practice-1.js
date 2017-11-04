'use strict';

module.exports = function collectSameElements(collectionA, collectionB) {
        var result = new Array();
        var c=collectionB.toString();
       for(var i=0;i<a.length;i++)
             {
               if(c.indexOf(a[i].toString())>-1)
               {
                 for(var j=0;j<b.length;j++)
                 {
                     if(a[i]==b[j]) 
                     {
                        result.push(a[i]);
                        break;
                     }
                 }
              }      
             }
             return result;
}
