//Closure Function

var createCounter = function(number){
    let counter = number;

    return function(){
        counter++;
        return counter;

    }
}

var counter1 = createCounter(0);
console.log(counter1());
console.log(counter1());
console.log(counter1());
