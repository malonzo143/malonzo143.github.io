/*
 * CONTROL FLOW:
 *
 * 0. The order in which the computer reads and performs an action.
 * A computer reads your code from right to left and from top to bottom. 
 * However, certain code strutures can change the order in which or code is read.
 * Example: Conditional statements and Loops.
 *
 * 1. Condtional statements include: If, Else if, Else, and Switch chains
 *
 * 2. Loops include: For, For-In, and While. 
 *    See loops section for additional notes.
 */

// 1. If statements //
let myAge = 26;
let yourAge = 21;
if (myAge > yourAge){ // condition check, with comparison operator to check "truthiness" of variables assignment
   return true; // code block
}


/*
 *Keyword to initiate If statement: If
 *If statements check a specific condtion and returns a boolean value.
 * Runs code in {} only if condition is true.
 * You can have as many if statements as you would like in your conditonal statement code block.
 * However, if your conditon is resolved within the first if statement, the remainder of the conditonal is not read, since condition has been met/resolved. 
 * Each if statement is a new conditon to be checked, and will be read from top to bottom, right to left
 *Using operators within your if,else if chain; can make your condition checks more specific in hopes of code resolving true for one condition.
 * You can have two conditions resolve to true, if you have multiple if statements in your code block. 
 * You can also have multiple comparison operators used in one line; see line 36. The && operator and < are used to test our values
 * Example below:
 */ 
 if(9>8){
     console.log("true"); // prints => true 
}if(9===9&&9<10){
     console.log("true"); // prints => true
}else{
    console.log("false"); 
}
 

// Else if Statements //
let a = 600;
let b = 150;
if (b > a){ // condtion check 
    return true; // code block
}else if(a > b){ // secondary condition check 
    return true; // code block 
}

/*
 *Keyword to initiate Else if statement: else if 
 *Else if statements also check a specific condtion which results to boolean value.
 * The code is read from top to bottom and right to left.
 *Else if, tells the computer to check a secondary condtion, if the first results to false. 
 * You are able to have an infinate amount of else-if statements in your code block. However, most programmers would state a switch statement would be preferred over numerous else if statements.
 * If using keyword swtich, make use you use keyword, break ensuring all parts of your code block are performed.
 * In an if-else-if chain, only one block of code gets executed, others are ignored.
 * Using operators within your if,else if chain; can make your condition checks more specific in hopes of code resolving true for one condition. 
 * 
 */

// 3. Else statements //
let dogsAge = 10;
let catsAge = 9;
if (catsAge > dogsAge){ // condtion check 
    return true; // code block
}else if(dogsAge > catsAge){ // secondary condition check 
    return true; // code block 
}else{          // final condition check 
    return false; // final code block 
}

/*
 *Keyword to initiate Else statement: else 
 *Else  statements are the end all be all in if,else if, else chain. 
 *If primary and secondary conditions result in false, else statement will run through code block. 
 *You can use else statement without an else-if statement. If must be present. 
 * Idealy, you only have on else statement per code block. 
 *However,if you were to have multiple else statements, only the first would be read due to the way code is read, top to bottom. All other else statements in block ignored.
 */
 
//4. Switch Statements//
let grade = 95; 
switch (true) {
    case grade >= 90: // If score >= 90
        console.log("A"); // prints ==> "A"
        break; // stops execution of code block
    case grade >= 80: // If score >= 80
        console.log("B"); // prints ==> "B"
        break; // stops execution of code block
    case grade >= 70: // if score >= 70
        console.log("C"); // prints ==> "C"
        break; // stops execution of code block
    case grade >= 60: // If score >= 60
        console.log("D"); // prints ==> "D"
        break; // stops execution of code block 
    default: // If grade <= 59
        console.log("F"); // prints ==> "F"
}

/*
 *Keyword to initiate switch statement: switch() 
 *Switch statements show many options of code block that can be executed.
 *Inside of keyword switch(), place true or false for condtions to follow.
 *Switch statements are evaluated once and compared with values in each case.
 *If a case has a conditional match, code block performed.
 *Otherwise, default code block will be initiated. 
 */





