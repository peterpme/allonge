function tap(value,fn){
    if(fn === void 0){
        return curried;
    }
    else return curried(fn);
    
    function curried(fn){
        if(typeof(fn) === 'function'){
            fn(value);
        }
        return value;
    }
}

var drink = tap('espresso')(function (it){
    console.log("our drink is", it);
})