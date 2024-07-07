//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//# for loop :-

    for (let i = 1; i <= 10; i++) {
        console.log(i);
    }

    //Nested loop
    for (let i = 0; i < 4; i++) {
        console.log("Outer loop:", i);
        for (let j = 0; j < 5; j++) {
            console.log(`Inner loop: ${j}, Outer loop: ${i}`);
        }
    }

    //for loop on array
    let myArr = ["Krish", "Shaktiman", "Ironman"]
    for (let i = 0; i < myArr.length; i++) {
        console.log(myArr[i]);
    }

    //using "break" and "continue" keywords
    for (let i = 0; i < 10; i++) {
        if (i == 5) {
            break;      // on the count of i = 5, flow controll comes out of the loop
        }
        console.log(i);
    }

    for (let i = 0; i < 10; i++) {
        if (i == 5) {
            continue;     // on the count of i = 5, flow control skips for that round and comes to the next iteration of the loop.
        }
        console.log(i);
    }



//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//# while loop :-
    let i = 3;
    while (i <= 8) {
        console.log(i);
        i++;
    }

    //while loop on array
    let parties = ["BJP", "AAP", "SP", "JDU", "RJD", "TMC", "TDP"];
    let j = 0
    while(j < parties.length){
        console.log(parties[j]);
        j++
    }



//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//# do-while loop :-
    let k = 10;
    do {
        console.log(k);
        k++;
    } while (k <= 15);


//++++++++++++++++++++++++++++++++  High order array loop  ++++++++++++++++++++++++++++++++++++++++++++++++++
//# for-of loop :-

    let colors = ["red", "blue", "green", "yellow"];
    for (let color of colors) {
        console.log(color);
    }

    const greeting = "Hello world";
    for(let char of greeting){
        if(char == " "){
            continue;
        }
        console.log(char);
    }

    //Maps
        //A Map object can be iterated using a for...of loop.
        //Unlike objects, a Map does not have a prototype chain, so there are no default keys
        //We can create a Map using new Map() and add key-value pairs using the .set(key, value) method.

        const map = new Map();
        map.set("in", "India")
        map.set("usa", "United States of America")
        map.set("fr", "France")
        map.set("in", "India")  // if we set same value twice in Map, it does not set same entries twice. It is known for uniqueness
        console.log(map);
        // Map(3) {
        //     'in' => 'India',
        //     'usa' => 'United States of America',
        //     'fr' => 'France'
        //   }

        for(const key of map) {
            console.log(key);
        }
        // [ 'in', 'India' ]
        // [ 'usa', 'United States of America' ]
        // [ 'fr', 'France' ]

        for(const [key, value] of map) {
            console.log(`${key} :- ${value}`);
        }
        // in :- India
        // usa :- United States of America
        // fr :- France

    const myObj = {         // we can not iterate on object using for-of loop however, we can iterate it using for-in loop.
        game1: "PUBG",
        game2: "Total Overdose",
        game3: "Spiderman",
    }

    for (const [key, value] of myObj) {
        console.log(`${key} :- ${value}`);  //TypeError: It says "myObj is not iterable"
    }


//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//# for-in loop :-
    //for in loop always returns keys or index of an object or an array respectively.

    const myObject = {
        js: "javascript",
        cpp: "C++",
        py: "Python",
        rb: "Ruby",
        swift: "Swift by apple",
    }

    for (const key in myObject) {
        console.log(`${key} => extension for ${myObject[key]}`);
    }


    const programming = ["python", "swift", "JavaScript", "C++", "Rust", "PHP", "Java"]
    for (const i in programming) {
        console.log(programming[i]);
    }

    for(const i in map){
        console.log(i);     // It will not print anything because map is not iterable.
    }


//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//# forEach loop :-
    // foreach loop is used to iterate over arrays and objects in JavaScript.
    // It is a modern and shorter way of looping through arrays and objects.
    // It has a single argument - a callback function that is executed for each element in the array or object.
    // The callback function can have maximum 3 parameters and minimun 1. The first parameter is the item of iterables, the second one is for index, and 3rd one is for whole array.
    // forEach loop does not return anything.

    const arr = ["apple", "banana", "cherry", "date"];
    arr.forEach(function(fruit){
        console.log(fruit);
    });

    const coding = ["PHP", "python", "swift", "JavaScript", "C++"]
    coding.forEach((lang, index, arr)=>{     //in forEach callback func, 2nd parameter is index and 3rd parameter is an array
        console.log(lang, index, arr);
        // console.log(`${index} :- I love coding in ${lang} from the list   ${arr}`);
    })

    const myCoding = [
        {
            languageName: "Javascript",
            fileExtension: ".js"
        },
        {
            languageName: "Python",
            fileExtension: ".py"
        },
        {
            languageName: "Rust",
            fileExtension: ".rs"
        }
    ]

    myCoding.forEach((item)=>{
        console.log(item.languageName);
        // console.log(Object.keys(item));
        // console.log(Object.values(item));
        // for (const key in item) {
        //     console.log(`${key}, ${item[key]}`);
        // }
    })