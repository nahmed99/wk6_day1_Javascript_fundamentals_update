//Hoisting; you can call your function before the place where it is defined.


// (1) Named Functions
function sayHello(greeting, name="Dunya") {
    return `Kidda, ${greeting} ${name}`;
}

console.log("sayHello message:", sayHello());
console.log("sayHello message:", sayHello('happy holiday'));
console.log("sayHello message:", sayHello('happy holiday', 'yaar'));


// (2) Anonymous Function Expressions - these functions can have a semi-colon after the last curly-brace. Normal functions don't need that.
// These functions are not  hoisted.

var add = function(firstNum, secondNum) {
    return firstNum + secondNum;
};

console.log("1 + 3 is", add(1, 3));



// (3) The Arrow Function - always anonymous, and not hoisted.

var multiply = (numOne, numTwo) => {
    return numOne * numTwo;
};

// The above arrow function can be written as (with an implicit return):
// var multiply = (numOne, numTwo) => numOne * numTwo;

console.log("3 * 5 is:", multiply(3, 5));