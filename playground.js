function plus(a,b){
    console.log(arguments);
    return arguments[0] + arguments[1];
}
console.log(plus(5,3));