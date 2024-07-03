function sayMyName() {
    console.log("Pushp Raj");
}
sayMyName();


function addTwoNumbers(num1, num2) {
    let result = num1 + num2
    return result
}
console.log(addTwoNumbers(9, 6));   // 15
console.log(addTwoNumbers(9, "6"))   // 96   because num2 was a string value it returned concatenated string value.


function loginUserMessage(username) {
    return `${username} just logged in`
}
console.log(loginUserMessage("Pushp"));  // Pushp just logged in
console.log(loginUserMessage());         // undefined just logged in    =>so when you don't pass argument(s), it returns undefined.


//# Default arguments
// we can also set default values, in case if user didn't pass any arguments

    function logoutMessage(username = "Aman") {
        return `${username} just logged out`
    }
    console.log(logoutMessage("Shubham")); // Shubham just logged out
    console.log(logoutMessage());          // Aman just logged out

    
//# rest operator (...)
    //If it is not known in advance how many arguments user can pass to a funtion, it becomes difficult for a programmer to declare parameters
    //for such case we have rest operator(...), with the help of this we can recieve as much parameters as we want.
    //The rest operator seems same as spread operator and is also denoted by three dots (...), but it serves a different purpose here in case of function.
    //It is used within function parameters to collect the remaining arguments into an array.

    function calculateCartPrice(...prices) {
        return prices    //=> it will return the array of all the passed arguments
    }
    console.log(calculateCartPrice(100, 149, 170, 122));    // [ 100, 149, 170, 122 ]


    function myFun(val1, val2, ...prices) {     // =>100 is recieved in val1, 149 is recieved in val2 and the rest args is recieved in prices in the form of array because of the rest operator.
        return prices
    }
    console.log(myFun(100, 149, 170, 122));    // [ 170, 122 ]


//# Functions with objects

    const user = {
        username: "Pushp",
        height: "5'6''"
    }

    function handleObject(obj){
        console.log(`Username is ${obj.username} and height is ${obj.height}`);
    }

    handleObject(user)

    handleObject({
        username: "Sam Bahadur",
        height: "5'9''"
    })


//# Functions with arrays

    const arr = [10, 20, 30, 40]

    function return2ndValue(myArr){
        return myArr[1]
    }

    console.log(return2ndValue(arr));   // 20
    console.log(return2ndValue([60, 70, 80, 90, 100]));     // 70
    