// Task: 15 minutes
// Declare a named function that takes an array of numbers, and returns the sum, or total, of all of the numbers in the array.

function arraySum(theArray) {
    var sum = 0;

    for (var value of theArray) {
        sum += value;
    }

    return sum;
}

console.log(arraySum([1, 2, 3]));


// Define an anonymous function expression that takes two arguments:
// an object, for example, { name: 'Wojtek', age: 30 }
// a string, for exmaple, 'name'
// Your function should return true if the given string is a key on the given object and false if the object does not have a key that matches the string. Store this function in an appropriately named variable to invoke it.


var car = {
    regNum: "XYZ 123",
    regYear: 2020,
    make: "Ford",
    model: "Escort"
};

var checkKey = function(theObject, theKey) {

    for (var key in theObject) {
        if (key === theKey) {
            return true
        }
    }

    return false;
};

console.log("case is true:", checkKey(car, "make"));
console.log("case is false:", checkKey(car, "bake"));