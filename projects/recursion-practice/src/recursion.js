// Solve all of the following prompts using recursion.

// 1. Calculate the factorial of a number.  The factorial of a non-negative integer n,
// denoted by n!, is the product of all positive integers less than or equal to n.
// Example:  5! = 5 x 4 x 3 x 2 x 1 = 120
// factorial(5);  // 120

//I: a number
//O: factorial number 
//C: Use recusion
//E: Conditonal statements 
var factorial = function(n) {
  if (n < 0) return null;// if n is a negative number, return null 
  if (n === 0) return 1; // if n strictly equals 0, return 1 
  //if (n === 1) return 1;// if n strictly equals 1, return 1 
  return n * factorial(n-1);// return input value(number) * factorial(value -1) which will evaluate through if statements 
};

// 2. Compute the sum of an array of integers.
// Example:  sum([1, 2, 3, 4, 5, 6]);  // 21
//I: array of #'s'
//O: sum, #
//C: Recursion
//E: Conditional
var sum = function(array) {
  if (array.length === 0) return 0; // if array has no length, return 0 
  if(array.length === 1) return array[0]; // if array has one value in it, return that value by using indicies 
  if(array.length>1) return array[0]+sum(array.slice(1)); // if array has more than one value, return the 0th index + sum of 1st index post slice
};

// 3. Sum all numbers in an array containing nested arrays.
// Example: arraySum([1,[2,3],[[4]],5]); // 
//I: an array of numbers 
//O: sum of numbers 
//C: Recursion 
//E: Nested array 
var arraySum = function(array) {
 };

// 4. Check if a number is even.
var isEven = function(n) {
  if(n===0)return true;// If number value is === 0 return true  --base case 
  if(n===1) return false;// If number value is === 1 return false --base case 
  if(n<0)return isEven(n+2);// If number is negative, function will increment by 2, until argument reaches 0 or 1.
  if(n>1)return isEven(n-2);//If number is negative, function will decrement by 2, until argument reaches 0 or 1.
    
  
  return isEven;
};

// 5. Sum all integers below a given integer.
// sumBelow(10); // 45
// sumBelow(7); // 21
//I: a number 
//O: return sum 
//C: recursion
//E: conditional
var sumBelow = function(n) {
  // Function expression sumBelow w/ param n for number/integer
  if(n===0) return 0;// if integer === 0, return 0  //base case 
  if(n>0) return n-1+sumBelow(n-1);// If number is greater than 0, subtract 1 from value, then decrement until value is 0 
  if(n<0) return n+1+sumBelow(n+1);// If number is less than 0, add 1 to value, then increment until value is 0. 
};


// 6. Get the integers in range (x, y).
// Example:  range(2, 9);  // [3, 4, 5, 6, 7, 8]
//I: two numbers from array of #'s'
//O: the range of the #'s', an array 
//C: Recursion
//E: start =x; end = y 
var range = function(x, y, reArr = []) {
if(x === y || x === y - 1 || x === y + 1){ // base case
  return reArr; //will return array literal 
}
if(x > y){ 
  reArr.push(x - 1); // if the start val is greater than end val, push negative into array
  return range(x - 1, y, reArr);
}else{
  reArr.push(x + 1); 
  return range(x + 1, y, reArr); // positive numbers into array 
}


};
// var range = function(x, y) {// function expression range with params x and y 
//   var isInc = true;// create a variable isInc and assign to boolean true 
//   if (x > y) {// if x value > y value
//     var temp = x;// temp variable assigned to x value 
//     x = y;// x value re-assigned to y value 
//     y = temp;// y then re-assigned to temp variable 
//     isInc = false;// isInc reassigned as false statement 
//   }
//   if (x === y) return [];// If x strictly equals y, return array literal 
//   if (x+1 === y) return [];// if x value ++ strictly = y, return array literal 
//   var res = range(x, y-1);// new variable assigned to range (x, y-1)
//   res.push(y-1);// push to new variable 
//   return isInc ? res : res.reverse();// ternary 
// };

// 7. Compute the exponent of a number.
// The exponent of a number says how many times the base number is used as a factor.
// 8^2 = 8 x 8 = 64.  Here, 8 is the base and 2 is the exponent.
// Example:  exponent(4,3);  // 64
// https://www.khanacademy.org/computing/computer-science/algorithms/recursive-algorithms/a/computing-powers-of-a-number
//I: a number 
//O: the exponent of a number 
//C:Reursion
//E: factors and exponents 
var exponent = function(base, exp) {// function expression eponent with base and exp as params 
  if(exp===0) return 1;// if exp strictly = 0, return 1 
  if(exp>0) return base*exponent(base,exp-1);// if exp >0 return base times the iteration of base  and exponent -1 
  if(exp<0) return exponent(base,exp+1)/base;// if exp <0 return base times the iteration of base and exp incrementing by 1 
};

