var allHallows =[2012,10,31];
var halloween = allHallows;
console.log(halloween===allHallows);

(function(halloween){
    allHallows=[2013,10,31];
    console.log(halloween);
})(allHallows);

