function isSomething(value){
    return value !== null && value !== void 0;
}

function checksForSomething(value){
    if (isSomething(value)){
        return value;
    }
}

var something = checksForSomething(5);
console.log(something); 