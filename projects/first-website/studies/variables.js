/*
* VARIABLES:
*
* 0. To hold things in memory during the life-cycle of a program, we can use variables.  Variables
* are named identifiers that can point to values of a particular type, like a Number, String,
* Boolean, Array, Object or another data-type.  Variables are called so because once created, we
* can CHANGE the value (and type of value) to which they point.
*
* 1. To create a variable we use the keyword, var, followed by a name (id or alias) for our
* variable.You will want this name to be easily identifiable in your code, for later use.
*
* 2. There are 2 phases of using variables: declaration and initialization (or assignment).
*/

// 1. declaration //
var myName;// creating your variable and giving an name that relates to what your variable contains.

/*
* At the declaration phase, the variable myName is undefined because we have NOT initialized
* it to anything
*/
console.log(myName); // prints => undefined

// 2. initialization or assignment //
myName = 'john';/* with your newly created variable myName, assign or use '=' and assign to your correlating value.
                    Here, your name is set to equal "John".*/
console.log(myName); // prints => john

// 3. re-assignment //
myName = 'bob'; /* variables can be re-assigned.*/
console.log(myName); // prints => bob

// NOTE: We can assign and re-assign anything to a variable - we cannot do this with constants //
var myVariable = 1; // assigning variable to numeric value 1
myVariable = true; // updating value of myVariable to boolean true
myVariable = "someString"; // updating myVariable again, to string of "someString"
console.log(myVariable); // prints ==> someString 
                        /* someString prints to console, not true, or 1, since value attached to myVariable has been updated    
                        most reccently to someString.*/

// 4. Let //
/* 
 *   0. Variable let is similar to var in intialization and declaration. However it differs in the allowance of let's scope. 
 * Var is in the global scope and can be called throughout a program. Whereas, let can be used anywhere in our code, but is bounded to block scope. 
 * Let does not create properties on global objects. 
 */
  
// 1.declaration //
let myFavoritePersonsName;// creating your variable and giving an name that relates to what your variable contains.

/*
* At the declaration phase, the variable myFavoritePersonsName is undefined because we have NOT initialized
* it to anything.
* Variables declared with let are block scoped.
* If variable is declared inside of {}, the variable can not be used outside of those {}.
* ex: {let car = "red"}
* car can not be accessed outside of the {}.
*/
console.log(myFavoritePersonsName); // prints => undefined, just like variable example.

// 2.initialization or assignment //
let myFavoriteName = "Morgan";/* with your newly created variable myFavoriteName, assign or use '=' and assign to your correlating value.
                    Here, your favorite name is set to equal "Morgan".*/
console.log(myFavoriteName); // prints => Morgan 

/*
* You would want to use let over var to re-assign a variable.
* ex. var b = 25; // b is = to 25.
*     {var b = 1000; // b has now been re-assigned to 1000 and is no longer 25. 
*     }
*     console.log(b); // prints ==> 1000
* 
* ex 2. var b = 25; // b is = 25.
*       {let b = 1000 // b is = 1000;
*       } 
*       console.log(b); // ==> prints 25 due to block scope
*/


// 5. Const

/*
* 0. Const is a constant primative value located in block scope. 
* Const does not assign constant values, but references, and can change properties on objects. 
*/

// 1.declaration //
//const myFavoriteDrink// creating your variable and giving an name that relates to what your variable contains.
/*
* At the declaration phase, the variable myFavoriteDrink is undefined because we have NOT initialized
* it to anything.
* Variables declared with const are block scoped.
* If variable is declared inside of {}, the variable can not be used outside of those {}.
* ex: {const car = "red"}
* car can not be accessed outside of the {}.
*/
//console.log(myFavoriteDrink); // prints => syntax error since const has not been initialized. 

// 2.initialization or assignment //
const myFavoriteGame = "gin";/* with your newly created variable myFavoriteGame assign or use '=' and assign to your correlating value.
                   // Here, your favorite game is set to equal "gin".*/
//console.log(myFavoriteGame); // prints => "Gin"

/*
* Const objects can change.
* ex. const dog = { type: "dog", age: "5", color: "black"};
*    dog.color = "blue"; // You can change the property of const.
*     dog.name = "Rover"; // You can also add a property
*     console.log(dog); // prints ==> {type: "dog", age: "5", color: "blue", name:"Rover"};
* HOWEVER, const primitive values can not change.
* ex 2. const height = 5.5; // our constant data shows height is 5.5.
*       const height = 6; // This will print an error, since const has been defined. 
*       const height - 5.5 + 8; // This will also give an error since const has been defined and value can not change. 
*       
*/

// 6. Hoisting //

/*
*0. A mechanism in Javascript that lifts variables and function declarations to the top of 
* their scope, before a code block is performed. 
* Variables let and const are NOT hoisted due to their scope. 
* If variable is declared and initialized, the value will return undefined. 
*/


