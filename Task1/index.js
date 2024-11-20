//Task 1: Reverse String (JavaScript)
//Write a JavaScript function that takes a string as input and returns the string reversed.
function reverseString(inputStr){
     return inputStr.split("").reverse().join("")
 //since thr reverse() works with arrays we need to covert  our string to an array, then reverse it and combine the resulting elements back into a string
}
console.log(reverseString("Hello Zephyrus team"))
