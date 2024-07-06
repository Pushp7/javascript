// Immediately Invoked Function Expression (IIFE)
    //An Immediately Invoked Function Expression (IIFE) is a JavaScript function that runs as soon as it is defined.
    
    /*Why do we need IIFE?
        One of the common issues in JavaScript development is global scope pollution, where variables
        declared in one part of the code can unintentionally affect other parts. IIFE helps mitigate
        this problem by keeping variables and functions within their own scope, preventing global pollution. 
        
        IIFEs are useful because they don't pollute the global scope. Any variables declared within an IIFE 
        stay within that IIFE. This can help avoid variable name clashes and keep your code tidy
    */

//syntax:  ()()     =>the first parantheses contains function definitions and second parantheses automatically execute or call the function.



(function dbc(){    // named IIFE
    console.log("DATABASE CONNECTED 1")    // DATABASE CONNECTED 1
})();

(() =>{     // // IIFE  (Simple IIFE)
    console.log("DATABASE CONNECTED 2")    // DATABASE CONNECTED 2
})();

//Even we can pass arguments
((name) =>{
    console.log(`Hi👋 I am ${name}`)      // Hi👋 I am Pushp
})("Pushp")