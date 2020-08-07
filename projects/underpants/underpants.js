// This makes the arguments variable behave the way we want it to and a few
// other things. For more info:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode
'use strict';

var _ = {};


/**
* START OF OUR LIBRARY!
* Implement each function below it's instructions
*/

/** _.identity
* Arguments:
*   1) Any value
* Objectives:
*   1) Returns <value> unchanged
* Examples:
*   _.identity(5) === 5
*   _.identity({a: "b"}) === {a: "b"}
*/

// The indentity function takes in any value and returns the value it contains.
_.identity = function(value){ // underscope indentity assigned to a function w/ value as param 
    //return value unchanged 
    return value;
};

/** _.typeOf
* Arguments:
*   1) Any value
* Objectives:
*   1) Return the type of <value> as a string
*       Types are one of:
*          - "string"
*          - "array"
*          - "object"
*          - "undefined"
*          - "number"
*          - "boolean"
*          - "null"
*          - "function"
* Examples:
* _.typeOf(134) -> "number"
* _.typeOf("javascript") -> "string"
* _.typeOf([1,2,3]) -> "array"
*/

// typeOf takes any value and returns value as a string of the value's datatype.
_.typeOf = function(value){// create a function expression _.typeOf and assign to a function, with only parameter of value
    if (typeof value === 'object'){ //Using and if, else if, else chain, testing data structures against their type
        if (Array.isArray(value)){  //If a value is strictly equal to an object and if the value is an array 
        return "array";//return array 
        } else if (value === null) {// If the first two conditions are not met, run through else if statement 
            return "null";// If value is strictly equal to null, return null
        } else if (typeof value === "object"){ // If code fails all three previous conditions, but is an object, not an array
            return "object";// return object 
        }
    } else {// Otherwise, if all tests do not pass --
        return typeof value; // return the value's datatype.  
    }
};


/** _.first
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the first element in <array>.
*   3) Otherwise, return the first <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.first("ponies", 1) -> []
*   _.first(["a", "b", "c"], "ponies") -> "a"
*   _.first(["a", "b", "c"], 1) -> "a"
*   _.first(["a", "b", "c"], 2) -> ["a", "b"]
*/
//first checks if an array or number is given.If an array is not given [] is returned, if number is not given or not a number, the first element of the array will be returned.
_.first = function(array, number){// create function expression _.first, with params array and number
    if (Array.isArray(array) === false || number < 0){// Using if statement, determine if array is not an array or if number negative
        return [];//return array 
    }
    if (typeof number !== "number" || number === null){// If number is not a number, or number is null
        return array[0];//return array at index 0 
    }
    return array.slice(0, number);//return the modified array with first number in array
};

/** _.last
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the last element in <array>.
*   3) Otherwise, return the last <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.last("ponies", 2) -> []
*   _.last(["a", "b", "c"], "ponies") -> "c"
*   _.last(["a", "b", "c"], 1) -> "c"
*   _.last(["a", "b", "c"], 2) -> ["b", "c"]
*/
// last underscore function takes an array and a number, determines type of datatype. If not an array or a negative #, returns []. If NaN or null returns last index in array

_.last = function(array,number){// Create function expression _.last with parameters array, number 
    if(Array.isArray(array) === false || number < 0){// If array is an array or number is negative,
        return [];//return array literal 
    }
     if (typeof number !== "number" || number === null){// If number is NaN or number is null
        return array[array.length - 1] ;//return the last item in the array. 
    }
    

    if(array.length <= number){// if number is greater than array length,
    return array; //return array 
}
    return array.slice(number -1, array.length);// returns the last number item in array, using slice method 

};


