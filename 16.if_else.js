//++++++++++++++++++++++++++  if else  +++++++++++++++++++++++++++++++++++++++++++++

    //(  comparison operators:      <, >, <=, >=, ==, !=, ===, !==       )

    const temperature = 41
    if (temperature <= 40) {
        console.log("less than 40");
    } else {
        console.log("temperature is greater than 40");
    }
    console.log("Execute");     //out of if else scope so it will execute every time


    const score = 200
    if (score > 100) {
        let power = "fly"
        console.log(`User power: ${power}`);
    }
    console.log(`User power: ${power}`);    //error


    const arr = []
    if(arr.length == 0){
        console.log("Array is empty");
    }else{
        console.log("Array is not empty");
    }


    const obj = {}
    if(Object.keys(obj).length == 0){
        console.log("Object is empty");
    }
    else{
        console.log("Object is not empty");
    }


    //If there is only one line of code we can write without {}.
        if (score < 100) console.log("test1")
    //We can also write two or more line of code in one line seperating with comma but this is not recommended.
        if (score > 500) console.log("test1"), console.log("test2")



    //# Nested if else
        const balance = 1000

        if (balance < 500) {
            console.log("less than 500");
        } else if (balance < 750) {
            console.log("less than 750");
        } else if (balance < 900) {
            console.log("less than 750");
        } else {
            console.log("more than 900");
        }


    //# Logical Operators
        const userLoggedIn = true
        const debitCard = true
        const loggedInFromGoogle = false
        const loggedInFromEmail = true

        //1 Logical AND (&&) operator
            if (userLoggedIn && debitCard && 2 == 3) {
                console.log("Allow to buy course");
            }

        //2 Logical OR (||) operator
            if (loggedInFromGoogle || loggedInFromEmail) {
                console.log("User logged in");
            }



//# Ternary operator
    // syntax:-      condition ? true statements : false statements

    const onionPrice = 35
    onionPrice <= 50 ? console.log("Buy 5kg onions") : console.log("Buy only 2kg onions")



// ++++++++++++++++++++++++++++++ truthy and falsy value +++++++++++++++++++++++++++++++++++++++++

    //falsey values.
        // 0
        // -0
        // ""
        // null
        // undefined
        // NaN
        // false
        // 0n               =>BigInt 0n

    //truthy values
        // "0"              =>this is not false because its not 0 but 0 in string representation
        // "false"          =>similarly, this is also not a false, this is written in string format
        // " "              =>There is a space in between quotes, this means string is not empty
        // []               =>empty array
        // {}               =>empty object
        // function(){}     =>empty function
        // true            =>this is a boolean value and it is always true

    const userEmail = "user@example.com"
    if(userEmail){
        console.log("Got user email");          // if userEmail is not empty
    }
    else{
        console.log("No user email found");     // if userEmail is empty
    }
    
    //Some Comparison
        // false == 0       => true
        // false == ""      => true
        // 0 == ""          => true