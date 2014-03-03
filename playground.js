function plus(a,b){
    console.log(arguments);
    return arguments[0] + arguments[1];
}
console.log(plus(5,3));

function howMany() {
    return arguments['length'];
}
console.log("How Many:");
console.log(howMany());
console.log(howMany(3,4,2));