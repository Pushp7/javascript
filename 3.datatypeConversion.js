function toNumber() {
    let score1 = 33
    console.log(typeof score1)      // number
    // console.log(typeof(score1))  //typeof can be written as both as a keyword or as a function.



    let score2 = "46"
    console.log(typeof score2);     // string
    let score2InNumber = Number(score2)
    console.log(typeof score2InNumber);     // number
    console.log(score2InNumber);    // 46



    let score3 = "72abc"
    console.log(typeof score3);     // string
    let score3InNumber = Number(score3)
    console.log(typeof score3InNumber);     // number
    console.log(score3InNumber);    // NaN

    //special case:-
    //  typeof score3InNumber is "number" but when its value is checked it gives "NaN" (Not-A-Number)
    //  Reason: becoz 72abc is invalid or not a pure number.
    //  so, "NaN" is also a "number" type. 🤡😂



    let score4 = "vgjx"
    console.log(typeof score4);     // string
    let score4InNumber = Number(score4)
    console.log(typeof score4InNumber);     // number
    console.log(score4InNumber);    // NaN



    let score5 = null
    console.log(typeof score5);     // object
    let score5InNumber = Number(score5)
    console.log(typeof score5InNumber);     // number
    console.log(score5InNumber);    // 0



    let score6 = undefined
    console.log(typeof score6);     // undefined
    let score6InNumber = Number(score6)
    console.log(typeof score6InNumber); // number
    console.log(score6InNumber);    // NaN



    let score7 = true
    console.log(typeof score7);     // boolean
    let score7InNumber = Number(score7)
    console.log(typeof score7InNumber);     // number
    console.log(score7InNumber);    //true - 1, false - 0
}


function toBoolean() {
    let isLoggedIn1 = 1
    let booleanIsLoggedIn1 = Boolean(isLoggedIn1)     // boolean
    console.log(booleanIsLoggedIn1);     // true


    let isLoggedIn2 = 0
    let booleanIsLoggedIn2 = Boolean(isLoggedIn2)     // boolean
    console.log(booleanIsLoggedIn2);     // false


    let name1 = ""
    let booleanName1 = Boolean(name1)   // boolean
    console.log(booleanName1);      // false


    let name2 = "Pushp Raj"
    let booleanName2 = Boolean(name2)   // boolean
    console.log(booleanName2);      // true

    //summary:-
    // 0 => false
    // 1 => true
    // "" => false
    // "Pushp" => true

}


function toString() {
    let age = 67
    let stringAge = String(age)

    console.log(stringAge)  // "67"
    console.log(typeof stringAge);      // string
}