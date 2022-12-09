// var, let, and const

// console.log, console.error

// datatypes

// camelCase

// concatenation

// math stuff

// incrementing and decrementing numbers

// string length and arrays

// nested arrays

// array methods

// local vs global scope

// functions

// understanding arguments and return keyword

// if statements and conditional logic

// equality vs strict equality

// switch statements

// JavaScript Objects

// JSON

// While and For Loops

// Nested Loops

// Recursion (confusing)

// Random numbers with Math

// Ternary Operator

// Parsing strings to be numbers

// Arrow functions

// Default function parameters

// spread operator

// object destructuring

// Creating strings with `` backticks

// Classes and Object Oriented Programming

// Getters and Setters

// Private class variables and methods

// Exporting and importing code from different files

// Promises and async await

// Regular Expressions

// Basic Algorithm Scripting

// Intermediate Algorithm Scripting

// JavaScript Scripting Projects

let num = 34; // number

let string = "string"; // string

let hi = "What's up";

console.log("hi :>> ", hi);

class Person {
  #name;
  #age;
  constructor(name, age) {
    this.#name = name;
    this.#age = age;
  }

  get name() {
    return this.#name;
  }

  run(miles = 0) {
    console.log("I am running " + miles + " miles far.");
  }

  talk(sentence) {
    console.log(sentence);
  }
}

const Landon = new Person("Landon", 13);

console.log(Landon.name);

console.log(Landon);

Landon.talk("I would like the trail mix");

Landon.age = 30;
Landon.name = "Landon Schlangen";
