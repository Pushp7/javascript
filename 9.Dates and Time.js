let myDate = new Date()
    // console.log(typeof myDate);         // object


// some important Date's methods

    console.log(myDate);                // 2024-07-01T15:20:40.628Z

    console.log(myDate.toString());     // Mon Jul 01 2024 20:50:40 GMT+0530 (India Standard Time)

    console.log(myDate.toDateString()); // Mon Jul 01 2024

    console.log(myDate.toTimeString()); // 20:50:40 GMT+0530 (India Standard Time)

    console.log(myDate.toLocaleString());       // 1/7/2024, 8:50:40 pm

    console.log(myDate.toLocaleDateString());   // 1/7/2024

    console.log(myDate.toLocaleTimeString());   // 8:50:40 pm

    console.log(myDate.getDay());       // return day of weekend in integer(1-7)

    console.log(myDate.getDate());      // return date of a month in integer(1-31)

    console.log(myDate.getFullYear());  // returns current year in integer =>  2024

    console.log(myDate.getMonth());     // returns current months of a year in integer ((0(January) - 11(December))

    console.log(myDate.getTime());      // returns the number of milliseconds since January 1, 1970 00:00:00.

    console.log(myDate.getHours());     // returns current hours of a day or given date according to local time in integer (0-23)


// different ways to pass arguments in Date() constructor

    let myNewDate1 = new Date(2024, 5, 7)       //yyyy, mm, dd
    console.log(myNewDate1.toLocaleDateString());     // Fri Jun 07 2024

    let myNewDate2 = new Date(2024, 5, 7, 5, 3, 1) //yyyy, mm, dd, hh, mm, ss
    console.log(myNewDate2.toLocaleString());       // 7/6/2024, 5:03:01 am

    let myNewDate3 = new Date("2012-12-18")     // yyyy-mm-dd
    console.log(myNewDate3.toLocaleDateString());   // 18/12/2012

    let myNewDate4 = new Date("12-18-2012")     // mm-dd-yyyy
    console.log(myNewDate4.toLocaleDateString())    // 18/12/2012  -> dd/mm/yyyy



let myTimeStamp = Date.now()
console.log(myTimeStamp);   // returns the number of milliseconds since January 1, 1970 00:00:00 till now.


let currentDate = new Date()
currentDate.toLocaleString("default", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
})
