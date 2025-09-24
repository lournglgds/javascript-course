'use strict';

// const person = {
//   name: 'Jonas',
//   greet: function () {
//     console.log(`Hello I am ${this.name}`);
//   },
// };

// person.greet();

//borrow methods
// const anotherPerson = {
//   name: 'Sarah',
// };

// anotherPerson.greet = person.greet;
// anotherPerson.greet();

//detached function = yung key word the this is 'di na bound sa object
// const greetFunction = person.greet;
// greetFunction();

//arrow function behave diff when using 'this' keyword
// const obj = {
//   name: 'Object',

//   regularMethod: function () {
//     this.console.log('Regular:', this.name);
//   },
//   arrowMethod: () => {
//     console.log('Arrow:', this.name);
//   },
// };

// obj.regularMethod();
// obj.arrowMethod();

// const quiz = {
//   name: 'Quiz Object',
//   regularMethod() {
//     console.log('Regular:', this.name);
//   },
//   arrowMethod: () => {
//     console.log('Arrow:', this.name);
//   },
// };

// quiz.regularMethod();
// quiz.arrowMethod();

// const timer = {
//   name: 'Timer',

//   start: function () {
//     console.log(`${this.name} starting...`);

//     const self = this; // to get the value of the timer
//     setTimeout(function () {
//       console.log(`${self.name} finished`);
//     }, 1000);
//   },

// modern ver
//   startModern() {
//     console.log(`${this.name} starting modern...`);

//     setTimeout(() => {
//       console.log(`${this.name} finished modern`);
//     });
//   },
// };

// timer.start();
// timer.startModern();

// arrow function: to direcly run it without directly calling a function (mabilisan na run)

// const user = {
//   name: 'Alice',
//   hobbies: ['reading', 'coding', 'gaming'],

// arrow function loses `this`
//   printHobbiesBad: () => {
//     this.hobbies.forEach(hobby => {
//       console.log(`${this.name} likes ${hobby}`); // this.name is undefined
//     });
//   },

// regular function preserves `this`
//   printHobbiesGood() {
//     this.hobbies.forEach(hobby => {
//       console.log(`${this.name} likes ${hobby}`); // this.name works
//     });
//   },
// };

// user.printHobbiesBad(); // this.name is undefined
// user.printHobbiesGood(); // shows all hobbies

const functionTypes = {
  regularFunction: function () {
    console.log('Arguments length:', arguments.length);
    console.log('First argument:', arguments[0]);
  },

  arrowFunction: (...args) => {
    console.log('Arguments (arrow):', args);
    console.log('Arrow function called');
  },

  modernFunction: (...args) => {
    console.log('Args length:', args.length);
    console.log('First arg:', args[0]);
  },
};

functionTypes.regularFunction('Hello', 'world');
functionTypes.arrowFunction('test');
//modern way = rest parameter para mapagana arrow function
functionTypes.modernFunction('modern', 'approach');
