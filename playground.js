var unique = function() {
    return function() {}
},
x = unique(),
y = unique(),
z = unique(),
o = { a:x,b:y, c:z};
console.log(o['a'] === x && o['b'] === y && o['c']===z);