//# Nullish Coalescing Operator (??)       -> null, undefined

let val1;

val1 = 5 ?? 10
console.log(5)      // 5

val1 = null ?? 10
console.log(val1)   // 10

val1 = undefined ?? 10
console.log(val1)   // 10

val1 = null ?? 10 ?? 20
console.log(val1)   // 10

val1 = null ?? null ?? 20
console.log(val1)   // 20

//so value after ?? is for a fallback situation. If the value returned or fetched is turned out for be a null or undefined or any other prob, in that situation alternative or other value will be assigned and help from crashing.
