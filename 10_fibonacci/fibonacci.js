const fibonacci = function(input) {
    if (input < 0) return "OOPS";

    let fib1 = 0;
    let fib2 = 1;

    let fib3 = 1; // in case input is 1st fibonacci number

    for (let i = 1; i < input; i++) { // if 1st fibonacci number is input, skip the for loop
        fib3 = fib1 + fib2;
        fib1 = fib2;
        fib2 = fib3;
    }
    return fib3;
};

// Do not edit below this line
module.exports = fibonacci;