// 8. Determine if a number is a power of two.
// powerOfTwo(1); // true
// powerOfTwo(16); // true
// powerOfTwo(10); // false
//I: a number 
//O: a boolean value 
//C: recursion 
var powerOfTwo = function(n) {// variable powerOfTwo to function with n as param, n for number 
  if(n===1) return true;// if n value === 1 return true 
  if(n>1&&n<2) return false;// if value of n is >1 and less than 2, return false 
  if(n>=2) return powerOfTwo(n/2);// if value of n is greater than or equals 2, recurse through base function, with value / 2 until true value 
  if(n<1) return false;// if n value is less than 1 or a negative #, return false 
};
// 9. Write a function that accepts a string a reverses it.
//I: string 
//O: string in reverse 
//C: Recursion
var reverse = function(string) {// function expression reverse with string as param 
  if (string.length === 0) return string;// if length of string has no value, return the string 
  return reverse(string.substring(1)) + string.charAt(0);// reverse string starting at first character
// return  string.length ===0 ? string 
// return reverse(string.substring(1)) + string.charAt(0)
};

// 10. Write a function that determines if a string is a palindrome.
//I: string
//O: boolean value
//C: recursion
var palindrome = function(string) {
  string = string.replace(/[^a-z0-9]/i, '').toLowerCase(); // removing special chars to spaces, then lowercasing string val
if(string.length <= 1) return true; // if length of string is less than or equal to one, return true. --base case is 1 
if (string[0] !== string[string.length - 1]) return false; // if string at beginning doesnt match string at end 
return palindrome(string.slice(1, -1)); // calling palindrome taking off 1st index and using end
};

// 11. Write a function that returns the remainder of x divided by y without using the
// modulo (%) operator.
// modulo(5,2) // 1
// modulo(17,5) // 2
// modulo(22,6) // 4
var modulo = function(x, y) {
};

// 12. Write a function that multiplies two numbers without using the * operator  or
// JavaScript's Math object.
//I:two numbers 
//O: Product of two #'s multiplied 
//C:Recursion, no *, and no Math().
var multiply = function(x, y) {

if (x == 0 || y == 0)  return 0;


else if( y < 0 )  return - x + multiply(x, y + 1);


else {
    return x + multiply(x, y - 1);
}
};
//base case is 0, the middle ground of pos and neg #'s '
//what you do on one side, you have to do to the other side opposite sign 


// 13. Write a function that divides two numbers without using the / operator  or
// JavaScript's Math object.
var divide = function(x, y) {
};

// 14. Find the greatest common divisor (gcd) of two positive numbers.  The GCD of two
// integers is the greatest integer that divides both x and y with no remainder.
// Example:  gcd(4,36);  // 4
// http://www.cse.wustl.edu/~kjg/cse131/Notes/Recursion/recursion.html
// https://www.khanacademy.org/computing/computer-science/cryptography/modarithmetic/a/the-euclidean-algorithm
var gcd = function(x, y) {
};

// 15. Write a function that compares each character of two strings and returns true if
// both are identical.
// compareStr('house', 'houses') // false
// compareStr('', '') // true
// compareStr('tomato', 'tomato') // true
//I: two strings 
//O: boolean
//C: N/A 
//E: substring or slice method 
var compareStr = function(str1, str2) {
   if(str1.charAt(0)!==str2.charAt(0)) return false; //comparing values  of char val at 0th index, if not matching, return false;
    if(str1.length === 0 && str2.length === 0) return true; // if lengths of str1 and str2 have no values, return true;
    return compareStr(str1.slice(1),str2.slice(1)); //starting at val 1, comparing str1 and 2 until length of string is met. 
};
//substring and slice both work. But, slice is preffered method, due to return vals if start is > end. 


// 16. Write a function that accepts a string and creates an array where each letter
// occupies an index of the array.
//I: a string 
//O: an array of indiv elements 
//C: N/A
//E: slice method
var createArray = function(str, reArr = []){ // params str and array assigned as reArr 
  if(str.length === 0) return reArr; // if no values return array literal 
  reArr.push(str[0]); // push into array at 0th index 
  return createArray(str.slice(1), reArr); //slice method 1st index , into array 
};

