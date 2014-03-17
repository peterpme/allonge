console.log(

(function(){
    var age = 49;
    (function(){
        age = 50;
    })();
    return age;
})()

);