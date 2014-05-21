var faces = ['Ac', 'Ks', '5h', 'Td', '3c'];
var numbers = [0,22,2,30,51];

function cardsConverter(input){
  return eNum() + listCards();
//   if( typeof input[0] === "string"){
//   // encoding


//   }

//   else {
//   // decoding

//   }

//   return convertedArray;
}

function eNum(){
  var list1 = ['c','d','h','s'];
  var list2 = ['A',2,3,4,5,6,7,8,9,'T','J','Q','K'];

  var a,b,c = [];

  for(a in list1){
    for(b in list2){
      c.push((list1[a].toString()+list2[b]).split('').reverse().join(''));
    }
  }
  return c;
}
var eNumArray = eNum();

function decode(list,testCase){
  var numArr = [];
  for (var i in list){
    for (var j in testCase){
      if(list[i]=== testCase[j]){
        numArr.push(j);
      }
    }
  }
return numArr.sort();
}

function encode(list,testCase){
  var charArr = [];
  for (var j in testCase){
    for(var i in list){
      if(list[i] == j)
      charArr.push(list[i]);
    }
  }
  return charArr.sort().map(function(e){
    return testCase[e];
  });
 
}

console.log(decode(faces,eNumArray));
console.log(encode(numbers,eNumArray));