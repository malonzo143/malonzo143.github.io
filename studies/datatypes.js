/*
 * DATATYPES:
 *
 * 0. A type of data that is stored inside of a container or variable. 
 *  There are two types of values within data types: primitive/simple and complex. 
 *
 * 1. Primitive/Simple Datatpes
 *  Primitive/Simple or has no additional properties or methods
 * Primitive values are copy by value meaning when variables are assigned, they are assigned to the object not the value 
 *  There are 4 types of data that fall into primitve/simple data structures:
 * Strings, Booleans,Numbers, and Undefined values 
 */
 
 // Example of Copy by Reference 
 let morganSpeaks = {language:"English"}; // assigning variable morganSpeaks to object key/value language:English. 
 let emmySpeaks = morganSpeaks; //second variable assigned to first variable value
 console.log(morganSpeaks);// prints => {language:"English"}
 console.log(emmySpeaks);// prints => {language:"English"}
 
 morganSpeaks.language ="Spanish";// updating property value of language from English to Spanish 
 console.log(morganSpeaks);// prints => {language:"Spanish"}
 console.log(emmySpeaks);// prints => {language:"Spanish"}
 

 
 
 
/* 2. Complex Datatypes
 *  A dataype that can return multiple properties or methods. 
 * Complex datatypes are copy by reference, meaning the data in the variable is assigned to the value not the object,
 * which is the opposite of copy by value as displayed in primitive/simple values 
 * There are two datatypes that fall into this category: 
 * Functions and Objects
 * Functions do not return objects 
 * Objects can return arrays or null in addition to the object. 
 */
 
 //Example of Copy by Value
  let x = 10; // assigning variable x to the value of 10
  let y = x; // assigning variable y to the same value of x, previously indicated as 10. 
  console.log(x); // prints =>10
  console.log(y);// prints => 10
 

// 1. Strings //
 
 /**
  * 0. A collection of characters and or symbols surrounded by single '' or double "" qoutations.
  * Strings can use bracket notation, can be combined with + operator, and have a length property.
  * Strings fall into the simple/primitive datatype category. 
  */
 
 //declaration and assignment// 
 let string; // declaring a variable named string
 string = ""; // assigning a string literal, or an empty string to my string variable. 
 console.log(string); // prints ==> ""

 //Re-assignment//
 // We can re-distribute information into our already declared string literal. Using our = assignment operator, we can reassign our variable to a new value/datatype.
 
 string = "value1"; // at the zeroth index of string, add value1. 
 console.log(string); // prints ==> value1 
 
 // If you were wanting to look at specific index of your new value, you would use bracket notation. 
 
 console.log(string[1]); //requesting for console to print value of string at first index 
                         // prints to console => "a" 
 
 
 // 2. Numbers //
 
 /**
  * 0. A numeric value that can be positive,negative, or a decimal. 
  * Numbers can be added,subtracted,multiplied, or divided. Just like in Math class!
  * Numbers can create new variables with arthmatic expressions. 
  * Numbers are another example of  a simple/primitive datatype. 
  * Note: NaN or not a number is a special case that falls under simple datatypes after an expression is run.
  */
 
 //declaration and assignment// 
 let number; // declaring a variable named number 
 number = 17; // assigning a number to our number variable. Do not add any qoutes around the number, or it will become a string value. 
 console.log(number); // prints ==> 17

 //Re-assignment//
 // We can update our assigned number by simply re-assigning or declared variable. i.e. Copy by value.
 
number = 17; // number currently equates to 17.
number = 25; // our same variable number, will now resolve to 25
console.log(number); // prints --> 25, since code reads from top to bottom. 

 // 2. NaN //
 
 /**
  * 0. A value that is simple in data type but not a number.  
  * NaN ==> Not a number
  */
 
 //declaration and assignment// 
 let numbers; // declaring a variable named numbers 
 numbers = 17; // assigning a number to our numbers variable. Do not add any qoutes around the number, or it will become a string value. 
 console.log(numbers); // prints ==> 17

 //Re-assignment//
 // We can update our assigned number by simply re-assigning or declared variable. This is were NaN comes into focus.  
 
