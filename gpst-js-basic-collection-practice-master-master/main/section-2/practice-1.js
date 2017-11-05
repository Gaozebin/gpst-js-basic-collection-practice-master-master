'use strict';

module.exports = function countSameElements(collection) {
  var result = new Array();
	console.log(collection);
col.push({'key':'a','count':1});
console.log(col);
	for(var i = 1;i < collection.length;i++){
		if(collection[i] != collection[i-1]) 
			col.push({'key':collection[i],'count':0});
		for(var j = 0;j < col.length;j++) {
			if(collection[i] == col[j].key) {
				col[j].count++;
				break;
			} 
		}
	}
	return col;
}
