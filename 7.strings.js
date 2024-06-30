const name = "PushpRaj"
const repoCount = 50

// console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('Vladimir-Putin-Russia')
console.log(gameName[0]);        // V

// console.log(gameName.__proto__);

console.log(gameName.length);           // 21
console.log(gameName.toUpperCase());    // VLADIMIR-PUTIN-RUSSIA
console.log(gameName.charAt(2));        // "a"
console.log(gameName.indexOf('a'));     // 2

const newString = gameName.substring(0, 4)
console.log(newString);         // "Vlad"

const anotherString = gameName.slice(0, 4)
console.log(anotherString);     // Vlad

const otherString = gameName.slice(-18, -7)
console.log(otherString);       // dimir-Putin

const newStringOne = "   JoeBiden    "
console.log(newStringOne);              // "   JoeBiden    "
console.log(newStringOne.trim());       // "JoeBiden"

const url = "https://facebook.com/profile/Pushp%20Raj"

console.log(url.replace('%20', '-'))    // "https://facebook.com/profile/Pushp-Raj"

console.log(url.includes('jethalal'))   // false  (returns boolean)

console.log(gameName.split('-'));       // ["Vladimir", "Putin", "Russia"]