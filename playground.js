//mapWith

function flip(fn){
  return function(first){
    return function(second){
      return fn.call(second,first);
    };
  };
};

var mapWidth = flip()
function mapWith(fn){
  return function(list){
    return Array.prototype.map.call(list, function(something){
      return fn.call(this, something);
    });
  };
};

var squareMap = mapWith(function(n){
  return n*n;
});
console.log(squareMap);
console.log(squareMap([1,2,3,4,5]));