// /////////////////////////////////////////////////////////////////////////////
// flatten /////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////
//I: an array 
//O: one array from two dimensional input 
//C: using flatten method 
//E: N/A 

function flatten(arr) {// function flatten w/ array as param 
    return arr.reduce(function (flat, toFlatten) {// Using reduce (flat, toFlatten) as args 
    return flat.concat(Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten);// Using concat and flat method to make 2 dimensional array be 1 array. 
  }, []);

}


// /////////////////////////////////////////////////////////////////////////////
// loop ////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

//I: start and stopping conditions 
//O: values printed to console 
//C: A loop, arrow functions 
//E:N/A 

function loop(start, test, update, body) { //function loop w/ params 
  for (let value = start; test(value); value = update(value)) {// for loop, testing conditions, and update for each iteration 
    body(value);// body of function w/ value as arg.
  }
}

loop(3, n => n > 0, n => n - 1, console.log);// Using arrow functions for loop 

// /////////////////////////////////////////////////////////////////////////////
// every ///////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

//I: array and comparison?
//O: array 
//C: N/A 
//E: N/A 

function every(array, predicate) { // function every with array and predicate as params 
  for (let element of array) { // for of loop to access element values in array 
    if (!predicate(element)) return false;// if element is not present, return false 
  }
  return true;// return true outside of loop 
}

function every2(array, predicate) {// every2 function w/ array and predicate as params 
  return !array.some(element => !predicate(element));// return if array does not have element and predicate does not have element 
}


// /////////////////////////////////////////////////////////////////////////////
// dominantDirection ///////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////
//I: string 
//O: a string 
//C: N/A 
//E: N/A 

function dominantDirection(text) { // function dominantDirection with text as param 
  let counted = countBy(text, char => { // countBy has text and character inside of object 
    let script = characterScript(char.codePointAt(0));// script assigned to characterscript at 0th index. 
    return script ? script.direction : "none"; // return script if direction has "none"
  }).filter(({name}) => name != "none");// filter function, name object to name if "none" not present 

  if (counted.length == 0) return "ltr";// if counted has no length, return "ltr"

  return counted.reduce((a, b) => a.count > b.count ? a : b).name;// return counted value reduce w/ args a and b, if a is > b an object, otherwise a name 
}

// /////////////////////////////////////////////////////////////////////////////
//  //////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    flatten,
    loop,
    every,
    dominantDirection,
  };
};
