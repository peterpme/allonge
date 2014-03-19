var words = 'cat cat cat dog shoot dog dog cat cat';

function countAdjacentPairs(searchString) {
  var arrs = searchString.split(" "),
      count = 0;
      
  arrs.map(function(c,i,a){
      p=arrs[i+1];
      if(c===p){
          count++;
      }
      
  });
  return count;
}

console.log(countAdjacentPairs(words));