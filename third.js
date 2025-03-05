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

var counter2 = createCounter(-5);
console.log(counter2());
console.log(counter2());
console.log(counter2());
console.log(counter2());
console.log(counter2());
console.log(counter2());
console.log(counter2());
console.log(counter2());
console.log(counter2());
console.log(counter2());
