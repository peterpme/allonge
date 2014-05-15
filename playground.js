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