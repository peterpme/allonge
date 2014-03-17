var unique = function(){
    return function() {}
},
x = unique(),
y = unique(),
z = unique();
var a = [x,y,z];
console.log(a[0]===x && a[1]===y && a[2]===z);