var nums = [1,4,9];
var roots = nums.map(Math.sqrt);

function squared(x){
    return x*x;
x}

function added(x){
    return x+x;
}

console.log(roots);

function mapWith(fn){
    return function(array){
        return array.map(fn);
    }
}

var squareAll = mapWith(squared);
var numArray = squareAll(nums);
console.log(numArray);

console.log("===========");
function a(a){
    console.log("1a: "+a);
    return function(b){
        console.log("1b: "+b);
        console.log(arguments[0]+ " " + arguments[1]);
        return function(c){
            console.log("1c: " +c);
            console.log(arguments[0] + " " + arguments[1]);
            return a+b;
        }
    }
}
var b = a(5);
var c = b(3,6);
var d = c(2);
console.log("a: " + a);
console.log("b: " + b);
console.log("c: " + c);
console.log("d: " + d);
console.log("====");
var e = function(a){
    return function(b){
        return a+b;
    }
}
var ee = e(5);
var ff = ee(6);
console.log("e:" +e);
console.log("ee:" +ee);
console.log("ff:" +ff);