//#- Lexical scope:
/*  lexical scope allows the inner function to access variables and parameters of the outer function, 
    even after the outer function has finished executing.  */

    function outerFunction() {
        const outerVariable = 'I am outer';
      
        function innerFunction() {
          console.log(outerVariable);       // Accesses outerVariable from outer scope
        }
        innerFunction();

      }
      
      outerFunction(); // Output: "I am outer"



//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


//#- Closure:
/*  closure means- When an outer function returns an inner function, it not only returns the function itself but also retains the lexical scope in which the inner function was defined.
    Retains access to the variables of its lexical scope even when the function is executed outside that scope.  */

    //Example1:
    function outerFunction() {
        let outerVariable = "I am from outer function";

        function innerFunction() {
            console.log(outerVariable + " in inner function");      // Accesses outerVariable using closure
        }

        return innerFunction;
    }

    const closureExample = outerFunction()      // outer function returning an inner function's reference and assigning it to a variable named closureExample. That means, now closureExample can be considered as an innerfunction and it also has lexical scope variables within it.
    closureExample()    // Output: I am from outer function in inner function



    //Example2:
    function outer(i=0){
        return function inner(){
            return i++
        }
    }
    let closure = outer()
    console.log(closure());     // 0
    console.log(closure());     // 1
    console.log(closure());     // 2
    //so here value of i is being preserved because of closure concept in javascript.



    //Example3:
    function init(multiplier){
        return function(input){
            return input * multiplier
        }
    }

    let x = init(3)
    let y = init(4)

    console.log(x(3));     // 9
    console.log(y(3));     // 12
    
