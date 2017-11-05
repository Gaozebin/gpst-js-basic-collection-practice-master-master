'use strict';

module.exports = function countSameElements(collection) {
  var A = [];
	 var B = [];
     for(var i = 0; i < collection.length;)
     {
         var count = 0;
         var map = {};
         for(var j = i; j < collection.length; j++)
         {
             if (collection[i] == collection[j])
             {
                 count++;
             }
         }
         if(collection[i].indexOf('-') > 0){
             map['key'] = collection[i].split("-")[0];
             map['count'] = parseInt(collection[i].split("-")[1]);
                        A.push(map);
             i ++;
             continue;
         } else if(collection[i].indexOf('[') > 0){
             map['key'] = collection[i].split("[")[0];
             map['count'] = parseInt(collection[i].split("[")[1]);
                        A.push(map);
             i ++;
             continue;
         } else if(collection[i].indexOf(':') > 0){
	         map['key'] = collection[i].split(":")[0];
	         map['count'] = parseInt(collection[i].split(":")[1]);
	                      A.push(map);
	         i ++;
	         continue;
         }
         map["key"] = collection [i];
         map["count"] = count;
                        A.push(map);
         i += count;
     }
     
     for(var i = 0;i < A.length; ){
         var count = 0;
         var count1=0;
         var arr = {};
         for(var j = i; j < A.length; j++)
         {
             if (A[i]['key'] == A[j]['key'])
             {
                 count++;
                 count1 += A[j]['count'];
             }
         }
         arr["name"] = A[i]['key'];
         arr["summary"] = count1;
         B.push(arr);
         i += count;
     }
     return B;

}

