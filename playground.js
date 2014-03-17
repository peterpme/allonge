var unique = function() {
    return function(){
        
    };
}
console.log(unique);

console.log(unique()==unique());

var x = unique(),
y =x;

console.log(x==y);