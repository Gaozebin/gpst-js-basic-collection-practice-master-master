'use strict';
module.exports = function countSameElements(collection) {
  var col = new Array();
        console.log(collection);
        for(var i = 1;i < collection.length;i++){
                if(collection[i].length > 1) {
			if(collection[i].indexOf("[") != -1) {
				collection[i] = collection[i].replace("[",'-');
				collection[i] = collection[i].replace("]",'');
			}
                       if(collection[i].match('-') != null) {
                                var spit = collection[i].split("-");
				   col.push({'name':spit[0],'count':parseInt(spit[1])});
				collection[i] = spit[0];
                        }

                         else if(collection[i].match(':') != null) {
				var spit = collection[i].split(":");
                                col.push({'name':spit[0],'count':parseInt(spit[1])});
				collection[i] = spit[0];
				} else if(collection[i].match(':') != null) {
                                	var spit = collection[i].split(":");
                                	col.push({'name':spit[0],'count':parseInt(spit[1])});
					collection[i] = spit[0];
                                	}
					else {
                                	return -1;
                        		}

                } else {console.log(collection[i]+"down")
                         if(collection[i] != collection[i-1]) {
                                 col.push({'name':collection[i],'count':0});
				console.log("!!!!!!!"+collection[i-1]);
}
                        for(var j = 0;j < col.length;j++) {
                                if(collection[i] == col[j].name) {
                                        col[j].count++;
                                        break;
                                }
                        }
                 }
        }
console.log(collection);
console.log(col);
var result = new Array();
result.push({'name':col[0].name,'summary':col[0].count});
for(var i = 1;i < col.length;i++) {
	if(col[i].name != col[i-1].name) { 
		result.push({'name':col[i].name,'summary':0});
}
	for(var j = 0;j < result.length;j++) {
		if(col[i].name == result[j].name) {
			result[j].summary += col[i].count;
			break;	
		} 
		
	}
	
}
console.log(result);
        return result;
}
