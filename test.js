// remove repeated value in the array.
// const a = [1, 1, 2, 2, 3, 4];
// const b = [];

// for (let i = 0; i < a.length; i++) {
//   let isDuplicate = false;
//   for (let j = 0; j < b.length; j++) {
//     if (a[i] === b[j]) {
//       isDuplicate = true;
//       break;
//     }
//   }
//   if (!isDuplicate) {
//     b.push(a[i]);
//   }
// }

// console.log(b);

// ------------------------------------------------------------------------------------------------------- //

// reverse the array

// const a = [1, 2, 3, 4];
// const b = [];

// for (let i = a.length - 1; i >= 0; i--) {
//   b.push(a[i]);
// }

// console.log(b);

// ------------------------------------------------------------------------------------------------------- //

// show value in below format in console
// 3
// 6
// 9
// 12

// for (let i = 1; i <= 4; i++) {
//   console.log(i * 3);
// }

// ------------------------------------------------------------------------------------------------------- //

// show in output which value is repeated more in array

// const a = [5, 1, 2, 2, 2, , 2, 2, 1, 3, 4];
// const b = [15, 12, 27, 72, 72, 72, 2, 11, 13, 14];

// const findMostRepeatedValue = (arr) => {
//   const count = {};
//   let maxCount = 0;
//   let repeatedValue;

//   for (let i = 0; i < arr.length; i++) {
//     let value = arr[i];
//     count[value] = (count[value] || 0) + 1;
//     if (count[value] > maxCount) {
//       maxCount = count[value];
//       repeatedValue = value;
//     }
//   }

//   return console.log(
//     `The most repeated value in the array is:", ${repeatedValue} and length is ${maxCount} `
//   );
// };

// findMostRepeatedValue(b);

// ------------------------------------------------------------------------------------------------------- //

// high order function

// function plusFun(a, b) {
//   return a + b;
// }

// function multiplyFunc(a, b) {
//   return a * b;
// }

// function highOrderFunction(logic, a, b) {
//   return logic(a, b);
// }

// const plusFunction = highOrderFunction(plusFun, 5, 3);
// const multiplyFunction = highOrderFunction(multiplyFunc, 4, 4);
// console.log(multiplyFunction);

// ------------------------------------------------------------------------------------------------------- //

// reverse the number

// const a = 1234;

// function reverseNumberFunc(num) {
//   // initial reverse value get here;
//   let reverseNum = 0;
//   // check number is big to 0 so function will be run;
//   while (num > 0) {
//     // get the last value from the num;
//     let rem = num % 10;
//     // added last value in reverse Variable
//     reverseNum = reverseNum * 10 + rem;
//     // remove the last number from num
//     num = Math.floor(num / 10);
//   }
//   // function return reverseNum
//   return reverseNum;
// }

// const showValue = reverseNumberFunc(a);

// console.log(showValue);

// ------------------------------------------------------------------------------------------------------- //

// reverse the sentence

// const a = "Hello World! I am a programmer";

// function reverseWord(value) {
//   let b = value.split(" ").reverse().join(" ");
//   return b;
// }

// let showValue = reverseWord(a);

// console.log(showValue);

// ------------------------------------------------------------------------------------------------------- //

// Example : Given a sorted array of unique integers and a target integer, return true if there exists a pair of numbers that sum to target, false otherwise. This problem is similar to Two Sum. (In Two Sum, the input is not sorted).

// For example, given nums = [1, 2, 4, 6, 8, 9, 14, 15] and target = 13, return true because 4 + 9 = 13.

// let nums = [1, 2, 4, 6, 8, 9, 14, 15];

// function checkForTarget(arr, target) {
//   let left = 0;
//   let right = arr.length -1;

//   while (left < right) {
//     let current = arr[left] + arr[right];

//     if (current == target) {
//       return `${arr[left]} + ${arr[right]} = ${target}`;
//     }

//     if (current > target) {
//       right--;
//     } else {
//       left++;
//     }
//   }
//   return false;
// }

// console.log(checkForTarget(nums,13));

// ------------------------------------------------------------------------------------------------------- //

// Example : Given two sorted integer arrays arr1 and arr2, return a new array that combines both of them and is also sorted.

// let arr1 = [1, 4, 7, 8];
// let arr2 = [3, 5, 9];

// function combine(arr1, arr2) {
//   let i = 0;
//   let j = 0;
//   let ans = [];

//   while (i < arr1.length && j < arr2.length) {
//     if (arr1[i] < arr2[j]) {
//       ans.push(arr1[i]);
//       i++;
//     } else {
//       ans.push(arr2[j]);
//       j++;
//     }
//   }

//   while (i < arr1.length) {
//     ans.push(arr1[i]);
//     i++;
//   }

//   while (j < arr2.length) {
//     ans.push(arr2[j]);
//     j++;
//   }

//   return ans;
// }

// console.log(combine(arr1, arr2));

// ------------------------------------------------------------------------------------------------------- //

// Example:Is Subsequence.

// Given two strings s and t, return true if s is a subsequence of t, or false otherwise.

// A subsequence of a string is a sequence of characters that can be obtained by deleting some (or none) of the characters from the original string, while maintaining the relative order of the remaining characters. For example, "ace" is a subsequence of "abcde" while "aec" is not.

// let a = "abdf";
// let b = "abcdef";

// function isSubsequentFunction(str1, str2) {
//   let i = 0,
//     j = 0;

//   while (i < str1.length && j < str2.length) {
//     if (str1[i] == str2[j]) {
//       i++;
//     }
//     j++;
//   }

//   return i == str1.length;
// }

// console.log(isSubsequentFunction(a, b));

// ------------------------------------------------------------------------------------------------------- //
