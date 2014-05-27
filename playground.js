var Ur = function() {};

new Ur();

console.log(new Ur() === new Ur());

console.log(Ur.prototype);

Ur.prototype.language = "javascript";

var continent = new Ur();
console.log(continent.language);

continent.language = "Coffeescript";
console.log(continent);

var another = new Ur();

// new instances don't acquire changes made to othe rinstances

console.log(another.language);

// changes made to constructors prototype changes behavior of all its instances.

console.log(continent.constructor);

console.log(continent.constructor === Ur)