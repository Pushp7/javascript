//In JavaScript, a prototype is an internal, hidden property of objects that allows objects to inherit properties and methods from other objects.
//Every JavaScript object has a prototype, which could be another object or null.

//Prototype Chain: Each object in JavaScript has a prototype (except for the base object, where the prototype is null). This forms a chain of objects, known as the prototype chain.
//Object Creation: When you create a new object using either object literals ({}) or with new Object(), JavaScript sets up this prototype linkage automatically.
//Inheritance: When you try to access a property or method on an object, JavaScript first looks at the object itself. If it doesn't find it there, it looks at the object's prototype, and continues up the chain until it finds the property/method or reaches the end of the chain (where the prototype is null).
//Constructor Functions: When you define a constructor function (using function MyObject() {...}), JavaScript automatically creates a prototype object for you and assigns it to the prototype property of your constructor function. This prototype object is shared among all instances created with new MyObject().

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++



function multiplyBy5(num1){
    return num1 * 5;
}

console.log(multiplyBy5(6));    // output: 30   =>no wonder

multiplyBy5.num2 = 2    // In javascript we can also do this.
//here we assigned a a value to another variable, num2
//so yes, multiplyBy5 is a function but we can use it as an Object and can assign anything to it.

console.log(multiplyBy5.num2);  // output: 2



//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

function buyMe(item, price){
    this.item = item;
    this.price = price;
    console.log(`Your item is ${this.item} and price is Rs. ${this.price}`);
}

//We can inject additional properties and methods in the prototype object
buyMe.prototype.increment = function(){
    this.price += 10
    return this.price
}
buyMe.prototype.decrement = function(){
    this.price -= 15
    return this.price
}
buyMe.prototype.price = function(){
    console.log(`Price is ${this.price}`);
}

// we can simply call like a function also
buyMe("Biscuit", 10)  // Your item is Biscuit and price is Rs. 10

//or we can use it as an object. As soon as we add "new" keyword before a function call it creates an object and inject it with all the prototype's properties and methods
const tea = new buyMe("tea", 45)
console.log(tea)    // buyMe { item: 'tea', price: 45 }

// while accessing any prototype's properties or methods, we don't need to write like this:
// console.log(tea.prototype.price);
// We can directly write like this: object.method or object.property
console.log(tea.price); // 45


const coffee = new buyMe("coffee", 200)
console.log(coffee);    // buyMe { item: 'coffee', price: 200 }
console.log("discounted price:", coffee.decrement());    // discounted price: 185


/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/