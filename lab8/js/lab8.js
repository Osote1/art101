/*
 * Author: Angela Rangel
 * Date: October, 26
 * License: Public Domain
 */

 function isEven(x){
      return (x % 2 == 0);
 }

// Test Functions
console.log("What is 2 even?", isEven(2));
console.log("What is 5 even?", isEven(5));

array = [12, 6, 4, 2, 13, 1]
console.log("My array: ", array);

var result = array.map(isEven);
console.log("Result of the array:", result);

var result = array.map(function(x){
  return x + 12;
})
console.log("Array plus 12:", result);
