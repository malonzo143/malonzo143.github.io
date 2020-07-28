// #!/usr/bin/env node

'use strict';

/**
 * 1: reverseString()
 *
 *  a. Create a function called reverseString that takes a 
 *  String as its only input and returns a new String 
 *  representing the input String reversed.  For example:
 *  
 *      reverseString('hello');  // => 'olleh'
 * 
 * TIPS:
 *  a. create something to collect the output you'll return. // an array 
 *  b. you'll need a loop, which one is best? How do you know // for loop 
 *     when to stop looping?// at the strings length 
 *  c. how do you access individual characters of a String? // index
 *  d. how do you concatenate Strings? What operator do we use? // concat method 
 */
//I: a string 
//O: reversed string input 
//C: N/A
//E: Use a loop, concat method 
function reverseString(str) { //function w/ str as our only input param
    // YOUR CODE GOES BELOW HERE //
//let strArr = str.split(""); // create a variable assigned to string w/ split method, "" inside of paraenthesis.
//let reverseStrArr = strArr.reverse();// with our new variable, assign to reverseStrArr using reverse method to reverse the string array. 
//let revStr = reverseStrArr.join("");// We need to change the array back into a string using the join method
   // return revStr;// return the string; if consoled would print "olleh".

let finalStr = "";// create a variable assigned to string literal, for info to push into post loop
for(let i = str.length -1; i >= 0; i--){ // for loop in descending order. str at last index as starting point, loops until string less than or equal to 0, and decrements each loop
  console.log(str[i]); 
  finalStr += str[i]; // using assignment operator += to reassign value from loop to previously created str literal. 
}
return finalStr;// return finalStr value
    
    // YOUR CODE GOES ABOVE HERE //
}




// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if (
  typeof process !== "undefined" &&
  typeof process.versions.node !== "undefined"
) {
  // here, export any references you need for tests //
  module.exports.reverseString = reverseString;
}