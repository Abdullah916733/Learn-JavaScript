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
