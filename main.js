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

// Exp: 1
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

// Exp: 2

// let fruit = 'apple';
// switch (fruit) {
//   case 'banana':
//     console.log('Bananas are $0.99 per pound.');
//   case 'apple':
//     console.log('Apples are $1.29 per pound.');
//   case 'orange':
//     console.log('Oranges are $0.89 per pound.');
//   default:
//     console.log('Sorry, we are out of ' + fruit + '.');
// }

// ================= 7 JS LOOP =================

//! for loop ===========

//! Example : 1
// Basic For Loop

// let array = ["a", "b", "c"];
// for (var i = 0; i < array.length; i++) {
//   console.log(array[i]);
// }

//! Example : 2
// For Loop with Array

// const fruits = ['apple', 'banana', 'cherry'];

// for (let i = 0; i < fruits.length; i++) {
//     console.log(fruits[i]);
// }

//! Example : 3
// For Loop with Conditional
// for (let i = 0; i <= 10; i++) {
//     if (i % 2 === 0) {
//         console.log(i);
//     }
// }

//! Example : 4
// Nested For Loop

// for (let i = 1; i <= 10; i++) {
//     let row = '';
//     for (let j = 1; j <= 10; j++) {
//         row += (i * j) + '\t';
//     }
//     console.log(row);
// }

//! Example : 5
// For Loop with Objects

// const person = {
//   name: 'John',
//   age: 30,
//   city: 'New York',
// };

// for (let key in person) {
//   if (person.hasOwnProperty(key)) {
//     console.log(`${key}: ${person[key]}`);
//   }
// }

//! Example : 6
// For Loop with Break and Continue

// for (let i = 0; i < 10; i++) {
//   if (i === 5) {
//     break; // Exit the loop when i is 5
//   }
//   if (i % 2 === 0) {
//     continue; // Skip the current iteration if i is even
//   }
//   console.log(i);
// }

//! Example : 7
// For Loop with Decrement

// for (let i = 10; i >= 0; i--) {
//   console.log(i);
// }

//! Example : 8
// Sum data n

// var n = 100;
// var sum= 0;
// for (var i = 1; i <= n; i++) {
//   sum = sum + i;
// }

// console.log(sum);

//! while loop ===========

//! Example : 1
// Basic Counter

// let counter = 1;

// while (counter <= 5) {
//   console.log(counter);
//   counter++;
// }

//! Example : 2
// Sum Numbers

// let sum = 0;
// let number = 1;

// while (number <= 10) {
//   sum += number;
//   number++;
// }

// console.log('Sum:', sum);

//! Example : 3
// Finding a Number

// const numbers = [1, 3, 5, 7, 9];
// const target = 7;
// let found = false;
// let i = 0;

// while (i < numbers.length && !found) {
//   if (numbers[i] === target) {
//     found = true;
//     console.log('Number found at index:', i);
//   }
//   i++;
// }

// if (!found) {
//   console.log('Number not found');
// }

//! do while loop ==========

//! Example : 1
// Basic

// let i = 1;

// do {
//   console.log(i);
//   i++;
// } while (i <= 5);

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

// ================= 13 JavaScript Array Method Reference Guide =================

//! 1)  Array at() method in JavaScript allows you to access elements of an array using a relative index.

// const array = [10, 20, 30, 40, 50];

// console.log(array.at(0)); // Output: 10 (first element)
// console.log(array.at(2)); // Output: 30 (third element)
// console.log(array.at(-1)); // Output: 50 (last element)
// console.log(array.at(-3)); // Output: 30 (third from last element)

//! 2)  Array concat() method in JavaScript is used to merge two or more arrays.

// let array1 = [1, 2, 3];
// let array2 = [4, 5, 6];

// let combinedArray = array1.concat(array2);

// console.log(combinedArray); // Output: [1, 2, 3, 4, 5, 6]

//! 3)  Array copyWithin() method in JavaScript is used to shallow copy part of an array to another location in the same array and return it without modifying its length.

