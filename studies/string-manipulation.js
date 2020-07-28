
/*
 * STRING MANIPULATION:
 *
 * 0. As mentioned above, strings are a simple datatype within Javascript.
 * We can manipulate these strings to locate,change,and update data stored within them.
 * This  is called string manipulation.
 * Using string manipulation we can check the length, capitalize letters, and concatenate our values. 
 *
 * 1. The first way to manipulate a string is to use our string operators.
 * Such as .concat(),charAt(),just to name a couple.
 *
 * 2. Another way is with our string methods. 
 * Such as .split(), .slice()  to name a couple. 
 */

// 1. String Operators//
let string = "dog"; // create variable string and assign to a string value. Here we will have our value be a string of dog. 
let newString = string.concat("s and cats"); /*  concat method returns an new string with values from original content to new. 
                                            within parenthesis adding "s and cats" to elongate our string value.*/
console.log(newString);// prints to console => "dogs and cats"

/*
 * Operators return new strings of our original data.
 */

let name = "Morgan"; // variable name assigned to string of "Morgan"
name += " Alonzo"; // Using += operator, I am stating I want to add the string of "Alonzo" to our declared name "Morgan" in a new string 
console.log(name); //  prints => "Morgan Alonzo"

// 2. String Methods //

//String methods help a programmer work within a string

//.split//
/*breaks up strings into an array of substrings, then returns an new array.*/

let myString = "Strings"; // a variable named myString assigned to a string of "Strings"
let myStrings = "are cool!";// another variables named myStrings assigned to a string "are cool!"
let myNewString = myString + " " +myStrings; // a new variable called myNewString assigned to myString with a space + myStrings 
myNewString.split(" "); // myNewString with split method which divides given strings and returns substrings. 
console.log(myNewString); // prints ==> "Strings are cool!"

//.length//
/* returns length of a string */

let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; // variable alphabet with all characters of alphabet within a string 
let strlength = alphabet.length; // new variable strlength assigned to alaphabet.length
console.log(alphabet.length);// prints to console =>26 

//indexof()//
/* returns position of FIRST occurance of requested text within a string.*/

let str = "Please state your name."; // string variable assigned to text 
let pos = str.indexOf("your"); // new variable assigned to string, requested index of "your"
console.log(pos); // prints => 13



//.slice//
/*  Slice removes a part of a string and places the extraction into a new string.*/

let names = "Jessica,Evan,Lee,Morgan"; // Names of students at Operation Spark 
let res = names.slice(0,18); // result variable extract value from index 0 to index 18 
console.log(res);// prints => "Jessica, Evan, Lee"

//replace()//
/* replaces a specific value with another in a string.*/

let strTwo = "I love banana pudding!"; 
var newStr = strTwo.replace("banana pudding","Diet Coke");// asking for new string to replace value of banana pudding to Diet Coke in a new string 
console.log(newStr); // prints => "I love Diet Coke!"

// to UpperCase//
/* Capitalizes values within parenthesis*/

let lname = "morgan"; // string of name morgan lowercase 
let newName = lname.toUpperCase();// new string with all letters uppercase in input value
console.log(newName); // prints => "MORGAN"

