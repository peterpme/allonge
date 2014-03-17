var unique = function() {
    return function() {}
},
x = unique(),
y = unique(),
z = unique(),
o = { a:x,b:y, c:z};
console.log(o['a'] === x && o['b'] === y && o['c']===z);
x = 5;
console.log(o['a']===o.a);
console.log(o['a']);

