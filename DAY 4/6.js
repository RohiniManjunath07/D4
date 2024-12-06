/* write a javascript program that prints numbers from 1 to 100, but with the following rules, for multiples of 3 print "FIZZ"instead of numbers, for multiples of 5 print "BUZZ"instead of numbers, for numbers that are multiples of both 3 and 5, print "FizzBuzz". question: write a javascript function printFizzBuzz() that implements this logic and prints the result in console*/

function printFizzBuzz() {
    for (let i = 1; i <= 100; i++) {
      if (i % 15 === 0) {
        console.log("FizzBuzz");
      } else if (i % 3 === 0) {
        console.log("Fizz");
      } else if (i % 5 === 0) {
        console.log("Buzz");
      } else {
        console.log(i);
      }
    }
  }
  printFizzBuzz();

