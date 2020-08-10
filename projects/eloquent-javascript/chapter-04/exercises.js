////////////////////////////////////////////////////////////////////////////////
// range ///////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
//I: number start, end 
//O: an array 
//C:N/a 
//E:N/a 

function range(start, end, step = start < end ? 1 : -1) { //range function w/ ternary opertor. If start is less than end , return 1, otherwise, return -1 
  let array = []; // array assigned to empty array 
  if(start===end) return array; // if start deeply equals end, return array literal 

  if (step > 0) { // If step > 0 ,
    for (let i = start; i <= end; i += step) array.push(i);// with each iteration push i value into array 
  } else {                                                // Otherwise, 
    for (let i = start; i >= end; i += step) array.push(i); // push i value into array
  }
  return array;// return the array 
}



////////////////////////////////////////////////////////////////////////////////
// sum /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

//I: an array 
//O:value of sum 
//C:N/A 
//E:N/A 
function sum(array) {// sum function array as param 
  let total = 0;// total starts as 0 
  for (let value of array) {// for of loop to access values within entire array 
    total += value;// with each iteration, total will update as will value 
  }
  return total;// returns sum of array 
}

////////////////////////////////////////////////////////////////////////////////
// reverseArray ////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
//I: an array 
//O: values of array in reverse 
//C:N/A 
//E:N/A 


function reverseArray(array) { // reverseArray with array as param 
  let output = [];// output assigned w/ array literal 
  for (let i = array.length - 1; i >= 0; i--) { // for loop i starts at array's last index, stopping point will be 0, decrementing each iteration 
    output.push(array[i]);// push values into output array 
  }
  return output;// return said output 
}


////////////////////////////////////////////////////////////////////////////////
// reverseArrayInPlace /////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
//I: An array 
//O: an array 
//C: N/A 
//E: N/A 

function reverseArrayInPlace(array) { // reverseArrayInPlace function w/ Array as param 
  for (let i = 0; i < Math.floor(array.length / 2); i++) { // for loop , returning integer divided by 2, incrementing by 1 each time 
    let old = array[i];// old assigned to values from array loop 
    array[i] = array[array.length - 1 - i]; // reassigning value from i to array- last index of array - value of i 
    array[array.length - 1 - i] = old;// reassigning the array[i] value to old 
  }
  return array;// return array 
}



////////////////////////////////////////////////////////////////////////////////
// arrayToList /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
//I: An array 
//O:an object list 
//C:n/a 
//E:n/a 
function arrayToList(array) { // arrayToList function w/ array as param 
  let list = null; // list assigned to null value 
  for (let i = array.length - 1; i >= 0; i--) { // for loop over array length, decrement each iteration 
    list = {value: array[i], rest: list};// list assigned to object with value's paired w/ array [i] value and rest paired w/ list. 
  }
  return list;// return list 
}


////////////////////////////////////////////////////////////////////////////////
// listToArray /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
//I:  an object 
//O: an array 
//C: N/A 
//E:N/A 
function listToArray(list) { //listToArray function w/ list as param 
  let array = [];// array literal assignment 
  for (let node = list; node; node = node.rest) {// for loop with .rest removing ending values 
    array.push(node.value);// pushing node's value into array 
  }
  return array;// return the new array 
}
////////////////////////////////////////////////////////////////////////////////
// prepend /////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

//I: a value, an object 
//O: value, object 
//C:N/A
//E:N/A

function prepend(value, list) { // prepend function with value and list as params 
  return {value, rest: list};// return said value, rest with object 
}

////////////////////////////////////////////////////////////////////////////////
// nth /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

//I: an object, and value 
//O: an object w/ values 
//C:N/A 
//E: N/A 

function nth(list, n) {// function nth w/ object and value as params 
  if (!list) return undefined; // if no list, return undefined 
  else if (n == 0) return list.value; // if value deeply equals 0, return said value object 
  else return nth(list.rest, n - 1);// otherwise, return list
}

////////////////////////////////////////////////////////////////////////////////
// deepEqual ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

//I: two values 
//O:  a boolean 
//C: N/A 
//E: N/A 

function deepEqual(a, b) { // deepEqual function with a, and b as params 
  if (a === b) return true; // if values of a and b equal one another, return true 
  
  if (a == null || typeof a != "object" || // if a is null or a is not an object 
      b == null || typeof b != "object") return false; // of is b is null or b is not an object, return false 

  let keysA = Object.keys(a), keysB = Object.keys(b); // adding keys of a and b to our object 

  if (keysA.length != keysB.length) return false; // if keysA length does not equal keysB length, return false 

  for (let key of keysA) { // for in loop for values of keys A 
    if (!keysB.includes(key) || !deepEqual(a[key], b[key])) return false;// if keysB does not include key or does not deeply equal key of a or b, return false 
  }

  return true;// return true 
}

let obj = {here: {is: "an"}, object: 2};//assigning values to object 
////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    range,
    sum,
    reverseArray,
    reverseArrayInPlace,
    arrayToList,
    listToArray,
    prepend,
    nth,
    deepEqual,
  };
};
