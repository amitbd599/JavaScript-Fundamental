/* ===================  1 Print in Browser =================== */
//! EX:

// document.write("Hello World");

/* ===================  2 JavaScript comments =================== */

//! EX:

// single-line comment

/*
Comment with
multiple lines
*/

/* ===================  3 JavaScript Variables =================== */

// A JavaScript variable is simply a name of storage location
// Name must start with a varter (a to z or A to Z), underscore( _ ), or dollar( $ ) sign
// After first varter we can use digits (0 to 9), for example value1.
// JavaScript variables are case sensitive, for example x and X are different variables.

//! EX:

// var x = 5;
// var y = 6;
// var z = x + y;

/* ===================  4 JavaScript data types =================== */
// JavaScript provides different data types to hold different types of values. There are two types of data types in JavaScript.

// Primitive data type
// Non-primitive (reference) data type

//! EX:

//! Primitive data type: String, Number, Boolean, undefined, null

//! Strings:
// var color = "Yellow";
// var lastName = "Johnson";

//! Numbers:
// var length = 16;
// var weight = 7.5;

//! Booleans
// var x = true;
// var y = false;

//! Undefined
// var x;

//! Null  - No value at present
// var x = null;

//!  Non-primitive data type: Object, Array

//! Object:
// const person = { firstName: "John", lastName: "Doe" };

//! Array object:
// const cars = ["Saab", "Volvo", "BMW"];

// ================= 5 JAVASCRIPT OPERATORS=================

//!!  Arithmetic Operators

// +	Addition
// -	Subtraction
// *	Multiplication
// **	Exponentiation (ES2016)
// /	Division
// %	Modulus (Remainder)
// ++	Increment
// --	Decrement

//! Comparison (Relational) Operators

// == Equal to
// === Equal value and equal type
// != Not equal
// !== Not equal value or not equal type
// > Greater than
// < Less than
// >= Greater than or equal to
// <= Less than or equal to
// ? Ternary operator

//! Bitwise Operators

// &	Bitwise AND
// |	Bitwise OR
// ^	Bitwise XOR
// ~	Bitwise NOT
// <<	Left shift
// >>	Sign-propagating right shift
// >>>	Zero-fill right shift

//! Logical Operators

// && Logical AND
// || Logical OR
// ! Logical not

//! Assignment Operators

// =	Assignment operator	a = 7; // 7
// +=	Addition assignment	a += 5; // a = a + 5
// -=	Subtraction Assignment	a -= 2; // a = a - 2
// *=	Multiplication Assignment	a *= 3; // a = a * 3
// /=	Division Assignment	a /= 2; // a = a / 2
// %=	Remainder Assignment	a %= 2; // a = a % 2

// ================= 5 JAVASCRIPT IF-ELSE =================

//!  if statement

// var x = 10;
// if (x === 10) {
//   console.log("True");
// }

//!  if else statement

// var x = 10;
// if (x === 10) {
//   console.log("True");
// } else {
//   console.log("False");
// }

//!  if else if statement

// var x = 10;
// if (x === 10) {
//   console.log("True");
// } else if (x === 11) {
//   console.log("False");
// } else {
//   console.log("No result found.");
// }

// ================= 6 JAVASCRIPT SWITCH =================

// var myDate = new Date().getDay();
// var day;
// switch (myDate) {
//     case 0:
//       day = "Sunday";
//       break;
//     case 1:
//       day = "Monday";
//       break;
//     case 2:
//        day = "Tuesday";
//       break;
//     case 3:
//       day = "Wednesday";
//       break;
//     case 4:
//       day = "Thursday";
//       break;
//     case 5:
//       day = "Friday";
//       break;
//     case 6:
//       day = "Saturday";
//   }

//   console.log(day);

// ================= 7 JS LOOP =================

//! for loop

// let array = ["a", "b", "c"];
// for (var i = 0; i < array.length; i++) {
//   console.log(array[i]);
// }

// var n = 100;
// var sum= 0;
// for (var i = 1; i <= n; i++) {
//   sum = sum + i;
// }

// console.log(sum);

//! while loop

// var i = 10;
// while (i <= 15) {
//   console.log(i);
//   i++;
// }

// do while loop

// var i = 10;
// do {
//   console.log(i);
//   i++;
// } while (i <= 25);
