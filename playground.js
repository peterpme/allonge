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