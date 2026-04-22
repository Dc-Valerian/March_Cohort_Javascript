// let age = 10;

// if (age >= 18) {
//   console.log("You're an adult");
// } else {
//   console.log("ya a shild");
// }

// // if..else if ...for multiple conditios check
// let score = 49;

// if (score >= 90) {
//   console.log("Grade :A");
// } else if (score >= 70) {
//   console.log("Grade B");
// } else if (score >= 50) {
//   console.log("Grade c");
// } else {
//   console.log("You failed");
// }

// // SWITCH STATEMENT
// // switch statement is used to compare one value with multple possible options....often as an alternative to multiple if...else statement

// let day = 3;

// switch (day) {
//   case 1:
//     console.log("Monday");
//     break;

//   case 2:
//     console.log("Tuesday");
//     break;

//   case 3:
//     console.log("wednesday");
//     break;

//   default:
//     console.log("invalid day");
// }

// // Another example of switch case
// let num1 = 20;
// let num2 = 4;
// let operator = "+";

// switch (operator) {
//   case "+":
//     console.log(num1 + num2);
//   // break;

//   case "-":
//     console.log(num1 - num2);
//     break;

//   case "*":
//     console.log(num1 * num2);
//     break;

//   case "/":
//     console.log(num1 / num2);
//     break;
//   default:
//     console.log("Invalid operator");
// }

// let isRaining = true;
// if (isRaining) {
//   console.log("Take an Umbrella");
// } else {
//   console.log("ENJOY THE SUNSHINE");
// }

// // TERNARY OPERATOR
// // condition ? value_if_true : value_if_false;

// let age2 = 18;
// if (age2 >= 18) {
//   console.log("You can vote");
// } else {
//   console.log("You are a minor");
// }

// let age3 = 20;

// let result = age3 >= 18 ? "You can vote" : "You are a minor";

// console.log(result);

// Loop....for loop is used to repeat a block of code a certain number of times
// for (initialization; condition; increment) {
//   // code to be executed
// }

// for (let i = 1; i <= 100000000000000; i++) {
//   console.log(i);
// }

// for (let i = 1; i <= 100000000; i++) {
//   console.log("I'm Sorry" + " " + i);
// }

// WHILE LOOP ......A while loop executes a code as long as a specified condition is true
// while (condition) {
//   // code to be executed
// }

for (let k = 1; k <= 5; k++) {}
// let j = 1;
// while (j <= 5) {
//   console.log(j);
//   j++;
// }

// while (true) {
//   console.log("heheheh");
// }

// do while loop...A do while loop is similar to a while loop but it guarantees that the code block will be executed at least once, even if the condition is false at the beginning

// do {
//   // code to be executed
// } while (condition);

// let m = 1;
// do {
//   console.log(m);
//   m++;
// } while (m <= 8);

// for loop ...condition checked when the loop is executed
// while...before execution
// do-while...after execution

// for (let chi = 1; chi <= 100; chi++) {
//   if (chi === 25) {
//     // break;
//     console.log("im at 25");
//   }
//   console.log(chi);
// }

// Print Even Numbers
// for (let q = 0; q <= 20; q++) {
//   if (q % 2 === 0) {
//     console.log(q);
//   }
// }

// FUNCTION
// A RESUABLE BLOCK OF CODE THAT PERFORMS A SPECIFIC TASK

function functionName(paramemeter) {
  // code to be executed
}

function greet() {
  console.log("Hello , my first function");
}

greet();
// Paraemter.....A parameter is a variable listed in the function definition.
// Arguments are the actual values passed to a function when it is called.

function greet2(parameteer1, parameter2) {
  console.log("Hello " + parameteer1 + " " + parameter2);
}

greet2("Valerian", 474);

function add(b, c, d) {
  console.log(b + c - d);
}
add(5, 10, 49);

// RETURN STATEMENT
// The return statement sends a value back from the function....Instead of just printing a result, the function returns the value so it can be used elsewhere.

function add2(x, y = 4, c, d = 5) {
  console.log(x + y + c + d);
}
add2(5, 40);

function add1(x) {
  function add2(y) {
    return x + y;
  }
  return add2;
}

const result = add1(2);
console.log(result(7));

const myObject = {
  name: "Valerian",
  age: 13,
  address: {
    city: "Lagos",
    country: "Nigeria",
  },
  gender: false,
};
console.log(myObject);

const person = {
  firstname: "valerian",
  lastname: "Oluwaseun",
  age: 13,
  address: {
    street: "123 Main St",
    city: "Lagos",
    country: "Nigeria",
    zip: "12345",
  },
};
// USING DOT NOTATION TO ACCESS OBJECT PROPERTIES
console.log(person.lastname);

// USING BRACKET NOTATION TO ACCESS OBJECT PROPERTIES
console.log(person["address"]);

person.gender = "male";
person.address.country;
delete person.age;
console.log(person);

// EVENTS
// AN EEVENT IS AN ACTION THAT HAPPENS IN THE BROWSER WHICH JAVASCRIPT CAN DETECT AND RESPOND TO

// types of events
// click ......when a user click on an element
// mouseover.....when the mouse moves  over an element
// keydown......when a keyboard key is pressed down
// submit.....when a form is submitted
// load .....when a page finishes loading

// EVENT HANDLER / LISTENER
// An event handler is the function that runs when an event occurs

// onclick ...eventlistener
// onsubmit

// ARRAY
// AN Array is a way to store multiple values in a single variable

// Without Array
let fruit1 = "Apple";
let fruit2 = "Banana";
let fruit3 = "Cherry";

// With Array
let fruits = ["Apple", "Banana", "Cherry"];
console.log(fruits.length);

// Array Methods
// push().....adds an element to the end of an array
fruits.push("Orange");
console.log(fruits);

// pop().....removes the last element from an array
fruits.pop();
console.log(fruits);

// unshift().....adds an element to the beginning of an array
fruits.unshift("Mango");
console.log(fruits);

// shift().....removes the first element from an array
fruits.shift();
console.log(fruits);

// includes()....check for existencee of an element in an array
console.log(fruits.includes("Banana"));

// indexof()....find the index position of an element in an array
console.log(fruits.indexOf("Cherry"));

console.log(fruits);

// Slice
// Splice
// split

// Math()..is a inbuilt javascript object that helps with mathematical operations

// Math.random()...generates a random number between 0 and 1
0.28883;
0.999932232332;
0.3545434334;

// Math.floor()...rounds a number down to the nearest integer
console.log(Math.floor(4.7)); // 4
console.log(Math.floor(9.2)); // 9

// Math.ceil()...rounds a number up to the nearest integer
console.log(Math.ceil(4.2)); // 5
console.log(Math.ceil(9.8)); // 10

// Math.round()...rounds a number to the nearest integer
console.log(Math.round(4.2));

let randomNumber = Math.floor(Math.random() * 100);
console.log(randomNumber);
