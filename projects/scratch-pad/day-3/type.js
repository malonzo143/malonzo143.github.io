// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: TYPE
 */

/** 
 * Given an input value, return true if the value is an Array, false if otherwise.
 * 
 * TIP: In JavaScript, how can we decipher if a value is an Array? Can typeof
 * work?
 */
 //I: a value 
 //O: a boolean
 //C: N/A
 //E: Methods to check what value is 
function isArray(value) {
    // YOUR CODE BELOW HERE //
        if(Array.isArray(value) === true){//if value strictly equals true
        return true;//return true
    }else if (Array.isArray(value) == true){//else if value loosely equals true
        return true;//return true
    }else if (Array.isArray(value) === false){//else if value strictly equals false
        return false;//return false
    }else if (Array.isArray(value) == false){//else is value loosely equals false
        return false;//return false
    }else{// else -fail safe 
        return false;//return false
    }
   
    
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input value, return true if the value is an Object intended as a 
 * collection, false if otherwise.
 * 
 * TIP: In JavaScript, how can we decipher if a value is an Object, but not 
 * null, not an Array, not a Date - all of these will return 'object' if used 
 * with typeof.
 */
 //I: a value 
 //O: a boolean
 //C: N/A
 //E: Method to check isObject 
function isObject(value) {
    // YOUR CODE BELOW HERE //
    if(typeof value === 'object'){// Use type of to narrow down which form value is. 
    if(Array.isArray(value) || value === null || value instanceof Date){//If value is an array or null or instance of date
        return false;//return false 
    }else{//otherwise,
        //if(Object.keys(value).length>0){//if the value within object at length 0
            return true;//return true
       // }else{//otherwise, 
        //    return false;//return false 
       // }
    }
}else{//otherwise 
    return false;//return false 
}
    
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input value, return true if is either an Array or an an Object 
 * intended as a collection, false if otherwise.
 * 
 * TIP: Similar to isObject, but we must return true if the value is an Array.
 */
 //I: a value
 //O: boolean
 //C: N/A
 //E: correct method to check value type 
function isCollection(value) {
    // YOUR CODE BELOW HERE //
        if (isArray(value) || isObject(value)){// if value is array or object 
        return true;//return true 
    }else{//Otherwise,
        return false;//returns false
    }
    
    
    
    
    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input value, return the type of the value as a String
 * 
 * Types are one of: 
 *    - "string"
 *    - "array"
 *    - "object"
 *    - "undefined"
 *    - "number"
 *    - "boolean"
 *    - "null"
 *    - "function"
 *    - "date"
 * 
 * Examples:
 *    typeOf(134) -> "number"
 *    typeOf("javascript") -> "string"
 *    typeOf([1,2,3]) -> "array"
 */ 
 //I: a value 
 //O: a string of value type
 //C: N/A
 //E: Correct method to check type 
function typeOf(value) {
    // YOUR CODE BELOW HERE //
        if(isArray(value)){//If value is array 
        return "array";//return array 
    }else if(isObject(value)){//if value is object 
        return "object";//return object 
    
    }else if (value === null){//if value is null 
        return "null";//return null 
    }else if (value instanceof Date){//if value is a date 
        return "date";//return date
    }else{//Otherwise,
        return typeof value;//return the type of value
    }
    
    
    
    
    
    // YOUR CODE ABOVE HERE //
}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.isArray = isArray;
    module.exports.isObject = isObject;
    module.exports.isCollection = isCollection;
    module.exports.typeOf = typeOf;
}