// 17. Reverse the order of an array
//I: an array
//O: array in reverse 
//C: N/A
//E: start @ back of array; -1?
var reverseArr = function (array, revArr = []) { // array as param, created revArr as array literal in param (we added this, was not in code originally)
  if(array.length === 0) return revArr; // if array has no value in it, return the array literal
  revArr.push(array[array.length - 1]); // push the value from the end of the array input into array literal 
  return reverseArr(array.slice(0, -1), revArr); // callback reverseArr slice method used w/ starting at 0 and ending at the end, 
};

// 18. Create a new array with a given value and length.
// buildList(0,5) // [0,0,0,0,0]
// buildList(7,3) // [7,7,7]
var buildList = function(value, length,array = [] ) { //added array into params 
  if(length === 0) return array; // base case  
  array.push(value); // pushing val into array 
   return buildList(value,length - 1, array); // calling value, length to last val, array val pushed into 
};

// 19. Count the occurence of a value inside a list.
// countOccurrence([2,7,4,4,1,4], 4) // 3
// countOccurrence([2,'banana',4,4,1,'banana'], 'banana') // 2
//I: an array and val to be checked 
//O: an
//C: N/A
//E: N/A

var countOccurrence = function(array, value, count = 0) { // array of values, value to be checked, count added as our base case 
  if(array.length === 0)return count;
  if(array[0] === value)count++; // increment by 1 
  return countOccurrence(array.slice(1), value, count);
};

// 20. Write a recursive version of map.
// rMap([1,2,3], timesTwo); // [2,4,6]
//I:
//O:
//C: Dont use map 
//E:

var rMap = function(array, callback, reArr = []) {
  if(array.length === 0){ //no length return array literal
    return reArr;
  }
  reArr.push(callback(array[0])); // pushing into array 
  return rMap(array.slice(1), callback, reArr); 
};
// 21. Write a function that counts the number of times a key occurs in an object.
// var testobj = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
// countKeysInObj(testobj, 'r') // 1
// countKeysInObj(testobj, 'e') // 2
var countKeysInObj = function(obj, key) {
};

// 22. Write a function that counts the number of times a value occurs in an object.
// var testobj = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
// countValuesInObj(testobj, 'r') // 2
// countValuesInObj(testobj, 'e') // 1
var countValuesInObj = function(obj, value) {
};

// 23. Find all keys in an object (and nested objects) by a provided name and rename
// them to a provided new name while preserving the value stored at that key.
var replaceKeysInObj = function(obj, key, newKey) {
};

// 24. Get the first n Fibonacci numbers.  In the Fibonacci Sequence, each subsequent
// number is the sum of the previous two.
// Example:  0, 1, 1, 2, 3, 5, 8, 13, 21, 34.....
// fibonacci(5);  // [0, 1, 1, 2, 3, 5]
// Note:  The 0 is not counted.
var fibonacci = function(n) {
};

// 25. Return the Fibonacci number located at index n of the Fibonacci sequence.
// [0,1,1,2,3,5,8,13,21]
// nthFibo(5); // 5
// nthFibo(7); // 13
// nthFibo(3); // 2
//I: a number 
//O:
//C: N/A
//E: N/A
var nthFibo = function(n) {
  if(n===1) return 1;// if # === 1 return 1 
  if(n===0) return 0;// if # === 0 return 0 --base case 
  if(n<0) return null;// if # negative, return null 
  return nthFibo(n-1) + nthFibo(n-2);// end recursion at n-1 + n-2 value 
};

// 26. Given an array of words, return a new array containing each word capitalized.
// var words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
//I: an array of words
//O each letter capitalized in array 
var capitalizeWords = function(input) {
  if(input.length===0) return [];// if no length return empty array 
  var res = capitalizeWords(input.slice(1));// capitalize first letter in array 
  res.unshift(input[0].toUpperCase());// array at 0th index to uppercase 
  return res;// return result 
};

// 27. Given an array of strings, capitalize the first letter of each index.
// capitalizeFirst(['car', 'poop', 'banana']); // ['Car', 'Poop', 'Banana']
var capitalizeFirst = function(array) {
  if(array.length===0) return [];// no length return array literal 
  var res = capitalizeFirst(array.slice(1));// slice at first index for result 
  res.unshift(array[0].charAt(0).toUpperCase().concat(array[0].substring(1)));// Capitalize first letter of each word in array 
  return res;// return new array result 
};

