'use strict';

module.exports = function createUpdatedCollection(collectionA, objectB) {
 var col = new Array();
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
	for(var i = 0;i < col.length;i++) {
                for(var j = 0;j < objectB.value.length;j++) {
                        if(col[i].key == objectB.value[j])
                                col[i].count -= parseInt(col[i].count/3);
                                console.log("-1s");
                }
        }
        console.log(col);
        return col;
}	
