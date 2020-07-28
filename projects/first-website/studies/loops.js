/*
 * LOOPS:
 *
 * 0. A loop iterates a block of code multiple times until some specified condition is met. This condition will be different depending
      on what type of loop is intitialized.
 *
 * 1. There are three main types of loops: while loops, for loops, and for in loops.
 */

// 1. declaration //
//while loops iterate indefinitely until a condition is met//
let count = 0;//initialize count at 0
let arrayOne=[];//create array literal
while(count <= 20){//this while loop will fill the array with the numbers from 0 to 20 and then end
    arrayOne.push(count);//pushes to array
    count++;//increments count by 1 each iteration of loop
}
console.log(arrayOne);//prints array containing numbers from 0 to 20

count = 20;//initialize count at 20
let arrayTwo=[];//create array literal
while(count >= 0){//this while loop will fill the array with the numbers from 20 to 0 and then end
    arrayTwo.push(count);//pushes to array
    count--;//decrements count by 1 each iteration of loop
}
console.log(arrayTwo);//prints array containing numbers from 20 to 0

//For Loops//
/*For loops, loop through a block of code a certain number of times as indicated in loop body. 
* For loops are great for looping over an array or string. 
* Your for loop is made up of you starting value, your stopping condition, and lastly your incremter.*/

for(let i = 0; i<=arrayOne.length-1; i++){//this loop will print the numbers contained in arrayOne, looping forwards
    console.log(arrayOne[i]); //prints to console numbers contained in arrayOne ex:1,2,3,4,5
}

for(let j = arrayOne.length - 1; j>=0; j--){//this loop will do the reverse of the previous loop, looping backwards from the end of the array
    console.log(arrayOne[j]);// prints number values of arrayOne in reverse order. ex: 5,4,3,2,1
}

// For-in loops//
/* For in loops over properties in an object. 
* keyword for, in paraenthesis var key/value in name of object, open { into code block
*/

let myObject={name: 'Morgan', age: 25, hometown: 'Central'};//intialize an object
for(var key in myObject){//this loop reads the key/value pairs contained in this object and prints a string containing them.
    console.log("My "+key+" is "+myObject[key]+".\n"); //prints to console on new line "My name is Morgan."
}