// Basic Syntax
// array.copyWithin(target, start, end)

// let arr = [1, 2, 3, 4, 5];
// arr.copyWithin(0, 3); // Copy elements starting from index 3 to the beginning
// console.log(arr); // Output: [4, 5, 3, 4, 5]

//! 4)  Array every()  method in JavaScript tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value (true or false).

// exp : 1
// const numbers = [1, 2, 3, 4, 5];
// const allPositive = numbers.every((num) => num > 0);
// console.log(allPositive); // Output: true

// exp : 2
// const numbers = [2, 4, 6, 8, 10];
// const allEven = numbers.every(num => num % 2 === 0);
// console.log(allEven); // Output: true

//! 4)  Array fill() method in JavaScript is used to fill the elements of an array with a static value.

// let array = new Array(5); // Creates an array of length 5
// array.fill(0); // Fills the array with 0
// console.log(array); // Output: [0, 0, 0, 0, 0]

//! 5)  Array filter() is a powerful method in JavaScript that allows you to create a new array containing elements that pass a certain condition

// exp : 1
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const evenNumbers = numbers.filter((num) => num % 2 === 0);
// console.log(evenNumbers); // Output: [2, 4, 6, 8, 10]

// exp : 2
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

//! 5)  Array join() method returns an array as a string
// let words = ["Hello", "world"];
// let sentence = words.join(" ");
// console.log(sentence); // "Hello world"

//! 5)  Array find() method returns the value of the first element in the array that satisfies the provided testing function. If no such element is found, it returns undefined.

// exp : 1
// const numbers = [1, 2, 3, 4, 5];
// const found = numbers.find(num => num === 3);
// console.log(found); // Output: 3

// exp : 2
// const fruits = [
//   { name: 'apple', color: 'red' },
//   { name: 'banana', color: 'yellow' },
//   { name: 'grape', color: 'purple' },
// ];
// const foundFruit = fruits.find((fruit) => fruit.color === 'yellow');
// console.log(foundFruit); // Output: { name: 'banana', color: 'yellow' }

//! 5)  Array findIndex() method in JavaScript returns the index of the first element in the array that satisfies the provided testing function.

// exp : 1
// const numbers = [1, 3, 5, 7, 8, 9];
// const evenIndex = numbers.findIndex((num) => num % 2 === 0);
// console.log(evenIndex); // Output: 4 (index of the first even number 8)

// exp : 2
// const fruits = ["apple", "banana", "cherry", "date"];
// const startsWithCIndex = fruits.findIndex(fruit => fruit.startsWith('c'));
// console.log(startsWithCIndex);

//! 5)  Array from() Converting a string to an array of characters
// exp : 1
// const str = 'hello';
// const charsArray = Array.from(str);
// console.log(charsArray); // Output: ['h', 'e', 'l', 'l', 'o']

// exp : 2
// const set = new Set([1, 2, 3, 4, 5]);
// const arrayFromSet = Array.from(set);
// console.log(arrayFromSet); // Output: [1, 2, 3, 4, 5]

//! 5)  Array includes() method in JavaScript is used to check if an array includes a certain value among its entries, returning true or false accordingly.

// exp : 1
// const array = [1, 2, 3, 4, 5];
// console.log(array.includes(3)); // Output: true
// console.log(array.includes(6)); // Output: false

// exp : 2
// const array = ['apple', 'banana', 'orange'];
// console.log(array.includes('banana')); // Output: true
// console.log(array.includes('grape')); // Output: false

//! 5)  Array indexOf() method to get index of array element

// exp : 1
// const fruits = ['apple', 'banana', 'orange', 'apple', 'mango'];
// const indexOfApple = fruits.indexOf('apple');
// console.log(indexOfApple); // Output: 0

// exp : 2
// const fruits = ['apple', 'banana', 'orange', 'apple', 'mango'];
// const indexOfSecondApple = fruits.indexOf('apple', 1);
// console.log(indexOfSecondApple); // Output: 3

