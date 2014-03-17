var x = 'June 14, 1962',
    y=x;

console.log(x==y);

var x = [2012,6,14],
y=x;
console.log(x==y);

console.log((function (y){
    return x==y;
})(x));