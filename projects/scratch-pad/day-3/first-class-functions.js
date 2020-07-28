// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: FIRST CLASS FUNCTIONS
 */

/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is greater than the 
 * base.
 */
 //I: a base string/number
 //O: a boolean
 //C: N/A
 //E: N/A
function createGreaterThanFilter(base) {
    // YOUR CODE BELOW HERE //
    return function greaterThan(value){// return a function which has value as param, we need something to test against our base 
        if(value > base){// If else chain, testing if value is greater base, return true 
        return true;
    }else{// Otherwise, 
        return false;// return false
    }
    
    };
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is less than the 
 * base.
 */
 
 //I: a base, string/number
 //O: boolean
 //C: N/A
 //E: N/A
function createLessThanFilter(base) {
    // YOUR CODE BELOW HERE //
    return function lessThan(value){ // creating another function to test against our base, a value
        if(value < base){ // if base is greater than input value, return true 
            return true;
        }else{// Otherwise,
            return false;// return false
        }
    };
    
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given a startsWith character, which will be a single character, return a 
 * Function that tests whether a given String starts with the startsWith 
 * character.
 */
 //I: a string 
 //O: a boolean
 //C: N/A
 //E: N/A
function createStartsWithFilter(startsWith) {
    // YOUR CODE BELOW HERE //
     return function starts(string){//declare new function starts and input value as string.
        
        if (string.toLowerCase().charAt(0) == startsWith.toLowerCase()){// if string at index 0 is loosely equal to startsWith at index 0 
            return true;//return true
        }else{//otherwise,
            return false;//return false;
        }
     };
   
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given a endsWith character, which will be a single character, return a 
 * Function that tests whether a given String ends with the endsWith 
 * character.
 */
 //I: a string character
 //O: a boolean
 //C: N/A
 //E: loosely equal comparsion
function createEndsWithFilter(endsWith) {
    // YOUR CODE BELOW HERE //
         return function ends(string){//declare new function starts and input value as string.
        
        if (string.toLowerCase().charAt(string.length - 1) == endsWith.toLowerCase()){// if lowercased string at the end of string losely equals endwith lowercase
            return true;//return true
        }else{//Otherwise,
            return false;//return false 
        }
     };
    
    
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an Array of Strings and a Function designed to modify a String, 
 * return an Array of the Strings, modified.
 * 
 * TIP: You need to loop over the Strings, right? We need to pass each String to 
 * the modify Function, but we need to collect the results into some collection.
 */
 //I: an array of strings
 //O: modified array of strings
 //C: N/A
 //E: for in loop
function modifyStrings(strings, modify) {
    // YOUR CODE BELOW HERE //
        var array = [];//create array literal for items to be pushed into post loop
    for (var i in strings){//for in loop over strings 
        array.push(modify(strings[i]));//push string information into array from loop
    }
    return array;//return information so, function can be called/initiated.
    
    
    
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an Array of Strings and a Function designed to test the String in some 
 * way and return a Boolean on whether it passed, return true if ALL Strings pass the test.
 * 
 * Imagine you had a list of names, and you wanted to test they all 
 * begin with "C", or they are all exclaimations that end with "!".
 * 
 * TIP: You need to loop over the Strings, right? And pass them to the test?
 */
 //I: a collection of strings
 //O: a boolean value
 //C: N/A
 //E: a for in loop and condition check 
function allStringsPass(strings, test) {
    // YOUR CODE BELOW HERE //
        for(var i in strings){// for in loop over string
        if(test(strings[i])){//all strings pass, go out of loop and return true
            
        }else{//otherwise,
            return false;//return false
        }
    }
    return true;//return true 
    
    
    
    
    // YOUR CODE ABOVE HERE //
}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.createGreaterThanFilter = createGreaterThanFilter;
    module.exports.createLessThanFilter = createLessThanFilter;
    module.exports.createStartsWithFilter = createStartsWithFilter;
    module.exports.createEndsWithFilter = createEndsWithFilter;
    module.exports.modifyStrings = modifyStrings;
    module.exports.allStringsPass = allStringsPass;   
}