// 28. Return the sum of all even numbers in an object containing nested objects.
// var obj1 = {
//   a: 2,
//   b: {b: 2, bb: {b: 3, bb: {b: 2}}},
//   c: {c: {c: 2}, cc: 'ball', ccc: 5},
//   d: 1,
//   e: {e: {e: 2}, ee: 'car'}
// };
// nestedEvenSum(obj1); // 10
var nestedEvenSum = function(obj) {
};

// 29. Flatten an array containing nested arrays.
// Example: flatten([1,[2],[3,[[4]]],5]); // [1,2,3,4,5]
var flatten = function(arrays) {
};

// 30. Given a string, return an object containing tallies of each letter.
// letterTally('potato'); // {'p':1, 'o':2, 't':2, 'a':1}
var letterTally = function(str, obj) {
  if(str.length===0) return {};// no length return object literal 
  var res = letterTally(str.substring(1));// result substring at 1st index 
  res[str.charAt(0)] ? res[str.charAt(0)] += 1 : res[str.charAt(0)] = 1;// ternary operator 
  return res;// return result 
};

// 31. Eliminate consecutive duplicates in a list.  If the list contains repeated
// elements they should be replaced with a single copy of the element. The order of the
// elements should not be changed.
// Example: compress([1, 2, 2, 3, 4, 4, 5, 5, 5]) // [1, 2, 3, 4, 5]
// Example: compress([1, 2, 2, 3, 4, 4, 2, 5, 5, 5, 4, 4]) // [1, 2, 3, 4, 2, 5, 4]
var compress = function(list) {
   if(list.length===0) return [];// no length return empty array 
  var res = compress(list.slice(1));// slice at first index. 
  if(res[0]!==list[0]) res.unshift(list[0]);// if res and list at 0th index do not equal one another unshift method at 0th index of list array 
  return res;// return result 
};

// 32. Augment every element in a list with a new value where each element is an array
// itself.
// Example: augmentElements([[],[3],[7]], 5); // [[5],[3,5],[7,5]]
var augmentElements = function(array, aug) {
};

// 33. Reduce a series of zeroes to a single 0.
// minimizeZeroes([2,0,0,0,1,4]) // [2,0,1,4]
// minimizeZeroes([2,0,0,0,1,0,0,4]) // [2,0,1,0,4]
var minimizeZeroes = function(array) {
  if(array.length===0) return [];// if no length in array, return array literal 
  var res = minimizeZeroes(array.slice(1));// res assigned to function slice method at first index 
  if(res[0]!==0||array[0]!==0) res.unshift(array[0]);// if results at 0th index does not = 0 or array at 0th index does not = 0, unshift at array 0th index 
  return res;// return result 
};

// 34. Alternate the numbers in an array between positive and negative regardless of
// their original sign.  The first number in the index always needs to be positive.
// alternateSign([2,7,8,3,1,4]) // [2,-7,8,-3,1,-4]
// alternateSign([-2,-7,8,3,-1,4]) // [2,-7,8,-3,1,-4]
var alternateSign = function(array) { //function expression w/ array as param 
  if(array.length===0) return [];// if no length return array literal 
  var res = alternateSign(array.slice(1));// result assigned to function sliced at first index of array 
  res.length%2!==0 ? res.unshift(Math.abs(array[0])) : res.unshift(-Math.abs(array[0]));
  // if result length remainder does not = 0, 
  return res;// return result 
};

// 35. Given a string, return a string with digits converted to their word equivalent.
// Assume all numbers are single digits (less than 10).
// numToText("I have 5 dogs and 6 ponies"); // "I have five dogs and six ponies"
var numToText = function(str) {
  if (str.length === 0) return '';// if the string passed to the function is empty, returns empty string to concatenate
  var tempStr = numToText(str.substring(0, str.length-1));// recursive call of function passing one character shorter each recursion
  var replace; // declare replace variable to hold word in place of number
  switch (str[str.length-1]) {//switch function comparing final character of substring against single digit numbers
    case '1': replace = 'one';
      break;
    case '2': replace = 'two';
      break;
    case '3': replace = 'three';
      break;
    case '4': replace = 'four';
      break;
    case '5': replace = 'five';
      break;
    case '6': replace = 'six';
      break;
    case '7': replace = 'seven';
      break;
    case '8': replace = 'eight';
      break;
    case '9': replace = 'nine';
      break;
    default: replace = str[str.length-1];//if a single digit number is not found, it is not replaced
      break;
  }
  return tempStr + replace;//returns the string with any replaced numbers
};

// *** EXTRA CREDIT ***

// 36. Return the number of times a tag occurs in the DOM.
var tagCount = function(tag, node) {
};

