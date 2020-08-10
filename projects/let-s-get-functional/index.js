// #!/usr/bin/env node

'use strict';

var customers = require('./data/customers.json');
var _ = require("lodown-malonzo");

/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *
 * 2. Solve all problems as outlined in the README.
 *
 * 3. We started the first one for you as an example! Make the rest in that style.
 *
 * 4. To test your work, run the following command in your terminal:
 *
 *    npm start --prefix ./malonzo143.github.io/projects/let-s-get-functional
 *
 *    IMPORTANT: Make sure you replace <YOUR_GITHUB_FOLDER with your actual github folder name that is in your workspace.
 */

var maleCount = function(array) {
// I: the customers array 
// O: {Number} of male customers 
// C: must use reduce 
//call reduce with the args, collection, function, seed
//we need a seed because datatype of first element in array is not dattype
//of output
    return _.reduce(array, function(counter, customerObj){
        console.log(counter);
        // if th e customer is male, increment the counter
        if(customerObj.gender === "male"){
            counter += 1;
        }
        return counter;
    }, 0);
};

var femaleCount = function(array){
    // I: the customers array 
    // O: {Number} of female customers 
    // C: must use reduce 
    //call reduce with the args, collection, function, seed
    /*we need a seed because datatype of first element in array is not dattype
    of output*/
    return _.reduce(array, function(counter, customerObj){ // counter as accumulator, customerObj as val 
        console.log(counter);
        // if the customer is female, increment the counter
        if(customerObj.gender === "female"){
            counter += 1;
        }
        return counter;
    }, 0);// seed 0 
};

var oldestCustomer = function(array){
    //I: the customer's age key/ value pair in object 
    //O:a string of the oldest customers name 
    //C:N/a
    //Call pluck with arguments, array and age as our property 
    //Use for loops to access data within our customers object 
    
    const ages=_.pluck(array,"age");// assign variable ages to our pluck function expression, parameters, array and age 
    var max=ages[0];// assign vairable max for maximum equal to ages at 0th index 
    for(let i = 0; i<= ages.length-1; i++){//Using a for loop to access the highest age within the array. 
        if(max<ages[i]){//If during the loop, an age is larger than our max value,
            max = ages[i];// the new age will reassign to our max variable, making the value the new max.
        }
    }
    for(let j = 0; j <= array.length - 1; j++){// Using another for loop, 
        if(array[j]["age"]===max){// access the properties assigned to max age 
            return array[j]["name"];// returns string of name with oldest age 
        }
    }
    
    
};

var youngestCustomer = function(array){
    //I: customer's age key/property 
    //O: a string of name associated with youngest customer 
    //C: N/A
    //Using pluck expression again, we will access the age from our customer's object 
    // then find the index of which the age is assigned to 
    //returning a string name of that customer 
    
     const ages=_.pluck(array,"age");// assign variable ages to our pluck function expression, parameters, array and age 
    var min=ages[0];// assign vairable min for minimum equal to ages at 0th index 
    for(let i = 0; i<= ages.length-1; i++){//Using a for loop to access the smallest age within the array. 
        if(min>ages[i]){//If during the loop, an age is smaller than our min value,
            min = ages[i];// the new age will reassign to our min variable, making the value the new min.
        }
    }
    for(let j = 0; j <= array.length - 1; j++){// Using another for loop, 
        if(array[j]["age"]===min){// access the properties assigned to minimum age 
            return array[j]["name"];// returns string of name with youngest age 
        }
    }
    
    
};
var averageBalance = function(array){
    //I: customer object, balances 
    //O:average of customer balances 
    //C: Use replace for $ and , to rid of NaN 
const balanceArray =_.pluck(array,"balance");// assign a variable balanceArray to our pluck function expression, paramters array, and balance 
    var totalBalance =0;// assign variable of total balance from loop and assign to 0, this will be reassigned later 
    for(let i = 0; i<= balanceArray.length-1; i++){// Using a for loop to access balances from customer object 
        var bal = Number(balanceArray[i].replace('$',"").replace(",",""));/* create variable balance to store data from loop assigned to
        chnage the data and remove $ and ,; otherwise amount will reflect NaN.*/
        totalBalance=totalBalance+bal;// total balance is reassigned to 0+ balance data 
    }
    var average = totalBalance/balanceArray.length;// create a new variable average assigned to our new total balance divided by the number of elements in data 
return average;// return the average fixed to two decimal places, otherwise, again the output will read NaN
};

var firstLetterCount = function (array,letter){
    //I: customer object, name of each customer 
    //O: number of customers with the same first letter 
    //C:
    const nameArray =_.pluck(array,"name");// set a constant variable nameArray assigned to our pluck function expression 
    var count = 0;// assign count to 0, this is just the inital value, it will be re-assigned after the loop 
    for(let i = 0; i<=nameArray.length -1; i++){// Using a for loop to loop through name array for data 
        if(nameArray[i].charAt(0) === letter.toUpperCase()){// If statement, if letter at 0th index of name is strticly equal to the letter in property 
            count+=1;// reassign count by one, each occurance 
        }
    }
    return count;// return the count 
};