/** _.indexOf
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return the index of <array> that is the first occurrance of <value>
*   2) Return -1 if <value> is not in <array>
*   3) Do not use [].indexOf()!
* Edge Cases:
*   1) What if <array> has multiple occurances of val?
*   2) What if <val> isn't in <array>?
* Examples:
*   _.indexOf(["a","b","c"], "c") -> 2
*   _.indexOf(["a","b","c"], "d") -> -1
*/
//Indexof function returns the index of an array the first occurence of that value; if value is not an array returns -1.
 _.indexOf = function (array, value){// Create an function expression _.indexOf with params array and value
        if (array.includes(value)){// if array has a value within the array 
            for(let i = 0; i < array.length; i++){// run a for loop, to access items in array 
                if(array[i] === value){// if array has a value 
                    return i;// return that value 
                }
            }
        } else {//Otherwise,
            return -1;// return -1. 
        }
    };

/** _.contains
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return true if <array> contains <value>
*   2) Return false otherwise
*   3) You must use the ternary operator in your implementation.
* Edge Cases:
*   1) did you use === ?
*   2) what if no <value> is given?
* Examples:
*   _.contains([1,"two", 3.14], "two") -> true
*/
//Contains returns boolean value if testing value is inside of array.
_.contains = function(array,value){// create an function expression of _.contains with parameters, array and value 
    return array.includes(value) ? true : false;// return true if array includes value, using includes method. False otherwise 
};
//Even if passing value is not a number, it will return false. Only will print true if value is inside of the array. 


/** _.each
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) if <collection> is an array, call <function> once for each element
*      with the arguments:
*         the element, it's index, <collection>
*   2) if <collection> is an object, call <function> once for each property
*      with the arguments:
*         the property's value, it's key, <collection> 
* Examples:
*   _.each(["a","b","c"], function(e,i,a){ console.log(e)});
*      -> should log "a" "b" "c" to the console
*/
//each 

_.each = function(collection,someFunction){
    
    if (typeof collection === "object"){// if collection is an object 
        for(let key in collection){// using for in loop to acess keys in collection 
           someFunction(collection[key],key, collection) 
        }
        
    }
    else{// If collection is an array
        for(let i = 0; i<= collection.length - 1; i++){// use a for loop to access elements in array 
            someFunction(collection[i],i, collection) // calling function with element, index, and collection as args
        }
    }
};



/** _.unique
* Arguments:
*   1) An array
* Objectives:
*   1) Return a new array of all elements from <array> with duplicates removed
*   2) Use _.indexOf() from above
* Examples:
*   _.unique([1,2,2,4,5,6,5,2]) -> [1,2,4,5,6]
*/

// unique returns an array with duplicate values removed
_.unique = function(array){// create function expression with parameter array 
    let newArray = [];// create a variable newArray for our data to be pushed into post loop
    for(let i = 0; i< array.length; i++ ){// Using for loop, loop over entire array
        if(array.indexOf(array[i]) === i ){//At first index of array 
            newArray.push(array[i]);//push data from array into new array 
        }
    }
    return newArray;//return new array 
};




/** _.filter
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned true
* Edge Cases:
*   1) What if <function> returns something other than true or false?
* Examples:
*   _.filter([1,2,3,4,5], function(x){return x%2 === 0}) -> [2,4]
* Extra Credit:
*   use _.each in your implementation
*/

//Filter looks for a specified value and returns in an array
_.filter = function (array,func){// Create a function expression with parameters array and function 
    const result = [];// set a constant variable to array literal, for data to be pushed into later. 
    for(let ind = 0; ind <= array.length - 1; ind++){// Using for loop, loop over entire array 
        if(func(array[ind],ind,array) === true){// if arguments are true,
            result.push(array[ind]);// push array data into result array 
        }
    }
    return result;//return result 
};


/** _.reject
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned false
*   3) This is the logical inverse if _.filter(), you must use _.filter() in your implementation
* Examples:
*   _.reject([1,2,3,4,5], function(e){return e%2 === 0}) -> [1,3,5]
*/
//reject 
_.reject = function(array,func){// create a function expression _.reject with parameters array and function 
    const accept = _.filter(array,func);// constant variable using prior function _.filter 
    const reject = [];// create constant variable,reject set to array literal to push array data into. 
    for(let i = 0; i <= array.length -1; i++){// Using for loop, to loop over array 
        let add = true;// creating a variable add, with boolean value true
        for(let j = 0; j<=accept.length - 1; j++){// for loop accessing function
            if(array[i]===accept[j]){ //if array data and function data strictly match 
                add = false;// set add to false 
            }
        }
        if(add){
            reject.push(array[i]);// push data from array into reject array. 
        }
    }
    return reject;// return reject array 
};
    

