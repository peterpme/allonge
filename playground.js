function plus(a,b){
    return a + b;
}

console.log(plus(2,3));
console.log(plus.call(this, 2,3));
console.log(plus.apply(this,[2,6]));