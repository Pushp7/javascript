/* In JavaScript, object properties have several attributes that define their behavior and how they can be accessed and modified.
These attributes are part of the property descriptor, which describes the characteristics of a property. Here are the main attributes:
1. value     2. writable     3. enumerable   4. configurable
And these attributes together define the behavior of a property in JavaScript objects.
By default writable, enumerable, configurable attributes are 'true' */

// To see or get the descriptions of propertie of an object, Syntax is as follows:
    // Object.getOwnPropertyDescriptor(object, 'propertyKey')       [propertyKey :- As we know Object is a key value paired properties. So we have to pass only the key.]


// for example:-
const descriptor = Object.getOwnPropertyDescriptor(Math, 'PI')
console.log(descriptor);    // { value: 3.141592653589793, writable: false, enumerable: false, configurable: false }


//We can also give some properties(or description) to properties of our own created object.
const chai = {
    name: 'ginger tea',
    price: 250,
    isAvailable: true,
    orderchai: function(){
        console.log("Chai is in the process of making");
    }
}

//If we check description of properties of our own created object:-
console.log(Object.getOwnPropertyDescriptor(chai, 'name'))  // {value: 'ginger tea', writable: true, enumerable: true, configurable: true}

//we can also manipulate/change description of properties of our own created object. Syntaxes are as follows:-
    // Object.defineProperty(object, 'proprtyKey', {attributes: propertyDescriptor})
    // Object.defineProperties(object, { property1:{attributes: propertyDescriptor}, property2:{attributes: propertyDescriptor}, property3:{} })    //if wanted to define all the properties at a time.

// Making only 'name' non-writable and non-configurable
Object.defineProperty(chai, 'name', {
    writable: false,
    configurable: false,
})

//Now checking again whether descriptions of object properties changed or not
console.log(Object.getOwnPropertyDescriptor(chai, 'name'))  // {value: 'ginger tea', writable: false, enumerable: true, configurable: false}

// Attempting to change the value of 'name' of chai object (will throw in strict mode)
chai.name = "green tea"
console.log(chai.name)  // ginger tea   =>(unchanged)

// Attempting to delete 'name' property of chai object (will throw in strict mode)
delete chai.name
console.log(chai.name)  // ginger tea   =>(still exists)

// Attempting to enumerate over name property of chai object
for (let [key, value] of Object.entries(chai)) {
    if(typeof value !== 'function'){
        console.log(`${key}➡️  ${value}`);
    }
}
    //output:-
        // name➡️  ginger tea
        // price➡️  250
        // isAvailable➡️  true
    //because enumerable is 'true' we are able to enumerate over name property also otherwise it would have not appeared.