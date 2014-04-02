// y combinator

function Y(f){
  return ((function(x){
    return f(function(v){
      return x(x)(v);
    });
  })(function(x){
    return f(function(v){
      return x(x)(v);
    });
  }));
}

var factorial = Y(function(fac){
  return function(n){
    return (n==0 ? 1 : n*fac(n-1));
  }
});

console.log(factorial(5));