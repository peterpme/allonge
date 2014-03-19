var even = function(num){
  return (num === 0) || !(even(num-1));
 
}


console.log(even(5));