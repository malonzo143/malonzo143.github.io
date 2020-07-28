/*
 * FUNCTIONS:
 *
 * 0. A function is a block of code that accepts input values, processes, and returns a new data value. Functions optionally
      take parameters,(arguments). A parameter, or an input value or placeholder for our code. An argument will then take place of the holders once function is called. 
 *
 * 1. There are four parts to function declaration: name, parameters, function bodies (where the code runs), and a 
      return statement; where we specify the output of our function.
 *
 * 2. There are 2 phases of using functions: declaration (creating a function), and calling it.
 */

// 1. declaration //
function name(string){//using keyword function to initialize function, separated by the name of the function and parameter
    return "My name is " + string;//this function takes a string and returns a string concatenating "My name is " and the input string
}

//Function expression
 /*
 * You can assign a variable to a function using function expressions. 
 */
 let animal = function(name){ // function expression, a declared variable assigned to a function. 
     
 };

// 2. function call or invocation //
/*calling a function by its name invokes the code block. The number of arguments in the function call should be
  the same as the number of parameters in the function declaration.*/
  console.log(name("Obama"));//This function call will print "My name is Obama"
  
// 3. scope //
//functions can modify variables globally, but no code outside of the function can modify the function's local variables.//
let a = 1;//declare variable a and assign value of 1
function func(){//this function changes the value of a to 5
    a = 5;
    return;
}
func();//invoke function
console.log(a);//after invoking function, value of a is now 5 because function has reassigned global variable a

//4. closures//
/* A  combination of a function enclosed  with references to its surrounding state, known as the lexical environment.
*Closures gives you access to an outer function’s scope from an inner function. 
*In JS, closures are created every time a function is created, at function creation time.
*Every closure has three scopes, mentioned above: Local, Outer Function Scope, and Global Scope.*/

function makeFunc() { // function will execute 
  let name = 'Mozilla'; 
  function displayName() { //myFunc is a reference to the instance of the function displayName created when makeFunc is run
    console.log(name);
  }
  return displayName;
}

var myFunc = makeFunc();//when myFunc is invoked, the variable name remains available for use, and "Mozilla" is passed to the console.
myFunc();

/* NOTE: console.log and return are not the same thing. Return statements inside of a function body returns value/data.
*console.log returns undefined.
* Functions do not require parameters or arguments for a function to be fully functional.*/
         
