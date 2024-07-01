const score = 272
console.log(score);     // 272

const balance = new Number(150)
console.log(balance);   // [Number: 150]

console.log(balance.toString());    // "150"   =>now since this is string now so we can also use String methods here just after toString().

const a = 870.7686954
console.log(a.toFixed(3));      // "870.769"      =>toFixed() rounds off to the given number after decimal and also converts them into a string representation.
console.log(balance.toFixed(2));    // "150.00"

console.log(a.toPrecision());  // 3 => "871", 4 => "870.8", 5 => "870.77", 6 => "870.769", 7 => "870.7687".......so on.

const b = 1000000
console.log(b.toLocaleString());    // "10,00,000"

console.log(Number.MAX_VALUE);      // 1.7976931348623157e+308

console.log(Number.MIN_VALUE);      // 5e-324

console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991

console.log(Number.MIN_SAFE_INTEGER); // -9007199254740991



// ++++++++++++++++++++++++ Maths ++++++++++++++++++++++++++


console.log(Math.abs(-5));  // 5  =>abs() converts all negative/positive numbers to positive only

console.log(Math.round(4.6)); // 4.6 => 5, 4.4 => 4     =>this helps in rounding off the numbers

console.log(Math.ceil(4.2)); // 5       =>4.9 => 5
console.log(Math.floor(4.2)); // 4      =>4.9 => 4

console.log(Math.min(4, 6, 3, 8));  // 3
console.log(Math.max(4, 6, 3, 8));  // 8

console.log(Math.random()); // generates random numbers between 0 and 1
console.log((Math.random() * 10) + 1);
console.log(Math.floor((Math.random() * 10) + 1));

// To generate random numbers between a range...
const min = 10
const max = 20
console.log(Math.floor(Math.random() * (max - min + 1)) + min);
