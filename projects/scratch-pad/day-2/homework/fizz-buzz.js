// #!/usr/bin/env node

'use strict';

/**
 * 2: Fizz Buzz
 *
 *  a. Write a Function called fizzBuzz that prints the numbers from 1 to 100.
 *  b. BUT, for multiples of three print “Fizz” instead of the number.
 *  c. AND for the multiples of five print “Buzz”.
 *  d. FINALLY, for numbers which are multiples of both three and five print “FizzBuzz”.
*/
//I: a number
//O: a string of "Fizz","Buzz","FizzBuzz", or a number 
//C:N/A
//E:N/A
function fizzBuzz() {
    // YOUR CODE GOES BELOW HERE //
    //Use a for loop to iterate over a group of numbers 1-100
for(let i = 1; i<=100; i++){// start at 1, loop until 100, increment by 1 each loop
    if(i%3===0&&i%5===0){// If number is multiple of 3 and 5 
        console.log("FizzBuzz");// print FizzBuzz
    }else if(i%3===0){ //if first condition is not met, but is multiple of 3 
        console.log("Fizz");// print Fizz
    }else if(i%5===0){// If noth conditons above not met, but multiple of 5
        console.log("Buzz");//print Buzz
    }else{// If no conditions met above,
        console.log(i);//print number at i 
    }
}


    // YOUR CODE GOES ABOVE HERE //
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.fizzBuzz = fizzBuzz
}