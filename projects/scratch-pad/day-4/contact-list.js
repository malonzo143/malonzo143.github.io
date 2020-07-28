// #!/usr/bin/env node

'use strict';

/**
 * 4: Contact List
 * 
 *  a. Create a factory Function called makeContact(id, nameFirst, nameLast) 
 *     that returns a contact object.
 *     
 *          ex: makeContact(1, 'Max', 'Gaudin'); // => {id: 1, nameFirst: 'Max', nameLast: 'Gaudin'}
 *     
 *  b. Create a factory Function called makeContactList that returns an Object 
 *     that manages contacts. The contact-list object should have the following methods:
 *       
 *      1. length(): returns the number of contacts within the list.
 *      2. addContact(contact): takes a contact object to be added to the 
 *         contact-list.
 *      3. findContact(fullName): takes a full-name String, like 'Max Gaudin', and 
 *         returns the contact object if found in the contacts-list, or, 
 *         undefined if the fullName does not match any contacts in the list.
 *      4. removeContact(contact): takes a contact object to be removed from 
 *         the contact-list.
 *      5. add a printAllContactNames() Function to your makeContactList() factory. The printAllContactNames() Function should 
 *         return a String formated with all the full-names of the separated 
 *         with a line-break, like so:
 *          
 *         myContacts.printAllContactNames(); // => Max Gaudin
 *                                                  John Fraboni
 *                                                  Kaelyn Chresfield
 *          
 *          WARNING: To pass this test, the LAST full name should have NO
 *          new-line character added after it!
 */

// YOUR CODE GOES BELOW HERE //
function makeContact(id, nameFirst, nameLast) {
 return {'id': id, 'nameFirst': nameFirst, 'nameLast': nameLast};
} 
function makeContactList() {
    /*
     * You need something here to hold contacts. See length api for a hint:
     */
    let contacts=[];//create a variable named contacts and set to an array literal.
    
    return {
        // we implemented the length api for you //
        length: function() {
            return contacts.length;
        },
        addContact: function(contact){
            return contacts.push(contact);//push contact function into array.
        },
        findContact: function(fullName){
            let name = fullName.split(" ");//split method 
            for(let i = 0; i<contacts.length; i++){//for loop 
                if(name[0]===contacts[i].nameFirst && name[1]===contacts[i].nameLast){// loop through contacts, array of objects. firstName and nameFirst match and nameLast and lastNames match
                    return contacts[i];//return contacts 
                }
            }
            return undefined;//if name not found, returns undefined. 
        },
        removeContact: function(contact){
            for(let i = 0; i<contacts.length; i++){//for loop
                if(contact.id===contacts[i].id){// loop through array, if the contact id matches existing id
                    contacts.splice(i,1);//splce will take object out of array
                }
            }
            return;
        },
        printAllContactNames: function(){
            let string="";// variable with string literal
            for(let i = 0; i<contacts.length; i++){//for loop
                if(i<contacts.length - 1){
                    string=string.concat(contacts[i].nameFirst + " " + contacts[i].nameLast + "\n");// string of names with line break 
                }else{
                    string=string.concat(contacts[i].nameFirst + " " + contacts[i].nameLast);
                }
            }
            return string;//return value 
        }
    };
}






// YOUR CODE GOES ABOVE HERE //




// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
(typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.makeContact = makeContact;
    module.exports.makeContactList = makeContactList;
}
