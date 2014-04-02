// once

function once(fn){
  var done = false;
  
  return function(){
    return done ? void 0 : ((done = true), fn.apply(this, arguments));
  }
}

function addThis(num){
  return num + num;
}

var addMe = once(addThis);



console.log(addMe(4));
console.log(addMe(4));

var askedOnBlindDate = once(function(){
  return "sure, why not?";
})

console.log(askedOnBlindDate());