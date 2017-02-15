//write a function named stringy that takes a size and returns a string of alternating '1s' and '0s'. 
//the string should start with a 1. a string with size 6 should return :'101010'. 
//with size 4 should return : '1010'. with size 12 should return : '101010101010'. 
//The size will always be positive and will only use whole numbers.


//Given a non-negative integer, return an array containing a list of independent digits in reverse order. 
//Example: 348597 => [7,9,5,8,4,3]

function independent(n) {
  var initialArray = (""+n).split('');
  var reversedArray = [];
  for (var i = initialArray.length - 1; i >= 0; i--) {
    reversedArray[i] = parseInt(initialArray.shift(),10);
  }
  return reversedArray;
}

console.log(independent(348597));








//Fibonacci number is the sum of the previous two sequence numbers. 
//Below is an example of the sequence 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, … 
//Notice the sequence pattern is the sum of the previous two numbers?

function fibonacci(n) {
   if (n < 2){
     return 1;
   }else{
     return fibonacci(n-2) + fibonacci(n-1);
   }
}

console.log(fibonacci(7));

//coupon

function Date(month, day, year){
	this.month = month
	this.day = day
	this.year = year
