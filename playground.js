console.log(

(function(){
    var age = 49;
    (function(){
        var age = 50;
    })();
    return age;
})()

);