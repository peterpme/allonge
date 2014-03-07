function not(fn){
    return function(argument){
        return !fn(argument);
    };
}

function something(x){
    return x != null;
}
var nothing = not(something);
console.log(nothing);
var ok = nothing(true);
console.log(ok);