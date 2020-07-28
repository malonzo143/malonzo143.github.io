/*
 * SCOPES:
 *
 * 0. Determines the access of the created variable to a function. 
 *  There are two different types of scopes: Global, Local/ Block scope. 
 *  Depending on where your variable is located within a scope, grants visibility of that variable to the function's use.
 *  Declarations such as var, let, and const fall into different scopes, and have different rules regarding hoisting as mentioned previously. 
 *
 *
 * 1. Keyword var or non declared variables fall into the global scope. Meaning, you can access the data assigned to the variable
 *  anywhere within the code. This is NOT the same for block or local scopes. 
 *
 * 2. Let and const key are block scoped, meaning if used within a conditional statement, they can only be used within that block of code
 *  These are not global, and if used outside of the scope, will not run properly if at all. 
 */

// 1. Global Scope //
var strings = function (string){ // Assign function expression strings with a parameter of string 
    return strings;// When returning your variable and what is assigned to it. You usually do not want to have a variable with the same name
}                   // as a parameter, the computer will not know what you are referencing within your code block. If you were within function body, the function name would be referenced, same as if you were using it globally. 
// 

var aString = function(string){ // By simply changing your variable name, you can easily decide what is the variable and which is parameter. 
    return aString;
}

/*
 * This variable can be called anywhere within the code, once assigned, since it is global. I can call it in a completley different function and implement is
 * since I declared the function with keyword var. To be in the function body, the parameter a will be called sicne it is in the local scope. 
 * The interpreter could look outside of it's scope if there was nothing defined, but since the parameter is being returned and called within the scope, the variable is found.
 * To be in the global scope, we would access 'var a'. Unlike the local scope that can go to the global scope, the global scope cannot go to the local scope. 
 */
 


// 2. Block/Local Scope //
//Local Scope

//Local Scope is anything inside the function or condtional statement  

function streetName(){ //creating a function named streetName, with no parameters 

      var streetName = "Wylie"; //declaring and assigning variable streetName to string "Wylie".

   

}

console.log(streetName); //prints to console => Reference Error

/* this example is of a Local Scope. 
*Although we are trying to console.log(streetName, since 'Wylie' is inside the function and we are trying to get the value from outside of the local scope, the code  will not evaluate.
 */
// Local Scope

function favoritePlace(){ //creating a function called favoritePlace.

      var favoriteState = "London"; //declaring and assigning variable to string of "London".

      console.log(favoritePlace); //prints to console => London

   

}

favoritePlace();

/* Another  example of a Local Scope. 
 *The variable is declared and assigned inside  of the function, meaning they are both in local scope, allowing and accessing the function to be called and return 'London'. */


