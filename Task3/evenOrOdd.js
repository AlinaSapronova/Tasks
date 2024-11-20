//Task 3: Even or Odd (JavaScript)
//Write a JavaScript function that accepts an integer and returns whether it is even or odd*.

function checkingNumbers(num){
    // Check if the input is a number
    if (typeof num !== 'number' || isNaN(num)) {
        return "Input is not a valid number";
    }
  if(num % 2 === 0){
    return "This number is Even";
  }
  else{
    return "This number is Odd";
  }
}
console.log(checkingNumbers(10));
console.log(checkingNumbers(27));
console.log(checkingNumbers("hello"))
