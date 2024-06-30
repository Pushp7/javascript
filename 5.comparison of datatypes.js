console.log(2 > 1);     //true
console.log(2 >= 1);    //true
console.log(2 < 1);     //false
console.log(2 == 1);    //false
console.log(2 != 1);    //true


//we can also compare two diff datatypes,
// Coercion is the implicit type conversion that happens when JavaScript tries to perform an operation with values of different types
// JS automatically convert one of the operands to compatible/common datatype so that comparisons can be possible/done

console.log("2" > 1);   //true      => it will convert "2" into 2 i.e string to number and then compares
console.log("02" > 1);  //true      => "02" will be converted to 02 which is equals to 2 and then compares


console.log(null > 0);  //false     =>Here, null converts to 0 and thus (0 > 0) => false
console.log(null < 0);  //false     =>same as above
console.log(null >= 0); //true      =>The (>=) operator also performs type coercion and null is converted to 0, so (0 >= 0) => true
console.log(null <= 0); //true      =>same logic goes here too
console.log(null == 0); //false     =>In loose equality(==), null is equal to undefined and itself, so (null == 0) => false


console.log(undefined == 0);    //false     =>In loose equality(==), undefined is equal to null and itself
console.log(undefined > 0);     //false     =>becoz of coercion JS converts "undefined" to "NaN" and any comparison involving NaN results in false
console.log(undefined < 0);     //false     =>Similar to the previous case
console.log(undefined >= 0);     //false    =>same
console.log(undefined <= 0);     //false    =>again same logic 


console.log("2" === 2)  //false     =>In strict equality(===) compares both value and type. This operator does not performs type coercion. Hence ...


//summary:-
// while comparing we must ensure that the their datatypes are same
// The > operator performs a numeric comparison when both operands are numbers.
// However, if one operand is a string, JavaScript attempts to convert it to a number.