var friendFirstLetterCount = function(array, name, letter){
    //I:array, name, letter building off of our last loop 
    //O: a collection of data with same name in friends list 
    //C: N/A 
var newArray; // creating new holding variable 
 for (var i = 0; i < array.length; i++){ //looping through the provided customer variable 
     if(array[i]["name"] === name){ // checking if the name of a customer at the provided index matches the name parameter
         newArray = (array[i]["friends"]); //if match is found push the contents of the friend property to the newArray
     }
 }
console.log(newArray);  //viewing to make sure the newArray has the customer's friends' names in it
 var count = 0; //setting up count variable to hold number 
 for (var i = 0; i < newArray.length; i++){ //looping through the newArray with the customer's friends in it
     if(newArray[i]["name"].charAt(0) === letter.toUpperCase()){ //checking if the first letter of an friend matches the provided letter 
         count++; //increasing count by one each time a letter match is found
     }
 }
 return count; //returning the final count after loop is complete
};

var friendsCount = function(array,search){
    //I:Customer Object, names of friends 
    //O: the name of customers who have the same friends name.
    //C:N/A 
    var namesFriends = [];// create a variable namesFriends with array literal for data to be pushed into later. 
    const friends = _.pluck(array,"friends");// constant variable assigned to pluck expression with params array and friends 
    for(let i = 0; i <= friends.length - 1; i++){// for loop over data 
        for(var j in friends[i]){// another for loop inside friends array to access names 
            if(friends[i][j].name===search){// if the name being searched exists in the friends objects, 
                namesFriends.push(array[i].name);// push friends object name into namesFriends array 
                break;// break out of loop if name is found; do not return 
            }
        }
    }
    return namesFriends;// return the array containing people who are friends with customer 
};

var topThreeTags = function(array){
    //I:an array
    //O: an array of top three tags customers used 
    //C:N/A
    const tags= _.pluck(array,"tags");// constant variable assigned to pluck function expresiion w/ param array and tags. 
    var uniqueTags = tags[0];// variable assigned to tags at 0th index 
    for(let i=1;i<=tags.length-1;i++){// for loop over array to obtain data 
        for(let j=0;j<=tags[i].length-1;j++){// another for loop to obtain data, pulling tags 
            uniqueTags.push(tags[i][j]);// pushes all tags from all customers into new array, uniqueTags 
        }
    }
    uniqueTags=_.unique(uniqueTags);// reassigning to unique function exp
    var counts = {};// variables counts object literal 
    for(let l=0;l<=uniqueTags.length-1;l++){// for loop over array 
        counts[uniqueTags[l]]=0;// initializes count 
        for(let k=0;k<=tags.length-1;k++){// loops over original plucked array 
            if(_.contains(tags[k],uniqueTags[l])){// runs contains function to see how many times particular tag appears 
                counts[uniqueTags[l]]++;// increments by one 
            }
        }
    }
    var top = [];// new variable assigned to array literal
    var highest;// declare highest variable
    while(top.length<3){// while loop will run until top three tags acquired 
        var start = 0;//initialize comparison placeholder
        for(var key in counts){// for in loop to access data within count 
            if(counts[key]>start){// if value of counts is greater than comparison
                highest = key;// assigns tag to highest
                start = counts[key];// assigns comparison to new highest value
            }
        }
        top.push(highest);// adds highest count tag to top array
        delete counts[highest];// removes highest count tag from counts object to avoid multiple instances
    }
    return top;
};


var genderCount = function(array){
  //I:an array
  //O:an object containing the number of customers in each gender 
  //C:must use _.reduce
    const genders=_.pluck(array,"gender");// create array genders from pluck function
    const count={"male": 0, "female": 0, "non-binary":0};// create object to hold counts
    for(var key in count){// apply _.reduce to each gender
        count[key]=_.reduce(genders,function(prevCount, gender, index){if(gender===key){return prevCount+=1}else{return prevCount}},0);
        /* _reduce will check to see how many times a given gender appears in the genders array and return final count
        and then will assign that count to the corresponding gender key in count object*/
  }
    return count;
};

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
module.exports.maleCount = maleCount;
module.exports.femaleCount = femaleCount;
module.exports.oldestCustomer = oldestCustomer;
module.exports.youngestCustomer = youngestCustomer;
module.exports.averageBalance = averageBalance;
module.exports.firstLetterCount = firstLetterCount;
module.exports.friendFirstLetterCount = friendFirstLetterCount;
module.exports.friendsCount = friendsCount;
module.exports.topThreeTags = topThreeTags;
module.exports.genderCount = genderCount;
