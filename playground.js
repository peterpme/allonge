// String.prototype.repeat = function(count){
//     var that = this;
//     return Array.apply(void 0, Array(count)).reduce(function(p,c,n){return (n === 0) ? that :  p + that;})
// }

String.prototype.repeat = function(count) {
    return Array(count+1).join(this);
}

console.log("Tom".repeat(5));