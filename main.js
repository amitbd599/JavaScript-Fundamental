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

// ================= 8 JavaScript Function =================

/*
Why use function?

1) Code Reusability
2) Less Code
3) Easy to understand
4) Code organization

*/

//! Normal function
// function myFun_1() {
//   console.log("Hello JS Function! myFun_1");
// }

// myFun_1();

//! Function Argument parsing
// function myFun_2(text) {
//   console.log(text);
// }
// myFun_2("Hello JS Function! myFun_2");

//! Function return
// function myFun_3() {
//   var x = 10;
//   var y = 20;
//   var z = x + y;
//   return z;
// }
// console.log(myFun_3());

//! Function return
// function myFun_4(x, y) {
//   var x = x;
//   var y = y;
//   var z = x + y;
//   return z;
// }
// console.log(myFun_4(10, 40));

// ================= 9 JavaScript Object =================

/*  
1) Represents a collection of key-value pairs
2) Objects in JavaScript can hold values of any data type, including numbers, strings, booleans, arrays, and even other objects.
3) Have Properties, value and Methods

*/

// var person = {
//   name: "John",
//   age: 30,
//   isEmployed: true,
// };

// console.log(person.name);
// console.log(person["age"]);

// ================= 10 JavaScript Array =================

/*  
1) JavaScript Array is a single variable that is used to store elements of different data types.
2) stores a collection of values
3) Arrays in JavaScript can hold values of any data type, including numbers, strings, objects, and even other arrays.


*/

// var name = ["Amit", "Raj", "Rohit", "Jamal", "Mitu"];

// console.log(name[0]);

// ================= 11 JavaScript Array Concat =================

// var x = ["a", "b"];
// var y = ["1", "2"];
// var z = x.concat(y);

// console.log(z);

// ================= 12 JavaScript Array From =================

/*  
1) The from() method creates a new array
*/

// var x = Array.from("AB C");
// console.log(x); // [ 'A', 'B', ' ', 'c' ]

// ================= 13 JavaScript Array Filter =================

/*  
1) The filter() method creates a new array
*/

// var words = [
//   "spray",
//   "limit",
//   "elite",
//   "exuberant",
//   "destruction",
//   "present",
// ];

// const result = words.filter((word) => word.length > 6);
// console.log(words[0].length);

// console.log(result);

// ================= 14 JavaScript Array findIndex =================

/*  
1) The findIndex() method returns the index (position) of the first element
*/

var words = [
  "spray",
  "limit",
  "elite",
  "exuberant",
  "destruction",
  "present",
];

const result = words.findIndex((item) => item.length > 6);

console.log(result);


// ================= 15 JavaScript Array Find =================