/** _.partition
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) Call <function> for each element in <array> passing it the arguments:
*       element, key, <array>
*   2) Return an array that is made up of 2 sub arrays:
*       0) An array that contains all the values for which <function> returned something truthy
*       1) An array that contains all the values for which <function> returned something falsy
* Edge Cases:
*   1) This is going to return an array of arrays.
* Examples:
*   _.partition([1,2,3,4,5], function(element,index,arr){
*     return element % 2 === 0;
*   }); -> [[2,4],[1,3,5]]
}
*/
//partition returns two sub arrays, one with values that are truthy and one that are falsey
_.partition = function(array,func){
    const results = [[],[]]; // creating results variable assigned to array, with arrays literals inside of it 
    for(let i = 0; i<= array.length -1; i++){ // for loop over array entirety, incrementing by 1 each iteration
        if(func(array[i],i,array) === true){ //
            results[0].push(array[i]);// if true, push to 0th index of array 
        }else{// Otherwise,
            results[1].push(array[i]);// false, push to 1st index of array 
            
        }
    }return results;// return results array
};


/** _.map
* Arguments:
*   1) A collection
*   2) a function
* Objectives:
*   1) call <function> for each element in <collection> passing the arguments:
*        if <collection> is an array:
*            the element, it's index, <collection>
*        if <collection> is an object:
*            the value, it's key, <collection>
*   2) save the return value of each <function> call in a new array
*   3) return the new array
* Examples:
*   _.map([1,2,3,4], function(e){return e * 2}) -> [2,4,6,8]
*/
//map saves return value and uses the value in new array 

_.map = function(collection,func){
     const result = [];// constant variable result w/ array literal. 
    if (typeof collection === "object"){// if collection is an object 
        for(let key in collection){// using for in loop to acess keys in collection 
           result.push(func(collection[key],key, collection) );// push data from object into result array. 
        }
        
    }
    else{// If collection is an array
        for(let i = 0; i<= collection.length - 1; i++){// use a for loop to access elements in array 
            result.push(func(collection[i],i, collection));// push data from array into result array. 
        }
    }
    return result;// return result array. 
};


/** _.pluck
* Arguments:
*   1) An array of objects
*   2) A property
* Objectives:
*   1) Return an array containing the value of <property> for every element in <array>
*   2) You must use _.map() in your implementation.
* Examples:
*   _.pluck([{a: "one"}, {a: "two"}], "a") -> ["one", "two"]
*/

_.pluck = function(array,property){// Create a function expression _.pluck, parameters array, property.
    const result = [];// Constant variable assigned to array literal for data to be pushed into 
    for(let i = 0; i <= array.length - 1; i++){// for loop over entire array. 
        result[i]=_.map(array,function(){return array[i][property]});// result array assigned to map functionn with array, function properties.
        result[i]=result[i][0];//data from loop assigned to result array at index 0 
    }
    return result;// returns an array containing values of property at every element in the array. 
};

/** _.every
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*      if <collection> is an array:
*          current element, it's index, <collection>
*      if <collection> is an object:
*          current value, current key, <collection>
*   2) If the return value of calling <function> for every element is true, return true
*   3) If even one of them returns false, return false
*   4) If <function> is not provided, return true if every element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.every([2,4,6], function(e){return e % 2 === 0}) -> true
*   _.every([1,2,3], function(e){return e % 2 === 0}) -> false
*/

