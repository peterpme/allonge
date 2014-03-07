String.prototype.repeat = function(count){
    if (count===1){
        return this;
    }
    else {
        return this + this.repeat(count-1);
    }
}

var Tom = "Tom";

console.log(Tom.repeat(5));

String.prototype.repeat2 = (function(count){
    var i=count;
    return function(count){
        i--;
        
        if (count===1){
            return i + this;
        }
        else
            return i + this + this.repeat2(count-1);
    }
})(5);
console.log(Tom.repeat2(5));