/**
 * Part 1
 *
 * In this file, we're going to practice
 * creating and accessing data structues.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Object Creation //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//I: an object 
//O: animal object wuth key/value pairs 
//C: dot notation 
//E: N/A
var animal = {};    // create an object literal called animal to house our first animal.
animal.species = "lion"; //Using dot notation to assign key of species with value of string "lion".
animal.name = "Simba"; // dot notation again to assign key of name with string value of "Simba". 
animal.noises = []; // dot notation for key of nosies assigned to an array literal; for noises to be pushed into later.
console.log(animal); // prints our animal object with all keys/value pairs 


//////////////////////////////////////////////////////////////////////
// Step 2 - Array Creation ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//I: an array
//O: an array filled with string noises 
//C: dot notation/bracket notation
//E: N/A
var noises = [];    //array literal to house our noises, which will be pushed into later 
noises[0] = "Growl"; // Using bracket notation at 0th index to assign string of "Growl" as first noise 
noises.push("Grr"); // using push method and dot notation to assign string of "Grr" to end of array
noises.unshift("Rawr"); // using unshift method and dot notation to assign string of "Rawr" to front of array.
noises.push("Hi"); // again push method and dot notation to assign string of "Hi" to end of array.
console.log(noises.length); // prints 4
console.log(noises[noises.length -1]); // prints "Hi".
console.log(noises); // prints entire noises array 

//////////////////////////////////////////////////////////////////////
// Step 3 - Combining Step 1 and 2 ///////////////////////////////////
//////////////////////////////////////////////////////////////////////
//I: our animal object 
//O: our noises array within our animal object 
//C: bracket notation
//E: N/A
animal["noises"] = noises; // bracket notation assigned property to noises 
noises.push("Yawn"); //using push method and dot notation to add string of "Yawn" to the end of our noises array. 


/* *******************************************************************
 * Step 4 - Review
 *
 * 1. What are the different ways you can access properties on objects?
 *              // Bracket or dot notation 
 *
 * 2. What are the different ways of accessing elements on arrays?
 *           //Bracket notation 
 *
 * *******************************************************************
 */

/* *******************************************************************
 * Step 5 - Take a Break!
 *
 * It's super important to give your brain and yourself
 * a rest when you can! Grab a drink and have a think!
 * For like 10 minutes, then, BACK TO WORK! :)
 * *******************************************************************
 */

//////////////////////////////////////////////////////////////////////
// Step 6 - A Collection of Animals //////////////////////////////////
//////////////////////////////////////////////////////////////////////
//I: array
//O: animal object inside of array 
//C: dot notation
//E: push method 
var animals = []; //array literal assigned to animals; we will push values inside later 
animals.push(animal); //Using dot notation and push method to add our animal object to our array 
console.log(animals); // prints entire array w/ animal object and noises

var duck ={ species: 'duck', name: 'Jerome', noises: ['quack', 'honk', 'sneeze', 'woosh'] }; // creating another object, duck 
animals.push(duck); // pushing duck inside of animals array 
console.log(animals); // animals now contains lion and duck 

var rooster ={species:"rooster", name:"Ramone", noises:["cock-a-doodle-do", "bok-bok"] }; // creating another object, rooster 
animals.push(rooster); // pushing rooster object into animals array 
var snake={species:"snake", name:"Severus", noises:["hiss","slurp"]}; // creating another object, snake
animals.push(snake); // pushing snake object inside of animals array.
console.log(animals); // array should contains objects of lion,duck,rooster,and snake 
console.log(animals.length); // prints 4 




//////////////////////////////////////////////////////////////////////
// Step 7 - Making Friends ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

/*My partner as I chose to use an array as our data structure, since you can manipulate the info inside the array, 
and arrays can contain different datatypes.*/

//I: an array, a function 
//O: random populated friend to each animal object 
//C: Math.random
//E: N/A 
var friends = []; // create an array literal assigned to friends
function getRandom(){ //function getRandom, no params, and no arguments 
    return Math.floor(Math.random()*animals.length); // return statement using Math.floor which will round up our nearest decimal place from Math.random 0-1 value. Due to animals length, this can be from 0-3.
}
friends.push(animals[getRandom()].name); // using push method and getRandom function, to randomize friend's name inside animals array 
animals[0]["friends"]=friends; //  Creating a place for friends in animals array

/**
 * Nice work! You're done Part 1. Pat yourself on the back and
 * move onto Part 2 in the file called "functions.js"
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal, noises, animals, friends, getRandom;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
     module.exports.animal = animal || null;
     module.exports.noises = noises || null;
     module.exports.animals = animals || null;
     module.exports.friends = friends || null;
     module.exports.getRandom = getRandom || null;
}