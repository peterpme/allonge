var Ur = function(){};
console.log((function() {}).prototype=== (function() {}).prototype);

Ur.prototype.language="Javascript";

var continent = new Ur();
console.log(continent.language);

continent.language = "CoffeeScript";
console.log(continent);
console.log(continent.language);
console.log(Ur.prototype.language);

// New instances don't acquire any changes made to other instances.

var another = new Ur();

console.log(another.language);

Ur.prototype.language = 'SUmerian';

// change behavior of contructors prototype changes behavior of all instances
console.log(another.language);

console.log(continent.constructor);

console.log(Ur.prototype.constructor)
console.log(Ur.prototype.constructor === Ur)