/*

Objects in JS are key-value pairs, used to store data.

Simple way to create an object:

    {}


For example:

var movie = {};     //That's us created an object!
console.log("movie:", movie);

*/


var movie = {
    title: "The Big Game",
    year: 2020,
    language: 'Swahili'
};


/*
console.log("movie:", movie);

console.log("Movie title:", movie.title);
console.log("Movie year:", movie.year);
*/


/*
// Adding a key-value pair to our object:

movie.cast = ["The Boss", "The Worker", "The Financier"];


// Modify a property
movie.language = "Manderine"
console.log("Movie details:", movie)

movie['language'] = 'Urdu'
console.log("Movie details:", movie)

//Creating a new key-value pair, the variable name on the left is the key name too
movie.subtitle-language = "Afkrikaans"      - this will NOT work (doesn't like the dash in the key name)
movie['subtitle-language'] = "Afrikaans"    - this will work


movie.ratings = {
    critic: 27,
    audience: 35
};

console.log("Movie details:", movie);

console.log("Critic rating:", movie.ratings.critic);
movie.ratings.critic = 99;
console.log("New critic rating:", movie.ratings.critic);

*/


// Loop over all values of the object - not the use of 'in', not 'of'..!
for (var key in movie) {
    console.log("The key:", key);
    console.log("The value:", movie[key])
    console.log("And Togther:", `${key} : ${movie[key]}`)
}

// Simpler way to retrive all the keys from the object:
var myKeys = Object.keys(movie);
console.log("Just the keys:", myKeys);