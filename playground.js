var unbind = function unbind (fn) {
  return fn.unbound ? unbind(fn.unbound()) : fn
};
function bind (fn, context, force) {
  var unbound,bound;
  
  if (force) {
    fn = unbind(fn);
  }
  bound = function() {
    return fn.apply(context, arguments)
  };
  bound.unbound = function() {
    return fn;
  };
  
  return bound;
}

function myName() {
  return this.name;
}

var harpo = { name: 'harpo'},
chico = { name: 'chicao'},
groucho = { name: 'groucho'};

var fh = bind(myName, harpo);
console.log(fh());