// 37. Write a function for binary search.
// Sample array:  [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
// console.log(binarySearch(5)) will return '5'

var binarySearch = function(array, target, min, max) {
};

// 38. Write a merge sort function.
// Sample array:  [34,7,23,32,5,62]
// Sample output: [5,7,23,32,34,62]
var mergeSort = function(array) {
};



//-----------------------------------
// DON'T REMOVE THIS CODE -----------
//-----------------------------------

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {

  /**
   * Due to some node-related issues with spying on recursive functions,
   * it isn't possible to test them with sinon spies like so:
   *
   *   var originalSum = sum;
   *   sum = sinon.spy(sum);
   *
   *   sum([1, 2, 3, 4, 5, 6]);
   *
   *   // callCount will always 1 causing, this test to always fail in node :(
   *   expect(sum.callCount).to.be.above(1);
   *
   *   sum = originalSum;
   *
   * However, we can work around this by using proxies!
   * If you reassign the function to a proxy and use the `apply` trap,
   * you can make a `proxyCallCount` property on the function,
   * increment it each time it's called, and then test that instead.
   *
   *   sum.proxyCallCount = 0;
   *   sum([1, 2, 3, 4, 5, 6]);
   *   expect(sum.proxyCallCount).to.be.above(1);
   *
   * MDN Proxies: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy
   * MDN Proxy Apply Trap: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler/apply
   */
  const createSpyProxy = (func) => {
    func.toString = func.toString.bind(func);

    const recursiveFunctionCallCounterHandler = {
      apply(target, thisArg, args) {
        target.proxyCallCount = target.proxyCallCount ? target.proxyCallCount + 1 : 1;
        return target.apply(thisArg, args);
      },
    };

    return new Proxy(func, recursiveFunctionCallCounterHandler);
  };

  factorial = createSpyProxy(factorial);
  sum = createSpyProxy(sum);
  arraySum = createSpyProxy(arraySum);
  isEven = createSpyProxy(isEven);
  sumBelow = createSpyProxy(sumBelow);
  range = createSpyProxy(range);
  exponent = createSpyProxy(exponent);
  powerOfTwo = createSpyProxy(powerOfTwo);
  reverse = createSpyProxy(reverse);
  palindrome = createSpyProxy(palindrome);
  modulo = createSpyProxy(modulo);
  multiply = createSpyProxy(multiply);
  divide = createSpyProxy(divide);
  gcd = createSpyProxy(gcd);
  compareStr = createSpyProxy(compareStr);
  createArray = createSpyProxy(createArray);
  reverseArr = createSpyProxy(reverseArr);
  buildList = createSpyProxy(buildList);
  countOccurrence = createSpyProxy(countOccurrence);
  rMap = createSpyProxy(rMap);
  countKeysInObj = createSpyProxy(countKeysInObj);
  countValuesInObj = createSpyProxy(countValuesInObj);
  replaceKeysInObj = createSpyProxy(replaceKeysInObj);
  fibonacci = createSpyProxy(fibonacci);
  nthFibo = createSpyProxy(nthFibo);
  capitalizeWords = createSpyProxy(capitalizeWords);
  capitalizeFirst = createSpyProxy(capitalizeFirst);
  nestedEvenSum = createSpyProxy(nestedEvenSum);
  flatten = createSpyProxy(flatten);
  letterTally = createSpyProxy(letterTally);
  compress = createSpyProxy(compress);
  augmentElements = createSpyProxy(augmentElements);
  minimizeZeroes = createSpyProxy(minimizeZeroes);
  alternateSign = createSpyProxy(alternateSign);
  numToText = createSpyProxy(numToText);
  tagCount = createSpyProxy(tagCount);
  binarySearch = createSpyProxy(binarySearch);
  mergeSort = createSpyProxy(mergeSort);

  module.exports = {
    factorial,
    sum,
    arraySum,
    isEven,
    sumBelow,
    range,
    exponent,
    powerOfTwo,
    reverse,
    palindrome,
    modulo,
    multiply,
    divide,
    gcd,
    compareStr,
    createArray,
    reverseArr,
    buildList,
    countOccurrence,
    rMap,
    countKeysInObj,
    countValuesInObj,
    replaceKeysInObj,
    fibonacci,
    nthFibo,
    capitalizeWords,
    capitalizeFirst,
    nestedEvenSum,
    flatten,
    letterTally,
    compress,
    augmentElements,
    minimizeZeroes,
    alternateSign,
    numToText,
    tagCount,
    binarySearch,
    mergeSort,
  };
}

//-----------------------------------