_.every = function(collection, aTestFunc){
  if(typeof aTestFunc !== "function"){ aTestFunc = _.identity}// if testFunction does not exist or is not a function, a testFunc = _.identity.
    if((Array.isArray(collection))){ // loop checking if is an array
        for (let i = 0; i < collection.length; i++){ // looping through collections 
       
            if((aTestFunc(collection[i], i, collection)) === false){ // checking if triggers false with function parameter 
                return false; //returning false if so 
        }
   //  return true; //returning true if no falses are present in collections 
    }
    if((typeof collection) === 'object'){ // checking if object
        for (var key in collection){ // looping through if object 
            if ((aTestFunc(collection[key], key, collection) === false)){ // checking if any falses are triggered while looping through with function 
                return false; //returning false if so 
            }
        }
   // return true; //returning true if not
    }
  //  }
}
return true;
};



/** _.some
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*       if <collection> is an array:
*        current element, it's index, <collection>
*       if <collection> is an object:
*        current value, current key, <collection>
*   2) If the return value of calling <function> is true for at least one element, return true
*   3) If it is false for all elements, return false
*   4) If <function> is not provided return true if at least one element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.some([1,3,5], function(e){return e % 2 === 0}) -> false
*   _.some([1,2,3], function(e){return e % 2 === 0}) -> true
*/

_.some = function(collection,testF){// Create function expression with collection and testF(for function)as parameters
    if (typeof collection === "object"){// if collection is an object 
        for(let key in collection){// using for in loop to acess keys in collection 
            if(testF){// If statement for function 
                if(testF(collection[key],key, collection) ? true:false){// if value of calling function is true for all elements 
                    return true;//return true 
                }
            }else{//Otherwise, 
                if(collection[key] ? true:false){// if value of calling function is true for at least one element
                    return true;//return true 
                }
            }
        }
        return false;//return false 
    }
    else{// If collection is an array
        for(let i = 0; i<= collection.length - 1; i++){// use a for loop to access elements in array 
            if(testF){// If statement 
                if(testF(collection[i],i, collection) ? true:false){// If value is true for all elements 
                    return true;//return true 
                }
            }else{//Otherwise, 
                if(collection[i] ? true:false){//if value is true for one element 
                    return true;//return true 
                }
            }
        }
        return false;//return false 
    }
};



/** _.reduce
* Arguments:
*   1) An array
*   2) A function
*   3) A seed
* Objectives:
*   1) Call <function> for every element in <collection> passing the arguments:
*         previous result, element, index
*   2) Use the return value of <function> as the "previous result"
*      for the next iteration
*   3) On the very first iteration, use <seed> as the "previous result"
*   4) If no <seed> was given, use the first element/value of <collection> as <seed> and continue to the next element
*   5) After the last iteration, return the return value of the final <function> call
* Edge Cases:
*   1) What if <seed> is not given?
* Examples:
*   _.reduce([1,2,3], function(previousSum, currentValue, currentIndex){ return previousSum + currentValue }, 0) -> 6
*/

_.reduce = function(array,func,seed){// Create function expression with array,function,and seed as parameters. 
    var prev = typeof seed === "number" ? func(seed,array[0],0):array[0];// create variable assigned to seed as a number,at 0th index 
    for(let i = 1; i <= array.length - 1; i++){// for loop to access entire array 
        prev = func(prev, array[i], i);//re-assign variable previous to function call 
    }
    return prev;//return previous 
};

/** _.extend
* Arguments:
*   1) An Object
*   2) An Object
*   ...Possibly more objects
* Objectives:
*   1) Copy properties from <object 2> to <object 1>
*   2) If more objects are passed in, copy their properties to <object 1> as well, in the order they are passed in.
*   3) Return the update <object 1>
* Examples:
*   var data = {a:"one"};
*   _.extend(data, {b:"two"}); -> data now equals {a:"one",b:"two"}
*   _.extend(data, {a:"two"}); -> data now equals {a:"two"}
*/


_.extend = function(a,...more){// Create a function expression with parameters, 
    for(let i = 0; i<= more.length -1; i++){// Using for loop to loop over entire object 
        for(var key in more[i]){// using for in loop to access the keys inside the object 
            a[key] = more[i][key]; //assigning values to one another 
        }
    }
    return a;// return the updated object 1 
};
//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = _;
}
