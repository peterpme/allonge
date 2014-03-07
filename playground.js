function compose(a,b){
    return function(c){
    return a(b(c));
    };
}


function addThis(x){
    return x+x;
}

function multThis(x){
    return x*x;
}

var comb = compose(addThis,multThis);
var add = comb(5);
console.log(add);