//! 5)  Array join() method in JavaScript is used to join all elements of an array into a string.

// exp : 1
// const fruits = ["Apple", "Banana", "Orange"];
// const joinedString = fruits.join(); // Apple,Banana,Orange
// console.log(joinedString)

// exp : 2
// const fruits = ["Apple", "Banana", "Orange"];
// const joinedString = fruits.join("|"); // Apple,Banana,Orange
// console.log(joinedString)

//! 5)  Array lastIndexOf() method returns -1 if the element is not found in the array.

// exp : 1
// const numbers = [1, 2, 3, 4, 5, 4, 3, 2, 1];
// const lastIndex = numbers.lastIndexOf(3);
// console.log(lastIndex); // Output: 6

// exp : 2
// const numbers = [1, 2, 3, 4, 5, 4, 3, 2, 1];
// const lastIndex = numbers.lastIndexOf(3, 4); // Start searching from index 4 backward
// console.log(lastIndex); // Output: 2

//! 5)  Array length property showing how to get the length

// exp : 1
// let fruits = ["Apple", "Banana", "Cherry"];
// console.log(fruits.length); // Output: 3

// exp : 2
// let emptyArray = [];
// console.log(emptyArray.length); // Output: 0

//! 5)  Array pop() method in JavaScript is used to remove the last element from an array and return that element

// exp : 1
// let fruits = ["Apple", "Banana", "Cherry"];
// let lastFruit = fruits.pop();
// console.log(fruits);     // Output: ["Apple", "Banana"]
// console.log(lastFruit);  // Output: "Cherry"

//! 5)  Array push() method in JavaScript is used to add one or more elements to the end of an array and returns the new length of the array.

// exp : 1
// let fruits = ['apple', 'banana'];
// let newLength = fruits.push('orange');
// console.log(fruits);     // Output: ['apple', 'banana', 'orange']
// console.log(newLength);  // Output: 3

// exp : 2
// let numbers = [1, 2, 3];
// let newLength = numbers.push(4, 5, 6);
// console.log(numbers);    // Output: [1, 2, 3, 4, 5, 6]
// console.log(newLength);  // Output: 6

//! 5)  Array push() method reverse an array using a loop

// exp : 1
// let arr = [1, 2, 3, 4, 5];
// arr.reverse();
// console.log(arr);  // Output: [5, 4, 3, 2, 1]

//! 5)  Array shift() method in JavaScript is used to remove the first element from an array and return that element.

// exp : 1
// let fruits = ["apple", "banana", "cherry"];
// let firstFruit = fruits.shift();
// console.log(firstFruit); // Output: "apple"
// console.log(fruits); // Output: ["banana", "cherry"]

// exp : 2
// let numbers = [1, 2, 3, 4, 5];
// while (numbers.length > 0) {
//     let firstNumber = numbers.shift();
//     console.log(firstNumber); // Output: 1, then 2, then 3, then 4, then 5
// }
// console.log(numbers); // Output: []

//! 5)  Array slice() method in JavaScript is used to create a shallow copy of a portion of an array into a new array object.

// exp : 1
// let fruits = ["Apple", "Banana", "Cherry", "Date", "Elderberry"];
// let citrus = fruits.slice(1, 3);
// console.log(citrus); // Output: ["Banana", "Cherry"]
// console.log(fruits); // Output: ["Apple", "Banana", "Cherry", "Date", "Elderberry"]

// exp : 2
// let colors = ["Red", "Green", "Blue", "Yellow", "Purple"];
// let primaryColors = colors.slice(2);
// console.log(primaryColors); // Output: ["Blue", "Yellow", "Purple"]

//! 5)  Array some() method in JavaScript is used to test whether at least one element in the array passes the test implemented by the provided function.

// exp : 1
// const numbers = [1, 2, 3, -4, 5];
// const hasPositive = numbers.some((number) => number === 3);
// console.log(hasPositive); // Output: true

