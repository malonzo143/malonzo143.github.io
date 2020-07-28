// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: LOOPS
 */

/** 
 * Given an input Array, loop forward over the Array and print its values 
 * using console.log().
 */
 //I: an array 
 //O: a value
 //C:N/A
 //E:for loop
function printArrayValues(array) {
  // YOUR CODE BELOW HERE //
  for(let i = 0; i<=array.length;i++){// for loop starting at 0, loop through entire array length, increment by 1 each loop
    console.log(array[i]);// prints value inside of array each iteration.
  }
  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Array, loop backwards over the Array and print its values 
 * using console.log().
 */
 //I: an array
 //O: an arrays value in reverse order
 //C:N/A
 //E:N/A
function printArrayValuesInReverse(array) {
  // YOUR CODE BELOW HERE //
  for(let i =array.length-1;i>=0;i--){// Use a for loop, start at array's end, stop at 0, decrement each iteration
    console.log(array[i]);// print values from array, at i each iteration.
  }
  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return an Array containing the Object keys.
 */
 //I: an object 
 //O: an object's value as array
 //C:N/A
 //E:N/A
 
function getObjectKeys(object) {
  // YOUR CODE BELOW HERE //
  return Object.keys(object);//access keys from object when returned, using dot notation 
  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, loop over the Object and print its keys 
 * using console.log().
 */
 //I: an object/collection
 //O: keys of object printed to console
 //C:N/A
 //E:For in loop
 
function printObjectKeys(object) {
  // YOUR CODE BELOW HERE //
  for (var key in object){ // for in loop to iterate over objects' keys
    console.log(key);// prints each key in object to console 
  }
  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return an Array containing the Object's values.
 */
 //I: an object
 //O: object's value
 //C:N/A
 //E:N/A
function getObjectValues(object) {
  // YOUR CODE BELOW HERE //
  let array = []; // array literal for info from loop to push into 
  for(var key in object){// for in loop to iterate over keys in object 
    console.log(object);// prints entire object 
    console.log(object[key]);// prints values in key of object 
    array.push(object[key]);// pushes info from for in loop into array literal
  }
  
  return array;// exits loop, returns array functionality
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, loop over the Object and print its values 
 * using console.log().
 */
 //I: an object 
 //O: an objects values printed to console
 //C: Use console.log
 //E:N/A
function printObjectValues(object) {
  // YOUR CODE BELOW HERE //
  
  for(var key in object){// for in loop to iterate over object
    console.log(object[key]);// prints values at each key in object to console 
  }
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return the number of key/value pairs stored within that Object.
 */
 //I: an object
 //O: a number 
 //C: N/A
 //E: N/A
function getObjectLength(object) {
  // YOUR CODE BELOW HERE //
  
  return Object.keys(object).length;// if consoled, would show the amount of keys in this object. 
                                    //accesses keys inside object first,then reads length, which will input the number of keys in this object.
  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, how might we loop over the Object IN REVERSE and 
 * print its values using console.log()?
 */
 //I: an object
 //O: values printed in reverse order 
 //C: reverse order
 //E: N/A
function printObjectValuesInReverse(object) {
  // YOUR CODE BELOW HERE //
  let array = []; // array literal for our info from loop to be pushed into at a later point 
  for(var key in object){// for in loop over objects entirety
    array.push(object[key]);// pushing values from object's keys into array literal created earlier
  }
          //Outside of for in loop, create another loop to access elements from our array at last index
  for(let i = array.length -1; i>-1; i--){// for loop over array at last index, until front on array, decrement each loop
    console.log(array[i]);// print values from for loop to console 
  }
  
  
  // YOUR CODE ABOVE HERE //
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.printArrayValues = printArrayValues;
    module.exports.printArrayValuesInReverse = printArrayValuesInReverse;
    module.exports.printObjectValues = printObjectValues;
    module.exports.getObjectValues = getObjectValues;
    module.exports.getObjectKeys = getObjectKeys;
    module.exports.printObjectKeys = printObjectKeys;
    module.exports.getObjectLength = getObjectLength;
    module.exports.printObjectValuesInReverse = printObjectValuesInReverse;
}
