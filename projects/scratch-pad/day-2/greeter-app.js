// #!/usr/bin/env node

'use strict';

/** 
 * IN CLASS EXERCISE: Greeter App
 *
 * Using if, else-if and else, AND depending on the hour of the day, 
 * write a greeting program that prints a greeting to the screen like so: 
 *
 * // hour is 0-11
 * Good Morning!
 *
 * // hour is 12-16
 * Good Afternoon! 
 *
 * // hour is 17-21
 * Good Evening!
 *
 * // hour is 22-24 
 * Good Night!
 *
 * TIPS: 
 * 
 *   a. At what threshold does morning become afternoon? What comparison 
 *      can be used to test that the hour is within the morning threshold. 
 *      It's best to be consistant and use the SAME type of comparison for 
 *      each threshold. 
 *   
 *   b. Does the last threshold even need an else-if?
 * 
 *   c. The tests are CASE sensitive, so you MUST console.log('Good Night!') with
 *      the exact case.
 */
 //I: a number 
 //O: a string 
 //C: N/A
 //E: N/A


function greeter(hour) {
    // YOUR CODE BELOW HERE //
    
      //Use an if,else if, else chain to complete the function.
    if(hour >=0 && hour <=11){// If hour is greater than or equal to 0 and less than or equal to 11
        console.log("Good Morning!");//print "Good Morning!"
    }else if(hour >=11 && hour <12){//If the 1st condition fails, the 2nd will run. Hour greater than or equal to 11 and less than 12
        console.log("Good Morning!");//will print to console "Good Morning!"
    }else if(hour >=12 && hour <=16){//If 2nd condition fails, the 3rd will run. Hour greater than or equal to 12 and less than or equal to 16
        console.log("Good Afternoon!");// prints to console "Good Afternoon!"
    }else if(hour >=16 && hour <17){// If 3rd condition fails, and hour is greater than or equal to 16 and less than 17
        console.log("Good Afternoon!");// will print "Good Afternoon!"
    }else if(hour >=17 && hour <=21){// If 4th condition fails, and hour is greater than or equal to 17 and less than or equal to 21 
        console.log("Good Evening!");// will print to console "Good Evening!"
    }else if(hour >=21 && hour <22){// If the 5th condition fails, and hour is greater than or equal to 21 and less than 22
        console.log("Good Evening!")// will print to console "Good Evening!"
    }else if(hour >=22 && hour <=24){// If 6th condition fails, and hour is greater than or equal to 22 and less than or equal to 24
        console.log("Good Night!")// prints to console, "Good Night!"
    }else{// As fail safe, if all conditions fail
        console.log("What time is it?")//will print to console "What time is it?"
    }
    
    
    
    
    
    // YOUR CODE ABOVE HERE //
}

/*
 * To test our greeter when developing, we need to fake some input data, ie, 
 * the hour, so just change the input value to check your work.
 * 
 * In a more realistic setting, you might do something like this to get the 
 * actual system hour:
 *
 * var today = new Date();
 * var hour = today.getHours();
 */

greeter(11);



// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.greeter = greeter;
}