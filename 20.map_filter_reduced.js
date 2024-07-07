//++++++++++++++++++++    filter     ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//# filter()
    // The filter() method creates a new array containing elements that satisfy a given condition (specified by a callback function).
    // It iterates over the original array, checks each element against the condition, and includes only the elements that pass the test.
    
    let myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

    let filteredNum = myNums.filter((num) => {
        return num > 5
    })
    console.log(filteredNum);   // [ 6, 7, 8, 9, 10 ]

    filteredNum = myNums.filter(num => num < 4)   // or simply we can write this in short way in one line using implicit return.
    console.log(filteredNum);   // [ 1, 2, 3 ]


    const books = [
        { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
        { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
        { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
        { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
        { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
        { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
        { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
        { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
        { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
    ];

    const filteredBook1 = books.filter( (book) => book.genre === "Non-Fiction")   //returns new array of all the books whose genre is "Non-Fiction"
    console.log(filteredBook1);

    const filteredBook2 = books.filter( (book) => book.publish > 1995 && book.genre === "History")
    console.log(filteredBook2);



//++++++++++++++++++++++   map   +++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//# map()
    // The map() method creates a new array by applying a function to each element of an existing array.
    // It iterates over the original array, transforms each element, and returns a new array with the transformed values.

    let myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

    let returnedNumArr1 = myNumbers.map((num) => num + 10 )
    console.log(returnedNumArr1);   // [11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

    //chaining methods
    let returnedNumArr2 = myNumbers.map((num) => num * 10).map((num) => num + 1).filter((num) => num<80 && num >= 25)
    console.log(returnedNumArr2);   // [ 31, 41, 51, 61, 71 ]
    


//++++++++++++++++++++++   reduce   ++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//# reduce()
    // The reduce() method reduces an array to a single value by applying a reducer function to each element.
    // It accumulates the result as it iterates through the array.
    // syntax:-
    /* const reducedValue = originalArray.reduce((accumulator, currentValue, index, array) => {
            // Perform an operation using 'accumulator' and 'currentValue'
            // Return the updated accumulator
       }, initialValue); */

    const nums = [1, 2, 3, 4]
    const totalNums = nums.reduce(function(accumulator, currentValue){
        console.log(`accumulator: ${accumulator} , currentValue: ${currentValue}`);
        return accumulator + currentValue
    }, 0)
    console.log(totalNums);     // 10

    const productNum = nums.reduce((acc, curVal)=> acc * curVal, 1)
    console.log(productNum);    // 24
    
    const shoppingCart = [
        {
            itemName: "JS course",
            price: 2999
        },
        {
            itemName: "Python course",
            price: 999
        },
        {
            itemName: "Android Dev course",
            price: 5999
        },
        {
            itemName: "Data Science course",
            price: 12999
        },
    ]

    const priceTotal = shoppingCart.reduce((acc, course) => (acc + course.price), 0)
    console.log(priceTotal);    // 22996
    