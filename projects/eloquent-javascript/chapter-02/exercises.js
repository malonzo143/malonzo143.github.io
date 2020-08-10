
////////////////////////////////////////////////////////////////////////////////
// triangles ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

//I: a number 
//O: a printed string of # signs 
//C: N/A
//E:N/A

function triangles(num) {// triangles function w/ number as param 
  for (let line = "#"; line.length <= num; line += "#"){// for loop through entire string of #, Adding a # each iteration 
    console.log(line);// Prints each iteration of line, which will create a triangular form 
  }
}
////////////////////////////////////////////////////////////////////////////////
// fizzBuzz ////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

//I: No param 
//O: a string or value 
//C:N/A 
//E:N/A 

function fizzBuzz() {// No params to fizzBuzz function 
  for (let n = 1; n <= 15; n++) {// for loop until n is <= 15, increment by 1 each iteration 
  let output = "";// output is string literal 
  if (n % 3 == 0) output += "fizz";// if divisable by 3, concatenates fizz 
  if (n % 5 == 0) output += "buzz";// if divisable by 5, concatenates buzz 
  console.log(output || n);// prints fizz/buzz/ fizzbuzz or number value 
}
  
}


////////////////////////////////////////////////////////////////////////////////
// drawChessboard //////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

//I: a number 
//O: string 
//C: N/A 
//E: N/A 
function drawChessboard(size) { // size as param 

let board = "";// assign board to string literal 

for (let y = 0; y < size; y++) { // for loop over rows from top to bottom 
  for (let x = 0; x < size; x++) { // for loop over every horizontal element in the row 
    if ((x + y) % 2 == 0) {// if sum of x+y is divisable by 2,
      board += " "; // concatenates a blank space 
    } else { // Otherwise,
      board += "#"; // concatenates with a hash #
    }
  }
  board += "\n";// outside of our loop, once size has been met in x, a new line is formed 
}

console.log(board);// prints to console 
}

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    triangles,
    fizzBuzz,
    drawChessboard,
  };
}