numbers = 17; // numbers currently equates to 17.
numbers = "banana"; // re-assigning our variable to a string of "banana", which is not a numeric value.
console.log(numbers); // prints --> NaN, since you are re-assigning the variable, it will pass over 17 and print out NaN. 

 /* NOTE: NaN will occur when incorrect math computation is performed. 
 * ex: let number = 17;
 *  number = number*"blue";
 * console.log(number) ==> prints NaN, since you are attempting to divide a number by a string value. 
 */
 
 // 3. Booleans //
 
 /**
  * 0. A value that resolves in true or false and are used in conditional statements
  * Booleans can be used with boolean expressions using comparison values, such as == loose comparison
  * === strict comparison and = equals assignment. 
  * Booleans are also binary variables, which means they can represent two values; true or false. 
  */
 
 //declaration and assignment// 
 let boolean; // declaring a variable named boolean to hold our values.
 boolean = true; // assigning a string literal, or an empty string to my string variabl
 console.log(boolean); // prints ==> true

 //Re-assignment//
 // We can re-assign boolean values just like our strings and numbers, the value needs to be true or false.
 
 boolean = false; // updates value to false 
 console.log(boolean); // prints ==> false
 
  // 4. Null //
 
 /**
  * 0. A value that is not zero or false, but points nowhere. 
  * Similar to undefined, null is represented when identification is lacking. 
  * You would see this result with objects, when a value should be present, but is not shown. 
  * You should include null as a part of your condition checks for an object, to ensure its definition. 
  */
 
 //Example// 
 //Using if statement to complete code block 
 if(null === null){// if null strictly equals null 
  return true; // return a boolean value of true. 
 }
 
  
  // 5. Undefined //
 
 /**
  * 0. A value that is not defined in a code block 
  * 
  */
 
 //Example// 
let dog;//declaring a variable named dog, but, not assigning value.
console.log(dog); // Prints ==> undefined since there is not value attached to dog variable. 


// 6. Infinity and -Infinity //
 
 /**
  * 0. A numeric value that represents infinity or negative infinity.
  * 
  */
 
 //Example// 
let example = 2000; // example variable is assigned to numeric value 2000
if(example >= Infinity){ //Using if else chain, if example value is greater than or equal to Infinity 
 return true;//return true 
}else{// Otherwise, 
 return false;// Return false 
}
// ==> this would return false, since our given example number 2000 is not greater than or equal to the value of infinate.




// 7. Arrays //
 
 /**
  * 0. A complex data type used to store multiple types of values. 
  * Every value within the array has an index, 1st value being 0 then progresses upward.
  * To access the values in our defined array, you refer to the name of your array then in brackets indicate which index value you would like to be pulled out. 
  * Arrays can contain any type of data type including other arrays! 
  * Arrays go by another name, a collection, since this datatype can hold different datatypes including its own kind. 
  * Arrays have a length property likes strings, and methods can be used to manipulate the information within the array. 
  */
 
 //declaration and assignment// 
 let myArray; // declaring a variable named myArray
 myArray = ["a","b","c"]; // assigning an array literal, or an empty array to my array variable. 
 console.log(myArray); // prints ==> "a","b","c",

 //Re-assignment//
 // We can relocate information into our already declared array with different methods, such as .push()
 
 //Using dot notation to assert push method onto our array. 
 myArray.push("a value");// pushes "a value" to the end of our assigned array.
 console.log(myArray); //prints ==> "a","b","c","a value"
 
 //Accessing values in array 
 myArray[2] //going into defined array at second index, represented by "c"
 console.log(myArray[2]); // prints to console => c
 


// 8. Object //
 
 /**
  * 0. A type of collection in Javascript. Objects are not ordered, nor do they have indicies. 
  * Objects have key/value pairs or properties. 
  * Properties can be accessed from objects using bracket or dot notation.
  * Data is stored in between {}.
  * Objects are complex data types since they can return multuple types of data.
  */
 
 //declaration and assignment// 
 let object = {};// declaring a variable named object and assigning it to an object literal. 

//Re-assignment//
 // We can push information into our already declared string literal. We do so with bracket notation
 
 object = {
  key1: "A", key2:"B", key3: "C"// reassigning object literal with keys and value pairs 
 }; 
console.log(object); // prints ==> key1: "A", key2:"B", key3: "C"


// 9. Functions//
 
 /**
  * 0. A piece of code that only executes when called upon.
  *  A complex data type that can hold objects, arrays, strings, etc as parameters.
  *
  */
 
 //declaration and assignment// 
function func(parameter1,parameter2){ //declare a function using keyword function then name of your function assigned with parameters in paraenthesis
 return parameter1 + parameter2;// execute a codeblock, here we have addition between our parameters
}
console.log(func(5,7));// prints to console ==> 12 
                       // Calling a function by stating name func outside of the {} and running arguments, if any through it. 


 