// exp : 2
// const numbers = [1, 3, 5, 7, 8];
// const hasEven = numbers.some((number) => number % 2 === 0);
// console.log(hasEven); // Output: true

//! 5)  Array sort() method in JavaScript to sort arrays.

// exp : 1
// const fruits = ["banana", "orange", "apple", "mango"];
// fruits.sort();
// console.log(fruits); // Output: ["apple", "banana", "mango", "orange"]

// exp : 2
// const numbers = [4, 2, 5, 1, 3];
// numbers.sort((a, b) => a - b);
// console.log(numbers); // Output: [1, 2, 3, 4, 5]

// explain
// [4, 2, 5, 1, 3]
// [2, 4, 5, 1, 3]  // 4-2 = 2  positive
// [2, 4, 5, 1, 3]  // 4-5 = -1  negative
// [1, 2, 4, 5, 3]  // 5-1 = 4  positive -> 4-1 = 3  positive -> 2-1 = 1  positive
// [1, 2, 3, 4, 5]  // 5-3 = 2  positive -> 4-3 = 1  positive -> 2-3 = -1  positive

//! 5)  Array splice() method adds and/or removes array elements
// exp : 1
// let fruits = ['apple', 'banana', 'cherry', 'date'];
// fruits.splice(1, 2); // (index, Number of items to be removed)
// console.log(fruits); // Output: ['apple', 'cherry']

// exp : 2
// let fruits = ['apple', 'cherry'];

// fruits.splice(1, 0, 'banana', 'date'); // Add 'banana' and 'date' starting from index 1
// console.log(fruits); // Output: ['apple', 'banana', 'date', 'cherry']

// exp : 3
// let fruits = ['apple', 'banana', 'cherry', 'date'];
// fruits.splice(1, 2, 'orange', 'grape'); // Remove 'banana' and 'cherry', then add 'orange' and 'grape' starting from index 1
// console.log(fruits); // Output: ['apple', 'orange', 'grape', 'date']

//! 5)  Array toString() method converts each element of an array to a string and then concatenates those strings with a comma separator
// const fruits = ['Apple', 'Banana', 'Orange'];
// console.log(fruits.toString()); // Output: Apple,Banana,Orange

//! 5)  Array unshift()  method in JavaScript adds one or more elements to the beginning of an array and returns the new length of the array
// let fruits = ['apple', 'banana', 'orange'];
// fruits.unshift('grape');
// console.log(fruits); // Output: ['grape', 'apple', 'banana', 'orange']

//! ================= 15 JavaScript For In Loop =================
// exp : 1
// const numbers = [1, 2, 3, 4, 5];
// for (let index in numbers) {
//   console.log(numbers[index]);
// }

// exp : 2
// const fruits = ['apple', 'banana', 'orange'];
// for (let index in fruits) {
//   console.log(`Index: ${index}, Value: ${fruits[index]}`);
// }

// exp : 3
// const person = {
//     name: 'John',
//     age: 30,
//     gender: 'male'
//   };

//   for (let key in person) {
//     console.log(`${key}: ${person[key]}`);
//   }

//! ================= 15 JavaScript ForEach Loop =================

// exp : 1
// const numbers = [1, 2, 3, 4, 5];
// numbers.forEach(function (number) {
//   console.log(number);
// });

//! ================= 15 JavaScript map Loop =================
// exp : 1
// const numbers = [1, 2, 3, 4, 5];
// const doubledNumbers = numbers.map((num) => console.log(num));

// exp : 2
// const colors = ["red", "green", "blue"];
// const indexedColors = colors.map((color, index) => `${index + 1}: ${color}`);
// console.log(indexedColors); // Output: ["1: red", "2: green", "3: blue"]

//! ================= 15 Javascript string methods =================

//! 1)  String charAt() method in JavaScript is used to return the character at a specified index in a string.

