// primitiveType(...) creates original primitive from a primitive or instance of primitive object
console.log(String(new String("Space"))=== "Space");

var original = function(unknown){
  return unknown.constructor(unknown);
}
console.log(original(true)===true);
console.log(original(new Boolean(true))===true);