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

//! Function return + Argument parsing
// function myFun_4(x, y) {
//   var xx = x; //10
//   var yy = y; //40
//   var z = xx + yy;
//   return z;
// }
// console.log(myFun_4(10, 90));

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

// console.log(person.isEmployed);
// console.log(person["age"]);

// ================= 10 JavaScript Array =================

/*  
1) JavaScript Array is a single variable that is used to store elements of different data types.
2) stores a collection of values
3) Arrays in JavaScript can hold values of any data type, including numbers, strings, objects, and even other arrays.


*/

// var name = ["Amit", "Raj", "Rohit", "Jamal", "Mitu"];

// console.log(name);

// ================= 11 JavaScript Array Concat =================

// var x = ["a", "b"];
// var y = ["1", "2", "3"];
// var z = x.concat(y);

// console.log(z);

// ================= 12 JavaScript Array From =================

/*  
1) The from() method creates a new array
*/

// var x = Array.from("AB  C");
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

// var result = words.filter((item) => item.length < 6);

// console.log(words[0].length);

// console.log(result);

// ================= 14 JavaScript Array findIndex =================

/*  
1) The findIndex() method returns the index (position) of the first element
*/

// var words = [
//   "spray",
//   "limit",
//   "elite",
//   "exuberant",
//   "destruction",
//   "present",
// ];

// const result = words.findIndex((item) => item.length > 6);

// console.log(result);

// ================= 15 JavaScript String concat =================

/*
The concat() method joins two or more strings.
The concat() method does not change the existing strings.
The concat() method returns a new string.
*/

// var text1 = "sea";
// var text2 = "food";
// var result = text1.concat(text2);
// console.log(result);

// ================= 16 JavaScript String indexOf =================

/*
The indexOf() method returns -1 if the value is not found.
The indexOf() method is case sensitive.
*/

// var text = "Hello world, welcome to the universe.";
// var result = text.indexOf("welcome");

// console.log(result);

// ================= 17 JavaScript String replace() =================

/*
The replace() method returns a new string with the value(s) replaced.
The replace() method does not change the original string.
*/

// var string = "Javascript is fun";
// var newString = string.replace("fun", "Awesome");
// console.log(string);
// console.log(newString);

// ================= 18 JavaScript Date Object =================

// var today = new Date();
// var DD = today.getDate();
// var MM = today.getMonth();
// var YYYY = today.getFullYear();
// var hh = today.getHours();
// var mm = today.getMinutes();
// var ss = today.getSeconds();

// console.log(ss);

//! ================= ES6 =================

/* 

ES6 is a modern update of JavaScript
ES6 or ECMAScript 6 is a scripting language.
ECMAScript is generally used for client-side scripting
used for writing server applications and services by using Node.js



WHY SHOULD I LEARN ES6 ?
    For React JS
    For React Native
    For Vue js
    For Electron JS
    Or Any Node.js dependent development



    What we are learning about ES6:
    ES6 Basic’s
    ES6 Function’s
    ES6 Array’s
    ES6 Object
    ES6 Class
    ES6 String
    ES6 Advance Feature’s

*/

// ================= 1 "use strict"  =================

/* 
Fixes the mistakes
Strict mode makes it easier to write "secure" JavaScript.
Find real errors.
*/

// "use strict";
// x = 3.14;

// ================= 2 Spread Operator  =================

/* 
The JavaScript spread operator (...) allows us to quickly copy all or part of an existing array or object into another array or object.


Spread= প্রসার, বিস্তার
Three dots (...).
Array কে প্রশস্ত করে নতুন ভেলু যোগ করে

*/

// var numbersOne = [1, 2, 3];
// var numbersTwo = [4, 5, 6];
// var numbersCombined = [...numbersOne, ...numbersTwo];

// console.log(numbersCombined);

// var myVehicle = {
//   brand: "Ford",
//   model: "Mustang",
//   color: "red",
// };

// var updateMyVehicle = {
//   type: "car",
//   year: 2021,
//   color: "yellow",
// };

// var myUpdatedVehicle = { ...myVehicle, ...updateMyVehicle };

// console.log(myUpdatedVehicle);

// ================= 3 rest parameter  =================

// function getFirstElementOfArray(...args) {
//   console.log(args[0]);
// }

// var result = getFirstElementOfArray("shirshak", "Sabtech", "Javascript");

// ================= 4 dynamic function  =================

// var myFun = function () {
//   console.log("This is function.");
// };

// ================= 4 ES6 Variables  =================

/*

    Using let:
        let keyword is assigned the block scope
        let cannot be re-declared.
        can be reassigned a value.

    Using const:
        It cannot be reassigned a value.
        It is block scoped.
        A constant cannot be re-declared.


*/

// ================= 5 scope in javascript  =================

/*
In JavaScript, a variable has two types of scope:

1. Global Scope
    In the global scope, the variable can be accessed from any part of the JavaScript code.


2. Local Scope
    In the local scope, the variable can be accessed within a function where it is declared.

*/

// var x = 10;

// var myFun = function () {
//   var y = 20;
//   console.log(x + y);
// };

// myFun();

// var myFun_2 = function () {
//   console.log(x+y);
// };

// myFun_2();

// !  ES6 FUNCTION

// ================= 6 anonymous function  =================

// A function without a name

// var myFun = function () {
//   console.log("Hello");
// };

// myFun();

// ================= 6 Arrow functions  =================

/*
    To write smaller function syntax.
    Arrow functions make your code more readable and structured.
    Arrow functions are anonymous functions
    Can declare without the function keyword.
*/

// const myFun = () => {
//   console.log("Hello");
// };

// myFun();
