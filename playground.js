var __slice = Array.prototype.slice;

function callFirst(fn, larg){
    return function(){
        var args = __slice.call(arguments,0);
        console.log(args);
        return fn.apply(this, [larg].concat(args));
    }
}

function callLast(fn, rarg){
    return function() {
        var args = __slice.call(arguments,0);
        
        return fn.apply(this, args.concat([rarg]));
    }
}

function greet (me, you){
    return "Hello, " + you + ", my name is " + me;
}
var peterSaysHello = callFirst(greet, "jeff");
var peter = peterSaysHello('peter','tom','alex',function(x){return x*x});
console.log(peter);