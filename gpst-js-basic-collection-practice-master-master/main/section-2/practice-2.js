'use strict';

module.exports = function countSameElements(collection) {
  var result = new Array()
result.push({'key':'a','count':1});
console.log(result);
        for(var i = 1;i < collection.length;i++){
		if(collection[i].length > 1) {
			if(collection[i].match('-') != null) {
				var spit = collection[i].split("-");
				result.push({'key':spit[0],'count':parseInt(spit[1])});
				
			}
      else {
		console.log("未匹配！");
			return -1;
			}
			
		} 
    else {
         if(collection[i] != collection[i-1])
          result.push({'key':collection[i],'count':0});
        	for(var j = 0;j < result.length;j++)
          {
          	if(collection[i] == result[j].key)
                  {
                     	result[j].count++;
                               break;
                  }
          }
		      }
        }
console.log(result);
        return result;
}
