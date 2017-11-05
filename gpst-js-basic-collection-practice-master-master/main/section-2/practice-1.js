'use strict';

module.exports = function countSameElements(collection) {
  var result = new Array();
result.push({'key':'a','count':1});
console.log(result);
	for(var i = 1;i < collection.length;i++){
		if(collection[i] != collection[i-1]) 
			result.push({'key':collection[i],'count':0});
		for(var j = 0;j < result.length;j++) {
			if(collection[i] == result[j].key) {
				result[j].count++;
				break;
			} 
		}
	}
	return result;
}
