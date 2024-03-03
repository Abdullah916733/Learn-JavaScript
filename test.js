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
