//=> We don not have to define or specify the datatype while declaring any variables, that means it is a dynamically typed language.
//=> In other words, data types of variables are determined by the value they hold at runtime and can change throughout the program as we assign different values to them.


//* Primitive types

    // 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

        const name = "Pushp"        // string
        const score = 100           // number
        const scoreValue = 100.3    // number
        const isLoggedIn = true     // boolean
        const outsideTemp = null    // null     =>but when we check type of null, it says "object"
        let userEmail               // undefined

        const id = Symbol("123")            // symbol
        const anotherId = Symbol("123")     // symbol
        // console.log(id === anotherId);   // false

        const bigNumber = 5767063269898644999999999999999999n   //bigint
 
        

//* Reference types (Non-Primitive)

    // Array, Objects, Functions

        const heros = ["Shaktimaan", "Naagraj", "Aryamaan", "Doga"]     //Array     => typeof(hero) returns as "object"

        const user = {
            name: "Pushp",
            age: 20,
            email: "Pushp@example.com",
        }                                          // Object
    
        const myFunction = function(){
            console.log("Hello world!");
        }                                          // Function
        