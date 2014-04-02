//extend

var inventory = {
  apples:12,
  oranges:10
};

inventory.bananas = 54;
inventory.pears = 24;

var jeff = {
  a:2,
  b:3
};
var tom = {};

console.log(jeff);

for (var letters in jeff){
  tom[letters]= jeff[letters];
}
jeff.b =5;
console.log(tom);
console.log(jeff);