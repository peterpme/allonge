var __slice = Array.prototype.slice;
var variadic = function(fn){
    var count = Math.max(fn.length-1,0);
    
    return function() {
        var args = __slice.call(arguments,0,count);
        
        args.length = count;
        args.push(__slice.call(arguments,count));
        
        return fn.apply(this,args);
    };
};

var fn = variadic(function(args){
    return args;
});

console.log(fn());
console.log(fn('a'));
console.log(fn('a','b'));

var fn = variadic(function(a,b, args){
    return { a:a,b:b, args:args};
});

console.log(fn());
console.log(fn('a'));
console.log(fn('a','b'));