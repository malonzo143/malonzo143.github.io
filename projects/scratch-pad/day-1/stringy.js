// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: stringy.js
 */

/**
 * Given an input String, return its length.
 *
 * TIP: In JavaScript, how can we decipher the length of a String?
 * work? . length 
 */
 //I: a string 
 //O: length on string; a number 
 //C:N/A
 //E: N/A
 
function length(string) {
    // YOUR CODE BELOW HERE //
    return string.length;// using .length to access length of input string. 


    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String, return a new String forced to lowercase.
 */
 //I: a string 
 //O: input string, lowercased
 //C: Use toLowerCase()
 //E: N/A
function toLowerCase(string) {
    // YOUR CODE BELOW HERE //
 let newString = string.toLowerCase();// Create a variable newString for our input string to reassign with toLowerCase method acting on string.
 return newString;//returns string input, lowercased. 


    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String, return a new String forced to uppercase.
 */
 //I: a string 
 //O: string input, uppercased
 //C: use toUpperCase
 //E: N/A
function toUpperCase(string) {
    // YOUR CODE BELOW HERE //
let newString = string.toUpperCase(); // create variable newString assigned to string input.toUpperCase method acting on value
return newString;// return string input as uppercased. 


    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String, return a new String forced to dash-case.
 *
 * Examples:
 *
 *      toDashCase('Hello World'); // => 'hello-world'
 *
 * TIP: How can you look for and replace a space in a String? How can you
 *      enforce lowercase? Look at the global replace link below, or, try String
 *      methods split and join?
 *
 *      See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace#Using_global_and_ignore_with_replace()
 */
 //I: A string 
 //O: a dashed lowercased string 
 //C: Global replace 
 //E: replace method 
function toDashCase(string) {
    // YOUR CODE BELOW HERE //
let newString = string.replace(/ /g,"-"); // create new variable assigned to string input, replacing global method and inputing dashes.
newString = newString.toLowerCase();// our new string reassigned again toLowerCase method. 
return newString;// return new dashcased and lowercased string 

    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String and a single character, return true if the String
 * begins with the character, false otherwise. The Function is case insensitive.
 *
 * Example:
 *
 *      beginsWith('Max', 'm'); // => true;
 *      beginsWith('Max', 'z'); // => false;
 *
 * TIP: How can you use Array access to your advantage here? How can you
 *      ensure uppercase and lowercase can be compared equally?
 */
 //I: a string, string character 
 //O: Boolean value 
 //C: N/A
 //E:
 
function beginsWith(string, char) {
    // YOUR CODE BELOW HERE //
let firstLetter = string.charAt(0);
firstLetter = firstLetter.toLowerCase();
let compare = char.toLowerCase();
if(firstLetter === compare){
    return true;
}else{
    return false;
}
    

    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String and a single character, return true if the String
 * ends with the character, false otherwise. The Function is case insensitive.
 *
 * Example:
 *
 *      endsWith('Max', 'X'); // => true;
 *      endsWith('Max', 'z'); // => false;
 *
 * TIP: How can you use Array access to your advantage here? How can you
 *      ensure uppercase and lowercase can be compared equally?
 */
 //I: a string, a string char 
 //O: a boolean value 
 //C:N/A
 //E:N/A
 
function endsWith(string, char) {
    // YOUR CODE BELOW HERE //
let lastLetter = string.charAt(string.length-1);//Create a variable named lastLetter and set it equal to exisiting string.charAt the existing string.length-1
lastLetter = lastLetter.toLowerCase();// set your new variable equal to the new variable using the toLowerCase() method. 
let comparison = char.toLowerCase();//Create another variable called comparison and set it equal to char and use toLowerCase() method.
if (lastLetter === comparison){//If, else statement comparing variables, lastLetter and comparison.
    return true;
}else{//if false, return false.
    return false;
}


    // YOUR CODE ABOVE HERE //
}

/**
 * Given two input Strings, return the Strings concatenated into one.
 *
 * TIP: What's the operator to concatenate two Strings?concat
 */
 //I: Two strings
 //O: One concatenated string
 //C: N/A 
 //E: use concat 
function concat(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
//let strings = stringOne + stringTwo;// create a new variable strings assigned to param 1 + param 2 
//strings = strings.concat(); //re-assignment using concat method, for evaluation 
//return strings;// returns stringOne & stringTwo together concatenated in one string 
/* After using Python Tutor, I relized I could do this all in one line*/
return stringOne.concat(stringTwo);// Using concat method to put two strings into one 


    // YOUR CODE ABOVE HERE //
}

/**
 * Given any number of Strings, return all of them joined together.
 *
 * Example:
 *
 *      join("my", "name", "is", "Ben"); // => "mynameisBen";
 *
 * TIP: This Function pulls out all the arguments passed to it and stores them
 *      in an Array called args.
 */
 //I: Two strings 
 //O: One string 
 //C: N/A
 //E: use join method
function join(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
    var args = Array.from(arguments);
return args.join(''); // one string using join method, removes "," at the end of each list in array 
    


    // YOUR CODE ABOVE HERE //
}

/**
 * Given two Strings, return the longest of the two.
 *
 * Example:
 *
 *      longest("ben", "maggie");   //-> "maggie"
 *
 * TIP: What property of the String do we need to compare?// the length 
 */
 //I: Two strings
 //O: One string with largest length 
 //C: N/A 
 //E: .length, condition checks 
function longest(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
if(stringOne.length > stringTwo.length){ // Using if, else if, else chain to check conditions on length of params 
    return stringOne;// if stringOne is longer than param 2 , return stringOne
}else if (stringTwo.length > stringOne.length){ //Otherwise, return stringTwo 
    return stringTwo;
}else{// Fail safe, return null 
    return null;
}


    // YOUR CODE ABOVE HERE //
}

/**
 * Given two Strings, return 1 if the first is higher in alphabetical order than
 * the second, return -1 if the second is higher in alphabetical order than the
 * first, and return 0 if they're equal.
 *
 * TIP: How can we compare Strings? Is 'a' greater than or less than 'b'?
 */
 //I: two strings 
 //O: a number 
 //C:N/A
 //E: Conditional statement 
function sortAscending(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
    //If, else if, else chain to eval strings against one another 
if (stringOne > stringTwo){// If string one is greater than string two, return -1 
    return -1
}else if(stringTwo > stringOne){// if string two is greater than string one, return 1 
    return 1
}else{// failsafe, return 0 
    return 0
}


    // YOUR CODE ABOVE HERE //
}


/**
 * Given two Strings, return 1 if the first is lower in alphabetical order than
 * the second, return -1 if the second is lower in alphabetical order than the
 * first, and return 0 if they're equal.
 *
 * TIP: How can we compare Strings? Is 'a' greater than or less than 'b'?
 */
 //I: Two strings
 //O: a number
 //C: N/A 
 //E: Conditional statement 
function sortDescending(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
if(stringOne < stringTwo){// if, else if, else chain to evaluate strings against another 
    return -1;
}else if (stringTwo < stringOne){// if stringTwo is less than StringOne
    return 1;
}else{// If they are equal or do not meet any other standards above, return 0 
    return 0;
}



    // YOUR CODE ABOVE HERE //
}


// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.length = length;
    module.exports.toLowerCase = toLowerCase;
    module.exports.toUpperCase = toUpperCase;
    module.exports.toDashCase = toDashCase;
    module.exports.beginsWith = beginsWith;
    module.exports.endsWith = endsWith;
    module.exports.concat = concat;
    module.exports.join = join;
    module.exports.longest = longest;
    module.exports.sortAscending = sortAscending
    module.exports.sortDescending = sortDescending;
}
