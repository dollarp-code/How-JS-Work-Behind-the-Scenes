'use strict';

function calcAge(birthyear) {
  const age = 2024 - birthyear;
  //
  function printAge() {
    let output = `${firstName}, you are ${age}, born in ${birthyear}`;
    console.log(output);

    if (birthyear >= 1981 && birthyear <= 1996) {
      var millenial = true;
      // Creating NEW variable with same name as outer scope's variable
      const firstName = 'steven';

      // Reassigning outer scope's variable
      output = 'NEW OUTPUT';

      const str = `oh, and you're a millenial, ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }
    }
    // console.log(str);
    console.log(millenial);
    // console.log(add(2, 3));
    console.log(output);
  }
  printAge();
  return age;
}

// const firstName = 'qudus';
// calcAge(1996);

// Hoisting with variables

console.log(me);
// console.log(age);
// console.log(job);

var me = 'qudus'; // undefined
const age = 29; // error
let job = 'programmer'; // error

// Hoisting with functions

// console.log(addDecl(2, 3)); // 5
// console.log(addExpr(2, 3)); // Error
// console.log(addArrow(2, 3)); // Error

// function addDecl(a, b) {
//   return a + b;
// }

// const addExpr = function (a, b) {
//   return a + b;
// };

// var addArrow = (a, b) => a + b;

// Example

if (!numProducts) deleteShoppingCart();

var numProducts = 10;

function deleteShoppingCart() {
  console.log('All products deleted');
}

// Example window object

var x = 1; // will create a property on the window object
let y = 2; // will not create a property on the window object
const z = 3; // will not create an object on the window property

console.log(x === window.x); // true
console.log(y === window.y); // false
console.log(y === window.y); // false

// Understanding the THIS keyword
// this keyword/variable: is a Special variable that is created for every every executioner context (every function). Takes the value of (points to) the "owner" of the function in which the this keyword is used.

// console.log(this);

const calcAge2 = function (birthyear) {
  console.log(2037 - birthyear);
  //   console.log(this);
};

calcAge2(1991);

const calcAgeArrow = birthyear => {
  console.log(2037 - birthyear);
  //   console.log(this);
};

calcAgeArrow(1991);

// const qudus = {
//   firstName: 'dolapo',
//   year: 1991,
//   calcAge: function () {
//     console.log(this);
//     console.log(2037 - this.year);
//   },
// };

// qudus.calcAge();

// method borrowing
// const mathilda = {
//   year: 2017,
// };

// mathilda.calcAge = qudus.calcAge;
// mathilda.calcAge();

// const f = qudus.calcAge;
// f();

// Arrow function VS Regular function

// var firstName = 'matilda';
const qudus = {
  firstName: 'dolapo',
  year: 1991,
  calcAge: function () {
    // console.log(this);
    console.log(2037 - this.year);
    // solution 1
    // const self = this; // self or that
    // const isMellenial = function () {
    //   console.log(self);
    //   console.log(self.year >= 1981 && self.year <= 1996);
    //   //   console.log(this.year >= 1981 && this.year <= 1996);
    //solution 2
    const isMellenial = () => {
      console.log(this);
      console.log(this.year >= 1981 && this.year <= 1996);
    };
    isMellenial();
  },
  greet: () => console.log(`Hey ${this.firstName}`),
};

qudus.greet();
qudus.calcAge();

// Arguments keyword
const addExpr = function (a, b) {
  console.log(arguments);
  return a + b;
};
addExpr(2, 5);
addExpr(2, 5, 8, 12);

var addArrow = (a, b) => {
  console.log(arguments);
  return a + b;
};
addArrow(2, 5, 8);