// exp : 1
// let str = "Hello, World!";
// let char = str.charAt(0); // Gets the first character
// console.log(char); // Output: "H"

//! 2)  String concat() method is for combining  strings in JavaScript.

// exp : 1
// let string1 = "Hello";
// let string2 = "World";
// let string3 = "!";
// let resultString1 = string1.concat(" ", string2);
// console.log(resultString1); // Output: "Hello World"
// let resultString2 = string1.concat(" ", string2, string3);
// console.log(resultString2); // Output: "Hello World!"

//! 2)  String replace() method in JavaScript is used to replace a part of a string with another string.

// exp : 1
// let str = "Hello, world!";
// let newStr = str.replace("world", "JavaScript");
// console.log(newStr); // Output: "Hello, JavaScript!"

//! ================= 15 JavaScript String concat =================

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

// console.log(x);

// ================= 2 Spread Operator  =================

/* 
The JavaScript spread operator (...) allows us to quickly copy all or part of an existing array or object into another array or object.


Spread= প্রসার, বিস্তার
Three dots (...).
Array কে প্রশস্ত করে নতুন ভেলু যোগ করে

*/

// var numbersOne = [1, 2, 3]; // 1,2,3
// var numbersTwo = [4, 5, 6]; // 4,5,6
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
//   console.log(args[2]);
// }

// var result = getFirstElementOfArray("shirshak", "Sabtech", "Javascript");

// ================= 4 dynamic function  =================

// var myFun = function () {
//   console.log("This is function.");
// };

// myFun();

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
// var y = 20;
// var myFun = function () {

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

// const myFun = (item) => {
//   console.log(item);
// };

// myFun("Hello JS");

//! JavaScript OOP

// ================= 1 JavaScript  Object =================
// var billGates = {
//   firstName: "Bill",
//   lastName: "Gates",
//   age: 65,
//   salary: 10000,
//   isEmployed: true,
//   child: {
//     firstName: "Jane",
//     lastName: "Doe",
//     age: 30,
//     salary: 10000,
//     isEmployed: true,
//   },
// };

// console.log(billGates.firstName);
// console.log(billGates["firstName"]);

// ================= 2 JavaScript  ES6 Class =================

// class myClass {
//   x = 50;
//   myFun() {
//     console.log("Hello JS");
//   }
//   myFun_2() {
//     console.log("Hello JS_2");
//   }
//   myFun_3(value) {
//     console.log(value);
//   }
// }

// var obj = new myClass(); // উক্ত ক্লাসের অবজেক্ট তৈরি করা

// console.log(obj.x);

// ================= 3 Constructor =================

// class myClass {
//   constructor() {
//     console.log("Hello");
//   }

//   x = 50;
//   myFun() {
//     console.log("Hello JS");
//   }
//   myFun_2() {
//     console.log("Hello JS_2");
//   }
//   myFun_3(value) {
//     console.log(value);
//   }
// }

// var obj = new myClass();
// console.log(obj.x);

// ================= 4 Constructor Parameter pass =================

// class myClass {
//   constructor(x, y) {
//     this.x = x;
//     this.y = y;
//   }

//   add() {
//     let res = this.x + this.y;
//     console.log(res);
//   }
// }

// var obj = new myClass(10, 20);

// obj.add();

// ================= 5 Static Keyword =================

// class myClass {
//   static myFun() {
//     console.log("Hello");
//   }
// }

// myClass.myFun();

// ================= 6 Class inheritance =================

// class parent {
//   myFunParent() {
//     console.log("Hello parent.");
//   }
// }

// class child extends parent {
//   myFunChild() {
//     console.log("Hello child.");
//   }
// }

// var obj = new child();

// obj.myFunChild();

// ================= 7 Supper Keyword =================

// class parent {
//   myFunParent() {
//     console.log("Hello parent.");
//   }
// }

// class child extends parent {
//   myFunChild() {
//    super.myFunParent()
//   }
// }

// var obj = new child();

// obj.myFunChild();
