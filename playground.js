function memoMe(fn){
    var cache = {};
    return function (x){
        if (x in cache){
            console.log(x + " in cache "+ cache[x]);
        }
        else {
            cache[x] = fn(x);
            console.log(x + " added to cache: "+ cache[x]);
            
        }
        return cache[x];
    }
}

var mem = memoMe(squared);
var memsquared5 = mem(5);
var memsquared15 = mem(15);
var memsquared6 = mem(6);
var memsquared5 = mem(5);
var memsquared2 = mem(2);
var memsquared15 = mem(1500);
console.log(mem);
console.log(memsquared5);
console.log(memsquared15);
console.log(memsquared6);
console.log(memsquared5);
console.log(memsquared2);
console.log(memsquared15);