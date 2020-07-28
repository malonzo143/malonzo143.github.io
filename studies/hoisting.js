/* Hoisting 
 * 
 * 0. When variable or function declarations are transported to the top of their scope before the code block is executed.
 *    JavaScript's interpreter will hold the values of a variable or function declaration in the computer's memory prior to excuting code block.
 *    Variables are able to be accessed/used before they have been declared. 
 *    Functions AND variables can be hoisted. 
 * 
 * "undefined" will print to console when using keyword var,then will run the value of the variable. 
 * let and const CAN NOT be hoisted. 
 *
 * Function declarations can be hoisted, to the top of the scope, and are used before they are delcared. 
 * Function expressions CAN NOT be hoisted
 
 * The JavaScript interpreter reads through code to see what is attempting to be executed and perform that action. 
 * Interpreter => Reads code and hoists variables/function declarations => Executes the hosited code 
 * The interpreter is able to see what errors are occuring and what the programmer needs to fix; example:syntax error or reference error
 * The interpreter converts the programmers language with the binary system(0's & 1's) that the computer will process. 
 *
 */
 
 // Variables Hoisted

 

 //VAR

 var hoist; // the variable has been declared but not assigned

 console.log(hoist); // prints => "undefined".

 hoist = "This variable will be hoisted"; // hoist has been assigned to a string

 console.log(hoist); // => prints to the console "This variable will be hoisted"
 
 /* Note: The assignment will not be hoisted along with variable.
  * Undeclared variables are global scoped. 
  * Otherwise, var is scoped to its execution status; ex: block/ function scope and global scope.*/

// LET

console.log(hoisting); // prints => ReferenceError Cannot access 'hoisting' before intializing

let hoisting = "This variable will be hoisted"; //hositing assigned to a string

/* Note: let keyword has the same rules for hoisting as var, BUT the declaration is block scoped, or contained.*/

// CONST

console.log(hoist); // prints => ReferenceError Cannot access 'hoists' before intializing

const hoists = "This variable will be hoisted"; // hoists assigned to a string 

/* Note: const keyword has the same rules for hoisting as var, BUT the declaration is block scoped, or contained.*/


// Functions Hoisted 

functionHoisted(); // function called with no arguments 

function functionHoisted() { //function, functionHoisted with no parameters

    console.log("This function is being hoisted"); // function defined to console and will print message in quotes

}
