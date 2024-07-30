/*Does javascript have classes?

  JavaScript does not have classes in the classical sense, like languages like Java or C++. Instead, it uses a prototype-based object-oriented programming model.
  In JavaScript, we can create constructors (functions that create objects) and use the "prototype" property to add methods and properties to those objects. This allows you to create objects that inherit behavior from other objects, similar to how classes work in other languages.
  However, JavaScript also has a syntax for classes, introduced in ECMAScript 2015 (ES6), which is similar to classes in other languages.

  So Yes, JavaScript does have classes! Though it's essentially syntactic sugar over the existing prototype-based inheritance system.
  JavaScript is primarily a prototype-based language, it also supports class-based inheritance through the ECMAScript 2015 (ES6) specification
  but behind the scenes, a JavaScript class is essentially a constructor function with a prototype object. The methods defined within the class become properties on the prototype. */


// Object literals
    const user = {
        username: "Pushp",
        loginCount: 15,
        signedIn: true,

        getUserDetails: function () {
            // console.log("Got user details from DB");
            console.log(`username: ${this.username}`);
            console.log(this);  // here, 'this' reffers to object `user`
        }
    }
    console.log(user.getUserDetails());

    console.log(this);   // here, this reffers to global context
    /* In a Node.js environment, 'this' refers to the global object.
    In a browser environment, 'this' refers to the window object.  */


// Constructor Function
    // While defining constructor function it looks same as regural function, but it depends on how user wanna treat this function. If they call normally it behaves as normal function, but as soon as then add 'new' keyword before a function call it converts into constructor function. 

    function User(username, loginCount, isLoggedIn){
        this.username = username
        this.loginCount = loginCount
        this.isLoggedIn = isLoggedIn
        this.greeting = function(){
            console.log(`Welcome ${this.username}`);
        }

        return this     // this statement is implicitly added by javascript, so it is fine if we don't write.
    }

    //calling without 'new' keyword
    const user1 = User("Rohan", 7, false)
    const user2 = User("Sumit", 13, true)   //when print user1, user2 will overwrite the value of user1, which we don't want. 
    console.log(user1);
    console.log(user2);
    
    // 'new' keyword invokes a constructor function which create a new object having their own context('this').
    // constructor function allows us to create multiple instances(objects), each with having their own context, so no overwrite possible.

    //calling using 'new' keyword
    const user3 = new User("Nikhil", 50, true)
    const user4 = new User("Sunny", 5, false)   //now, now not overwriting the previous user, this is exactly what we wanted.
    console.log(user3);
    console.log(user4);

    //1. As soon as we use 'new' keyword, first of all it create a new empty object, called an Instance.
    //2. After that a constructor function gets called because of 'new' keyword which initializes object.
    //3. After that all the methods and properties gets injected into 'this' keyword (this is why 'this' keyword reffers to current context.)
    //4. The constructor function is executed with this referring to the new object
    //5. The new object created is returned from the constructor function.