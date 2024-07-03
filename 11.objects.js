//# Two ways we can define an object
    //1. Singlton object
    //2. Object literals


//* Object literals way to define an object

const sym = Symbol("key1")
const Jsuser = {
    name: "Pushp",
    "full name": "Pushp Raj",
    age: 20,
    location: "Delhi",
    email: "fakenaamid@gmail.com",
    [sym]: "mykey1",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Wednesday"],
    hello: function(){
        console.log("Hello there!");
    }
}

console.log(Jsuser.email);          // fakenaamid@gmail.com
console.log(Jsuser["email"]);       // fakenaamid@gmail.com
console.log(Jsuser["full name"]);   // Pushp Raj
console.log(Jsuser[sym]);

Jsuser.email = "pushprajsunshin@gmail.com"  // now email of object Jsuser is changed.

Jsuser.greet = function(){                  // a method is added to the object Jsuser
    console.log("Hello, I am " + this.name)
}
console.log(Jsuser);

Object.freeze(Jsuser);  // after freezing object, we can not change object
Jsuser.email = "homelander@gmail.com" // no changes take place in jsuser



//* Singlton way to define an object

const obj = new Object();
console.log(obj);   // {}

const tinderUser = new Object({name: 'Pushp'})
console.log(tinderUser);    // { name: 'Pushp' }

tinderUser.id = "2024/xyz"
tinderUser.isLoggedIn = false

console.log(tinderUser);    // { name: 'Pushp', id: '2024/xyz', isLoggedIn: false }

console.log(Object.keys(tinderUser));    // [ 'name', 'id', 'isLoggedIn' ]   => returns array of keys
console.log(Object.values(tinderUser));  // [ 'Pushp', '2024/xyz', false ]   => returns array of values
console.log(Object.entries(tinderUser)); // [ [ 'name', 'Pushp' ], [ 'id', '2024/xyz' ], [ 'isLoggedIn', false ] ]   => Object.entries() => each key value pair of an object is converted into an array and then returns array of array(s).

console.log(tinderUser.hasOwnProperty("id"));     // true
console.log(tinderUser.hasOwnProperty("city"));   // false


//Nesting of objects

const regularUser = {
    email: "some@gmail.com",
    username: {
        fullname: {
            firstname: "Amrish",
            lastname: "Puri", 
        }
    }
}
console.log(regularUser.username); // { fullname: { firstname: 'Amrish', lastname: 'Puri' } }
console.log(regularUser.username.fullname); // { firstname: 'Amrish', lastname: 'Puri' }
console.log(regularUser.username.fullname.firstname);    //Amrish

console.log(regularUser.username?.fullname.lastname);  
// ?. (optional chaining) operator
// ?. checks if username exist or not, if yes only then it will further execute the expression, If no, it will return undefined helps from crashing program.
// If the object reference before ?. is null or undefined, the expression short-circuits and evaluates to undefined.



//Merging two or more object 

const obj1 = {1: 'a', 2: 'b'}
const obj2 = {3: 'y', 4: 'z'}

const obj3 = {obj1, obj2}   // ❌
console.log(obj3);  // { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'y', '4': 'z' } }

const obj4 = {...obj1, ...obj2} // ✅ using spread (...) operator
console.log(obj4);  // { '1': 'a', '2': 'b', '3': 'y', '4': 'z' }

const obj5 = Object.assign({}, obj1, obj2)  // ✅  => {} is the target argument other arguments are the sources
console.log(obj5);  // { '1': 'a', '2': 'b', '3': 'y', '4': 'z' }
console.log(obj1);  // { '1': 'a', '2': 'b'}

const obj6 = Object.assign(obj1, obj2)  // ✅  => if {} is not given, obj1 will act as target and obj2 and others will act as sources.
console.log(obj6);  // { '1': 'a', '2': 'b', '3': 'y', '4': 'z' }
console.log(obj1);  // { '1': 'a', '2': 'b', '3': 'y', '4': 'z' }
console.log(obj6 == obj1);  // true


//Array of objects

const usersArr = [
    {name: 'Amrish', age: 23},
    {name: 'Rohan', age: 26},
    {name: 'Uday', age: 25}
]

console.log(usersArr[1].name);     // Rohan
console.log(usersArr[1]["name"]);  // Rohan



//# Object de-structuring
 //=> Instead of writing like obj.key, we can destructure object properties and can use without . operator

 const course = {
    coursename: "Javascript",
    price: "free",
    courseInstructor: "Hitesh Sir"
}

const {coursename} = course;
console.log(coursename);    // Javascript
// or, we can use alias instead, same output
const {coursename: subject} = course;
console.log(subject);       // Javascript


//API => (informal) Jab bhi aapko apna kaam kisi aur ke sar par daal dena hai, ussi ko API kahte hai.
//JSON => Its format is same just like javascript object


// {
//     "name": "Pushp",
//     "age": 20,
//     "city": "Delhi"
// }