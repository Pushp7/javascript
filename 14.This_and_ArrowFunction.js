//+++++++++++++++++++++++++++  Arrow Function  +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++=

//Normal function
    // function hello(){
    //     console.log("Hello there");
    // }

//Function expression
    // const hello = function(){
    //     console.log("Hello there");
    // }

//Arrow function
    const hello = () => {
        console.log("Hello there");
    }
    hello()


    const addTwo = (num1, num2) => {
        return num1 + num2;
    }
    console.log(addTwo(4, 3));


    const addThree = (num1, num2, num3) =>  num1 + num2 + num3
    console.log(addThree(1, 2, 5));

        // This is called implicit return (no need to explicitly use "return" keyword)
        // This is mosty use when we have only one line of code
        // also it is not necessary to use { } since it is only one line code.
        // and if we use { } we must have to write "return" keywords but then it is not called implicit return function
        // but yeah, we can use parantheses if we want. for e.g while returning an object we have to use ()
    
    const student = () => ({name: "Pushp"})
    console.log(student());
    




//+++++++++++++++++++++++++++++++++++  "this"  keyword  ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//# "this" keyword reffers to the currect context or scope within which code is executing. The "this" keyword behaves differently depending on the context in which it is used.

    //1* (Global context)- When used alone (outside any function or method), this refers to the global object (usually the browser window or Node.js global context).

        console.log(this);  // In nodejs runtime environment when we check "this" it returns an empty object {}

        //Note: But the same code when we check in browser's js environment, in browser global object is usually "window" object so it returns window object.



    //2* (Object context)- When used inside an object method, "this" refers to the object itself.

        const user = {
            plan: 999,
            username: "Pushp",
            welcomeMessage: function () {
                console.log(`${this.username}, Welcome to our website`);

                console.log(this);  // when we log "this" it returns user object
            }
        }
        user.welcomeMessage(); // Pushp, Welcome to our website
        user.username = "Homelander"    //Now the context has changed
        user.welcomeMessage();  // Homelander, Welcome to our website



    //3* Function context 

        function abc() {
            let username = "Homelander";

            console.log(this);   // here "this" can refer to different objects or the global object (usually the browser window or Node.js global context).
            console.log(this.username);   // undefined  => So we can not write like (this.username) in function, but it works well in object.
        }



    //4* Arrow Function context
        // Arrow functions do not have their own this context.
        // They inherit the "this" value from the surrounding lexical scope.

        const abc1 = () => {
            let username = "Binod";

            console.log(this)   //unlike normal function, it returns {} empty object
            console.log(this.username); //undefined
        }