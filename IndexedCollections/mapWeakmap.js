var myMap = new Map();
var myWeakMap = new WeakMap();

var object1 = {'a':'b'};
var object2 = {'b':'c'};
var object3 = function(){};

myMap.set(object1,"Hey from Map");
myWeakMap.set(object2,"Hey from WeakMap");
myWeakMap.set(object3,"weakmap function");

console.log(myMap.get(object1));
console.log(myWeakMap.get(object2));
console.log(myWeakMap.get(object3));

object1 = null;
object2 = null;

myMap.forEach(function(key,value){
    console.log(key,value);
});

console.log(myWeakMap.get(object2));