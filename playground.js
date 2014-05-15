function memoized (fn, keymaker){
  var lookupTable = {},
  key;
  
  keymaker || (keymaker = function(args){
    return JSON.stringify(args);
  })
  
  return function() {
    var key = keymaker.call(this, arguments);
    
    return lookupTable[key] || (
      lookupTable[key] = fn.apply(this,arguments)
    )
  }
}

var fastFibonacci = memoized(function(n){
  if (n<2){
    return n;
  }
  else {
    return fastFibonacci(n-2) + fastFibonacci(n-1)
  }
});

console.log(fastFibonacci(45));