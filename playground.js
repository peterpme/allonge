// function getWith

function getWith(attr){
  return function(obj){
    return obj[attr];
  }
}

var inventory = {
  apples:0,
  oranges: 144,
  eggs:36
};

console.log(getWith('oranges')(inventory));

var inventories = [
  { apples: 0, oranges: 144, eggs: 36},
  { apples:240, oranges: 100, eggs:10},
  { apples:100, oranges:99, eggs:12}

];

function mapWith(fn){
  return function(list){
    return Array.prototype.map.call(list, function(something){
      return fn.call(this,something);
    });
  };
};

function pluckWith(attr){
  return mapWith(getWith(attr));
}