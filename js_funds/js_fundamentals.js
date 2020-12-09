/*

var - globally scoped
let - locally scoped, mutable
const - locally scoped, immutable

*/

var name = "Kidda";
console.log('name:', name)

// Dynamically typed - reassign the same variable to a different type.
name = 1;
console.log('name is now:', name)

// null is an INTENTIONAL nothing

var mango = null;
console.log('Mango:', mango)


// undefined is an UNINTENTIONAL nothing, e.g., you defined a variable but not assigned a value to it

var apple;
console.log('Apple:', apple)


//Conditionals

if (true) {
    // this runs when true
} else if (name === "Kidda") {
    // this runs when name is equal to "Kidda"
} else {
    // this runs when false
}


// Logical

// && - and
// || - or

(1 + 1 === 2) && ( 1 + 1 === 4)
(1 + 1 === 2) || ( 1 + 1 === 4)

// Short circuiting

false && ( 1 + 1 === 4) //if the first part is false, then the second part will not be checked


