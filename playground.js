var operations = 
(function(){
  var even = function(num){
    return (num===0) || odd(num-1)
  };
  
  var odd = function(num){
    return (num > 0) && even(num-1)
  };
  
  return {
    even: even,
    odd: odd
  }
})(),
even = operations.even,
odd = operations.odd;

console.log(even(1));
console.log(odd(5));

// transient let: 
/* nothing we bind in let is returned from let or otherwise 
passed out through assignment 
so th eenvironment of the let is discarded 
when let finishes being evaluated */
var factorialOfTwentyFive = 
(function(){
  var factorial = function(num){
    if (num<2){
      return 1;
    }
    else return num * factorial(num-1);
  }
  return factorial(25);
})();
console.log(factorialOfTwentyFive);