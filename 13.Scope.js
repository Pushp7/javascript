//* Global Scope
  //#1 Variables declared outside any function or block (i.e., not enclosed in curly braces) have global scope.
  //#2 Global variables are accessible from anywhere in our JavaScript code.
  //#3 They exist throughout the entire program’s execution.

//* Local Scope (Block Scope)
  //#1 Variables declared inside a function or block (within curly braces) have local scope or block scope.
  //#2 Local variables are only accessible within the specific function or block where they are defined.
  //#3 They have a limited lifetime and are destroyed when the function/block exits.


var c = 272
if(true){
    let a = 10
    const b = 20
    var c = 30      // it will overwrite var c = 272 with 30
}

console.log(a);     // An error occurred saying "a" is not defined because we are accessing from outside a block scope
console.log(b);     // Again same error occurred saying "b" is not defined and same reason
console.log(c);     // 30   => var is not giving any error and program executed successfully because 

// unlike let and const, which have block scope, var variables are accessible throughout the entire function where they are defined. This behavior can sometimes lead to unexpected results.
// One key factor is hoisting. When we declare a variable with var, its declaration is hoisted to the top of the function or global scope.
// This means that even if you define a variable inside a block (such as an if statement), it is effectively moved to the top of the function.
// So avoid using var variable 

let a = 5
if(true){
    let a = 20
    const b = 15

    console.log(a);     // 20   =>this "a" is local variable
}
console.log(a);     // 5    =>this "a" is outside of local or block scope variable i.e global scope variable


//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Nested Scope

function one() {
  let username = "Pushp"  //this variable is declared globally within this function i.e any inner scope inside this function can access this variable

  function two() {
    let height = "5'6''"
    console.log(username);  // Pushp
  }

  console.log(height);    // it will give error saying "height is not defined" because we are accessing height variable out of the scope of function two()
  console.log(username);  // Pushp

  two()

}

one()


//++++++++++++++++++++++++++++ Interesting ++++++++++++++++++++++++++


addOne(4)  // This will run perfectly, even though we call it before defining funtion
function addOne(num) {
  return num + 1;
}



addTwo(7) // This will give error saying "Cannot access 'addTwo' before initialization". Reason:- A variable is holding function reference and we can not use variable before initialization.
const addTwo = function (num) {
  return num + 2;
}
addTwo(7) // But here it will perfectly work now because we are using after initialization of addTwo variable.