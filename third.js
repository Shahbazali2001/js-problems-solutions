var createCounter = function (number) {
    let counter = number;
    
    return function () {
        counter++;
        return counter;
    };
};

var counter1 = createCounter(0);

for (var i = 0; i < 5; i++) { // Running closure function 5 times
    console.log(counter1());
}
