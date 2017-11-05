'use strict';

module.exports = function createUpdatedCollection(collectionA, objectB) {
 var result = new Array();
col.push({'key':'a','count':1});
console.log(result);
        for(var i = 1;i < collectionA.length;i++){
                if(collectionA[i] != collectionA[i-1])
                        result.push({'key':collectionA[i],'count':0});
                for(var j = 0;j < result.length;j++) {
                        if(collectionA[i] == result[j].key) {
                                result[j].count++;
                                break;
                        }
                }
        }
	for(var i = 0;i < result.length;i++) {
                for(var j = 0;j < objectB.value.length;j++) {
                        if(result[i].key == objectB.value[j])
                                result[i].count -= parseInt(result[i].count/3);
                                console.log("-1s");
                }
        }
        console.log(result);
        return result;
}	
