// bound to local variable for speed improvement 

var __slice = Array.prototype.slice;

function butFirst() {
    return __slice.call(arguments,2);
}
console.log(butFirst('a','b','c','d'));