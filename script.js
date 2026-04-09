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