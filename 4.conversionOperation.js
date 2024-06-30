let value = 3;
let negValue = -value;
console.log(negValue);


let str1 = "hello";
let str2 = " Pushp";
let str3 = str1 + str2;   // concatenation
console.log(str3);   // hello Pushp

// The + operator performs string concatenation when at least one operand is a string.

console.log("1" + "2");   // "12"
console.log(1 + "2");   // "12"
console.log("1" + 2);   // "12"

console.log("1" + 2 + 2);   // "122"✅    "14"❌    flow->  "1" + 2 = "12" => "12" + "2" = "122"
console.log(1 + 2 + "2");   // "32"✅     "122"❌   flow->   1 + 2 = 3 => 3 + "2" = "32"
console.log(1 + "2" + "2");   // "122"✅            flow->   1 + 2 = "12" => "12" + "2" = "122"

console.log(true);  // true
console.log(+true);  // 1   => The unary plus operator (+) attempts to convert its operand to its numeric equivalent (which is 1).
console.log(+false);  // 0  => same logic goes here

console.log(+"");   //  0   => "" empty string returns false and again here logic goes same as mentioned above.
console.log(+"7");  // 7
console.log(+"xyz");    //NaN   => again + will try to convert "xyz" into numeric value but since it is not a valid number so yeah

