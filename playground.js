var report=
[[{price:1.99,id:1},{price:4.99,id:2},{price:7.99,id:3},{price:1.99,id:4},{price:2.99,id:5},{price:6.99,id:6}],[{price:5.99,id:21},{price:1.99,id:22},{price:1.99,id:23},{price:1.99,id:24},{price:5.99,id:25}],
[{price:7.99,id:221},{price:4.99,id:222},{price:7.99,id:223},{price:10.99,id:224},{price:9.99,id:225},{price:9.99,id:226}]];

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

function getWith(attr){
  return function(obj){
    return obj[attr];
  }
}

function deepMapWith(fn){
  return function innerdeepMapWith(tree){
    return Array.prototype.map.call(tree, function(element){
      if (Array.isArray(element)){
        return innerdeepMapWith(element);
      }
      else return fn(element);
    });
  };
};

console.log(deepMapWith(getWith('price'))(report));