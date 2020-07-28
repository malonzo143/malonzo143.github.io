/*
 * OPERATORS:
 *
 * 0. Operators encompass a large variety of tools used in Javascript programming. They can be used to assign, perform
      arithmetic, increment values, perform logical expressions, and comparisons, among other things.
 */

// 1. assignment//

/* Assignment operators, live up to their name and assign value to variables.
* Our most frequent assignement operator "=" takes our variables from the declaration to initialization phase, by giving/distributing values. 
*/

let x;//declare x as a variable
x=1;//assigns a value
x+=1;//increments by a value and assigns
x-=1;//decrements by a value and assigns
x*=1;//multiplies by a value and assigns
x/=1;//divides by a value and assigns
x%=1;//divides by a value and takes the remainder and assigns

// 2. arithmetic //

/* Arithmetic operators perform mathmatical expressions between variables and/or values.
* Think of Math class! 
*/

x+1;//adds a value to an already assigned variable
x-1;//subtracts a value to an already assigned variable
x**1;//raises an already assigned variable to a power
x*1;//multiplies a value by an already assigned variable
x/1;//divides an already assigned variable by a value
x%1;//divides an already assigned variable by a value and takes the remainder

// 3. increment //

/* Increment operators add or remove value to operand and return their values.
*
*/

x++;//increments an already assigned value by 1;
x--;//decrements an already assigned value by 1;

// 4. logical //

/* Logical operators determine the logic or condition of which an expression is met. 
* Think of a condtion check, or your if, else if statements. 
* Without our logical or comparison operators, these could not be performed.
*/

//&& and//
//|| or//
//! not//
//!! false then true//

let y = 25; // assigning value of 25 to y.
if(y >=21 && y<=25){ // if value meets both conditions on either side of &&, code block is performed 
    console.log("true");// prints to console => true 
}else{                  // Otherwise, 
    console.log("false"); // orints to console => false 
}

// 5. comparison //

/* Comparison operators check values against one another to return a boolean value, to then continue the code blocks function
*
*/

//== loosely equal to// used for comparing two variables, but it ignores the datatype of variable.
//=== strictly equal to// used for comparing two variables, but this operator also checks datatype and compares two values.
//!= not equal to//
//!== not equal value/type//
//> greater than//
//< less than//
//>= greater than or equal to//
//<= less than or equal to//

let z = 30; // assiging value of 30 to variable z 
if(z == 30 && z === "30"){ //If both conditions met on either side of &&
    console.log("Passes both tests"); // prints => "Passes both tests"
} else if(z == 30 || z === "30"){ // if z's value is 30 or z strictly equals string of 30
    console.log("Passes one test"); // prints => "Passes one test"
}else{                              // Otherwise,
    console.log("Does not pass test"); // prints => "Does not pass test"
}
// this will print to the console "Passes one test", when ran since z has a loosely checked value of 30, but does not have string value of "30".

// 6. Unary //

/* Unary operators takes a single operand or argument and performs an action. 
*
*/ 

//increment operators are included in this type of operator//
typeof x; //returns data type of argument;
//delete removes element of array or property of object//

// 7. ternary //

/* Ternary operators take three operands or arguments and tests them against on another. 
* Can be used as shorthand for an if statement 
*Takes a condition and a truthy result as well as a falsy result, separated by a : and led by a ?
*/

x > 5 ? "more than 5":"less than 5";//if x is greater than 5, return "more than 5", otherwise return "less than 5"

