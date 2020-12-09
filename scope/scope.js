/*

var name = "Kidda";

var secretsFunction = function() {
    var pinCode = [0, 0, 0, 0];
    console.log("pinCode inside secretsFunction:", pinCode);
    console.log("name inside secretsFunction:", name);
};

secretsFunction(); //This will work, as 

//console.log("pinCode outside of secretsFunction:", pinCode); //This won't be seen...
console.log("name outside of secretsFunction:", name); //This WILL be seen

*/


//SCOPE example

//
// var filterNamesByFirstLetter = function (names, letter) {
//     var filteredNames = [];
//     for (var name of names) {
//         if (name[0] === letter) {
//             filteredNames.push(name);
//         }
//     }

//     console.log("name after the loop:", name);
//     return filteredNames
// }

//   var students = ['Alice', 'Bob', 'Alyssia', 'Artem', 'Babs'];
//   var filteredStudents = filterNamesByFirstLetter(students, 'A');
//   console.log('filteredStudents:', filteredStudents);
//


/*
// USING let instead of var (for variable: name) in the loop in the next example

var filterNamesByFirstLetter = function (names, letter) {
    var filteredNames = [];
    //let name;
    //for (name of names) {
    for (let name of names) {
        if (name[0] === letter) {
            filteredNames.push(name);
        }
    }

    console.log("name after the loop:", name);
    return filteredNames
}

  var students = ['Alice', 'Bob', 'Alyssia', 'Artem', 'Babs'];
  var filteredStudents = filterNamesByFirstLetter(students, 'A');
  console.log('filteredStudents:', filteredStudents);
*/


/*
// Two examples showing var and let usage:

let isItFIve = function(number) {
    if (number === 5) {
        var result = true;
    } else {
        var result = false;
    } 
    return result;
}

let isItFIve = function(number) {
    let result;
    if (number === 5) {
        result = true;
    } else {
        result = false;
    } 
    return result;
}

*/


// const

//let calculateEnergy = function(mass) {        - better to be declared as a const...
const calculateEnergy = function(mass) {
    const speedOfLight = 299792458;
    //speedOfLight++;  - this will cause an error
    return mass * speedOfLight ** 2;
}

let energyOfMe = calculateEnergy(75);
console.log("energyOfMe if I weighed 75 kg:", energyOfMe);

const song = {
    title: "Thriller",
    artist: "MJ"
};

console.log("song before mutation:", song);

// You can't redefine the whole thing at once, whereas you can make individual changes to a const...
song.title = "Bad";
song.year = 1990;
console.log("Song after mutation...despite it being a const!", song);

const songs = [
    song,
    "Go away",
    "No. You go away"
];

console.log("songs before mutation:", songs);

// You can't redefine the whole thing at once, whereas you can make individual changes to a const...
songs[1] = "Good";
songs.pop();
console.log("Songs after mutation...despite it being a const!", songs);

result = "hello"  // This has global scope!!! Not using var, let or const...