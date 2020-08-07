//////////////////////////////////////////////////////////////////////
// Function 1 - Object Values ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//I: an object 
//O: an array 
//C: N/A 
//E: N/A 
function objectValues(object) { // function objectValues w/ object as param 
let newArray = []; // assigning newArray to array literal
for(var key in object){ // Using for in loop to access values w/in the object 
    newArray.push(object[key]); // Using push method to place values from object into array
}
return newArray; //return array of object values 
} 

//////////////////////////////////////////////////////////////////////
// Function 2 - Keys to String ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//I: an object 
//O: string 
//C: spacing 
//E: N/A
function keysToString(object) { // function keysToString w/ object as param
    const keys = Object.keys(object); // assigning const keys w/ value Object.keys, which will make object into an array
    return keys.join(" "); // return stmt, using .join to have all strings come together, w/ spaceing in parenthesis
}



//////////////////////////////////////////////////////////////////////
// Function 3 - Values to String /////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//I: an object 
//O: a string 
//C: spacing
//E: N/A
function valuesToString(object) { // function valuesToString w/ object as param
let newString = []; // array literal assigned to variable, for info post loop to be added later 
for(var key in object){ // for in loop over objects entirety 
    if(typeof object[key] === "string"){ //  if value from loop is a string datatype
        newString.push(object[key]); // push the string into the new array created earlier 
    }
} return newString.join(" "); // spacing w/ join 
}


//////////////////////////////////////////////////////////////////////
// Function 4 - Array or Object //////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//I: a collection
//O: a boolean
//C: N/A
//E: Conditional Statements: if and else stmt 
function arrayOrObject(collection) { // function arrayOrObject w/ collection as only param 
    if(Array.isArray(collection)=== true){ // if statment checking if collection is an array w/ Array.isArray() method. If true
        return "array";// if true, return stmt to follow
    }else{ // if first condition not met, run else stmt 
       return "object";  // object returned if not an array 
    }
}

//////////////////////////////////////////////////////////////////////
// Function 5 - Capitalize Word //////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//I: a string 
//O: a string w/ first letter capitalized
//C: 1st letter of string must be capitalized
//E: N/A 
function capitalizeWord(string) { // func w/ string as param 
    let strings = ""; // string literal 
    strings = string.charAt(0).toUpperCase().concat(string.slice(1));// at 0th index, uppercase, seperate strings, remove everything after 1st index
    return strings;// return new string 
}

//////////////////////////////////////////////////////////////////////
// Function 6 - Capitalize All Words /////////////////////////////////
//////////////////////////////////////////////////////////////////////
//I: a string of words 
//O: First Letter of each word in string capitalized
//C: N/A
//E: N/A
function capitalizeAllWords(string) { // func w/ string as param 
    let stringz = string.split(" "); // split into new strings 
    for(let i = 0; i < stringz.length; i++){ // for loop over strings 
        stringz[i] = capitalizeWord(stringz[i]); // Using capitialize word, to capitalize indiv strings 
    }
    return stringz.join(" ");// joining said strings once uppercased.
    
}

//////////////////////////////////////////////////////////////////////
// Function 7 - Welcome Message //////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//I: an object 
//O: String with name property replaced 
//C: N/A
//E: N/A 
function welcomeMessage(object) { // function w/ obj as param 
    let str = "Welcome "; // assigning string of "welcome " to str variable 
    str = str.concat(capitalizeWord(object.name));// Using capitizlize word and string to join "Welcome "Name""
    return str.concat("!"); // adding strings together w/ punc. 

}

//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//I: an object 
//O: key/value pair of name and species 
//C: N/A
//E: N/A
function profileInfo(object) { //function profileInfo w/ Object as param
let newName = object.name[0].toUpperCase() + object.name.slice(1) ;// Uppercase method for capitalization + only the specified name in key 
 let newSpecies = object.species[0].toUpperCase() + object.species.slice(1) ;// Same as about w/ species key 
    return `${newName} is a ${newSpecies}`} // Using string interpolation, will input values into placeholders
    
//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//I: an object 
//O: a string 
//C: N/A
//E: conditional statment
function maybeNoises(object) { // obj as param for func 
    return object.noises ? (object.noises.length > 0 ? object.noises.join(" ") : "there are no noises") : "there are no noises";
} // ternary stmt; if, else if , else stmt replaced. 

//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//I: String
//O: Boolean
//C: N/A
//E: Conditional statement 
function hasWord(string, word) { //params string and word 
 if (string.includes(word)){ // using .includes method to check if passing word is inside of string of words 
      return true;
    } else {// Otherwise, return false 
        return false;
    }
}


//////////////////////////////////////////////////////////////////////
// Function 11 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//I: string, object 
//O: an array w/ string of name inside of it 
//C: N/A
//E: N/A
function addFriend (name, object) { // func addFriend w/ name and object as params 
object.friends.push(name); // push name into object assigned 
return object;
}

//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function isFriend(name, object) { // func w/ name and object as params 
    if(object.friends){ // if object friends has no length or no name 
        if(object.friends.length < 1){// retr false 
            return false;
        }
        for(let i = 0; i < object.friends.length; i++){
            if(name === object.friends[i]){// if friend exisits return true 
                return true;
            }
        }
    return false;
    }
    return false;

}

//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function nonFriends(name, array) { //name and array as params 
    let arr = [];// array literal for items to be pushed into later 
    for(let i = 0; i < array.length; i++){ // for loop over array 
        if(isFriend(name, array[i]) === false){ // if name is not in friends array
            if(name !== array[i].name){
                arr.push(array[i].name);// push into array 
            }
        }
    }
    return arr;

}

//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function updateObject(object, key, value) {// object, key, and value as params 
    for(var item in object){// for in loop over object 
        if(item === key){// if matched 
            object[item] = value;
            return object;// return 
        }else{
            item = key;
            object[item] = value;
            return object;
        }
        
    }

}

//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

function removeProperties(object, array) { // object and array as params 
    for(let i =0; i < array.length; i++){ // for loop over array 
    for(var key in object){// for in loop over object 
      if (key === array[i]){// if matched 
        delete object[key];// delete match 
      }
    }
  }
    return object;

}

//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function dedup(array) {// func w/ array as param 
     let newArray = [];// array literal 
  for( var i =0; i < array.length; i++ ){// for loop over array 
      if( !newArray.includes(array[i])){// if items are not included 
          newArray.push(array[i]);// push into new array 
      }
  }
  return newArray;

}

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.objectValues = objectValues;
    module.exports.keysToString = keysToString;
    module.exports.valuesToString = valuesToString;
    module.exports.arrayOrObject = arrayOrObject;
    module.exports.capitalizeWord = capitalizeWord;
    module.exports.capitalizeAllWords = capitalizeAllWords;
    module.exports.welcomeMessage = welcomeMessage;
    module.exports.profileInfo = profileInfo;
    module.exports.maybeNoises = maybeNoises;
    module.exports.hasWord = hasWord;
    module.exports.addFriend = addFriend;
    module.exports.isFriend = isFriend;
    module.exports.nonFriends = nonFriends;
    module.exports.updateObject = updateObject;
    module.exports.removeProperties = removeProperties;
    module.exports.dedup = dedup;
}