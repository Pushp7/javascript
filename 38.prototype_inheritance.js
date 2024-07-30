//Everything in javascript is an Object. Even function which is a function but also an Object.
//And the properties which are available to the Object is available to its decendents objects(like arrays, strings, objects etc).
//Because Object is at the top through which other objects inherit the properties of the Object
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


let myHero = ["thor", "spiderman", "Dr. Strange"]

let heroPower = {
    thor: "Mjolnir",
    spiderman: "Web Shooter",
    "Dr. Strange": "Sorcerer",

    getSpiderPower: function(){
        console.log(`SpiderMan power is ${this.spiderman}`);
    }
}

//Suppose we want to add a method which will be availabe to all the user who create any object.
//for this we have to add in base object's prototype. So that any object whichsomeone create will have that method, because we know all the others object inherit prototype from the base object.

/*        (top level hierarchy)     (end of chain)
Array-----------> Object --------------> Null
String----------> Object --------------> Null
function--------> Object --------------> Null  */

Object.prototype.helloBro = function(){
    console.log("Hey bro, how can i help you? I am present in all objects");
}

heroPower.helloBro()   // Hey bro, how can i help you? I am present in all objects
myHero.helloBro()   // same output as above

//So what we have done is we have accessed hierarchy's top level (i.e Object) and added methods in it and so it is available in all its child because of inheritence.


//If we add a method to Array only, we can not access in other objects, for ex.
Array.prototype.customMethod = function(){
    console.log("This is a custom method in Array");
}

myHero.customMethod()       // This will work fine.
heroPower.customMethod()    // This will give error saying "heroPower.customMethod is not a function"


//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//another example

String.prototype.trueLength = function(){
    console.log(this.trim().length);
}

let username = "rajulisation          "     // length = 22

username.trueLength()       //12

"PushpRaj".trueLength()     //8

"  Ajeet    ".trueLength()  //5


//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++=

//Inheritance  :-

    //Every JavaScript object has a prototype which can be accessed directly using the __proto__ . it is used for inheriting the properties and methods of other object.
    //Inheritance: When you access a property or method on an object, JavaScript first looks at the object itself. If it doesn’t find the property there, it continues to look up the prototype chain via __proto__ until it finds the property or reaches the end of the chain (null).

    //Example:

    const User = {
        name: "Bhuvan B",
        email: "bhuvan@gmail.com"
    }

    const Teacher = {
        makeVideo: true
    }

    const TeachingSupport = {
        isAvailable: false
    }

    const TAsupport = {
        makeAssignment: "JS assignment",
        fullTime: true,
        __proto__: TeachingSupport      //this means that when we create object of TAsupport, prototypes of TeachingSupport will also be available to this.
    }

    //we can also write this outside, for ex-
    Teacher.__proto__ = User

    //__proto__ is a non-standard syntax for accessing an object's property

    //Modern Syntax :-
    Object.setPrototypeOf(TeachingSupport, Teacher)