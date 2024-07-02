//ways to define an Array

    const myArr1 = new Array(22, 44, 65, false, 4)
    const myArr2 = [4, true, 9, 32, "Pushp", 7, [1, 2, 3], 10, 3.9]


//Array methods
const arr = [5, 9, 8, 1]

    arr.push(69);
    console.log(arr);   // [ 5, 9, 8, 1, 69 ]

    arr.pop()
    console.log(arr);   // [ 5, 9, 8, 1 ]

    arr.unshift(11)
    console.log(arr);   // [ 11, 5, 9, 8, 1 ]

    arr.shift()
    console.log(arr);   // [ 5, 9, 8, 1 ]

    console.log(arr.includes(7));   // false
    console.log(arr.includes(9));   // true

    console.log(arr.indexOf(8));    // 2
    console.log(arr.indexOf(34));   // -1 (if value does not exist, returns -1)

    const arr1 = arr.join(["_"])
    console.log(arr);   // [ 5, 9, 8, 1 ]
    console.log(arr1);  // "5_9_8_1"   => join() Adds all the elements of an array into a string, separated by the specified separator string


    //slice vs splice

        const arr2 = arr.slice(1, 3)     //here, 1 is starting index, 3 is ending index, but end index does not inclusive.
        console.log(arr2);      // [ 9, 8 ]
        console.log("Original", arr);    // Original [ 5, 9, 8, 1 ]   => slice does not change original array

        const arr3 = arr.splice(1, 3)    //here, 1 is starting index, 3 is the total number of element to be deleted after starting index.
        console.log(arr3);      // [ 9, 8, 1 ]
        console.log("Original", arr);    // Original [ 5 ]    => using splice changes original array

        const arr4 = arr.splice(1, 3, 1000, 1001, 1002, 1003)   // after the second argument, all the arguments are passed as a replaced value at the place of deleted elements.
        console.log("Original", arr);   // Original [ 5, 1000, 1001, 1002, 1003 ]


    const myHeros = ["Shaktimaan", "Krish", "Aryamaan"]
    const mcu = ["Ironman", "Thor", "CaptainAmerica", "Spiderman"]
    const dcu = ["Batman", "Superman", "Flash"]

    mcu.push(dcu)
    console.log(mcu);   // [ 'Ironman', 'Thor', 'CaptainAmerica', 'Spiderman', [ 'Batman', 'Superman', 'Flash' ]]

    console.log(mcu.concat(dcu));   // [ 'Ironman', 'Thor', 'CaptainAmerica', 'Spiderman', 'Batman', 'Superman', 'Flash']
    // concat() does not change original array i.e, it returns new array with all the elements concatenated in it.

    const anotherArray = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]], 11]
    const flatAnotherArray = anotherArray.flat(Infinity)    // flat() takes one argument of number of depth of sub-array, and make them in same level.
    console.log(flatAnotherArray);      // [ 1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5, 11 ]



//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


// spread operator
    const allHeros = [...mcu, ...dcu, ...myHeros]   // ... is a spread operator which helps in spreading all the elements of an array into onther array.
    console.log(allHeros);      /// [ 'Ironman', 'Thor', 'CaptainAmerica', 'Spiderman', 'Batman', 'Superman', 'Flash', 'Shaktimaan', 'Krish', 'Aryamaan']


console.log(Array.isArray("PushpRaj"));     // false
console.log(Array.from("PushpRaj"));    // ['P', 'u', 's', 'h', 'p', 'R', 'a', 'j']     => Array.from() converts iterables into array.
console.log(Array.from({name: "PushpRaj", fName: "xyz"}));    // []     => it gets confused between key and value to which one to be used to make an array, and returns empty array.


let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1, score2, score3));  // [ 100, 200, 300 ]
