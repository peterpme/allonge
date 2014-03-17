var a = ['1','2','3','4','5','6'];

a.map(function(element,index,arr){
    console.log({element:element,index:index,arr:arr})
});

function unary(fn){
    if(fn.length == 1){
        return fn;
    }
    else return function(something){
        return fn.call(this,something);
    }
}

console.log(a.map(unary(parseInt)));
