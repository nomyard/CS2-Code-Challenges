/*
 * Create a function that returns the largest prime palindrome less than 1000.
 * Hint: it's 929
 * You will first want to determine if the number is a palindrome and then determine if it is prime.
 * A palindrome is a number that is the same forwards and backwards: 121, 323, 123454321, etc.
 */


const checkForPrimePalindrome = (num) => {
    num = num + '';
	let reverseNum = num.split("").reverse().join("");
      if(reverseNum === num){
         if(reverseNum % num === 0){
           return true;
         } else if (reverseNum === 0 || reverseNum === 1 ) {
           return false;
         }
      }
    return false;
}


console.log(checkForPrimePalindrome(929));