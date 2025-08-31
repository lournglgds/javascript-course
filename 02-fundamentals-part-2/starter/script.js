// console.log("Part 2: Functions Raedy");

// console.log(`=== FUNCTIONS ===`);

// function logger() {
//     console.log(`My name is Louren`);

// }

// logger();
// logger();
// logger();

// function fruitProcessor(apples, oranges){
//     console.log(apples, oranges);
//     const juice = `Juice with ${apples} apples and ${oranges} oranges`;
//     return juice;
// }

// console.log(fruitProcessor(5, 3));

// const juice1= fruitProcessor (5, 0);
// const juice2= fruitProcessor (2,4);
// const juice3 = fruitProcessor (2,4);
// console.log(juice2);

// // Function expressions
// const calcAge = function (birthYear){
//     return 2025 - birthYear;
// };

// console.log(calcAge(2004));
// console.log(calcAge(1991));

// function introduce(firstName, lastName, age){
//     const introduction = `Hi, I'm ${firstName} ${lastName} and I'm ${age} years old`;
//     return introduction;
// }

// console.log(introduce("Louren", "Guades", "20"));

// function yearsUntilRetirement(birthYear, firstName){
//     const age = calcAge(birthYear);
//     const retirement = 65 - age;

//     if(retirement > 0){
//         return `${firstName} retires in ${retirement} years`;
//     }else{
//         return `${firstName} had already retired`;
//     } 
// }

// console.log(yearsUntilRetirement(2004, "Louren"));

// // global scope
// const globalVar = "I am global";

// function testScope() {
//     const localVar = "I am local";
//     console.log(globalVar);
//     console.log(localVar);
// }

// testScope();
// // console.log(localVar); // undefined bcs it's outside
// // console.log(globalVar);

// // Coding Challenge #1
// function calcAverage(score1, score2, score3){
//     return(score1 + score2 + score3) / 3;

// }
// // checking the winner
// function checkWinner(avgDolphins, avgKoalas){
//     if(avgDolphins >= 2 * avgKoalas){
//         return`Dolphins win (${avgDolphins} vs ${scoreKoalas})`;
//     }else if(scoreKoalas >= 2 * scoreDolphins){
//         return`Koalas win (${avgKoalas} vs ${avgDolphins})`;
//     }else{
//         return `No team wins! Koalas: ${avgKoalas}, Dolphins: ${avgDolphins}`;
//     }
// }

// //test data 1
// let scoreDolphins = calcAverage(44, 23, 71);
// let scoreKoalas = calcAverage(65, 54, 49);
// console.log(checkWinner (scoreDolphins, scoreKoalas));

// //test data 2
// scoreDolphins = calcAverage(85, 54, 41);
// scoreKoalas = calcAverage(23, 34, 27);
// console.log(checkWinner(scoreDolphins, scoreKoalas));

// const student1Grade = 85; 
// const student2Grade = 92; 
// const student3Grade = 78; 

// const grades = [85, 92, 87, 96, 88];
// console.log(grades);

// const friends = ['Jygzy', 'Agatha', 'Nicole', 'Cheyenne', 'Princess', 'Arden'];
// console.log(friends);

// const mixed = ['Jonas', 27, true, friends];
// console.log(mixed);

// const years = new Array(1991, 1984, 2008, 2020);
// console.log(years);

// access array elements within array
// arrays starts counting at 0
// console.log(friends[0]);
// console.log(friends[2]);

// console.log(friends.length);

//change value per index
// friends[1] = "Lyn";
// console.log(friends);

// const firstName = 'Louren';
// const louren = [firstName, "Guades", 2025 - 2004];
// console.log(louren);

// const calcAge = function (birthYear) {
//     return 2025 - birthYear;
// };

// const ages = [calcAge (2004), calcAge(2000), calcAge(1991)];
// console.log(ages);


// array methods - adding elements
//add an item at the end of the list
// const newLength = friends.push("Agatha");
// console.log(friends);
// console.log(newLength);

// const newLength2 = friends.push("Lhee");
// console.log(friends);
// console.log(newLength2);

//add the first item in a list
// friends.unshift('Maria');
// console.log(friends);

//removing an item at the end of the list
// const popped = friends.pop();
// const popped2 = friends.pop();
// console.log(popped);
// console.log(popped2);
// console.log(friends);

//removing an item at the start of the list
// const shifted = friends.shift();
// console.log(shifted);
// console.log(friends);

//find an element inside an array
//index of method
// console.log(friends.indexOf("Nicole"));
// console.log(friends.indexOf("Maria")); // -1 if wala na sa array

//includes
// console.log(friends.includes("Lyn"));
// console.log(friends.includes("Maria")); // false kasi it does not exist

//array iterations - Loops
// for (let i = 0; i < friends.length; i++) {
//     console.log(friends[i]);
// }

// //for each
// friends.forEach(
//     function(friend, index) {
//         console.log(`Friend ${index + 1}: ${friend}`);
//     }
// );

// arrow function to make it more smaller and compact
// friends.forEach((friend, index) => {
//   console.log(`Friend ${index + 1}: ${friend}`);
// });

// const grades2 = [85, 92, 78, 60, 88, 74];
// let total = 0;

// for (let i = 0; i < grades2.length; i++) {
//     total += grades2[1];
// }

// const average = total / grades2.length;
// console.log(`Average grade: ${average.toFixed(2)}`);

// let passedCount = 0;
// grades2.forEach(
//     grade => {
//         if(grade >= 70) passedCount++;
//     });
//     console.log(`${passedCount} out of ${grades2.length} students paseed`);

    
// Coding Challenge #2 - Student Grade Manager
// const grades = [78, 85, 92, 67, 88, 95, 73, 82];

// function to calculate average
// function calculateAverage(grades) {
//   let sum = 0;
//   for (let i = 0; i < grades.length; i++) {
//     sum += grades[i];
//   }
//   return sum / grades.length;
// }

// function to find highest grade
// function findHighestGrade(grades) {
//   let highest = grades[0];
//   for (let i = 1; i < grades.length; i++) {
//     if (grades[i] > highest) {
//       highest = grades[i];
//     }
//   }
//   return highest;
// }

// function to find lowest grade
// function findLowestGrade(grades) {
//   let lowest = grades[0];
//   for (let i = 1; i < grades.length; i++) {
//     if (grades[i] < lowest) {
//       lowest = grades[i];
//     }
//   }
//   return lowest;
// }

// function to count passing students
// function countPassing(grades, passingGrade) {
//   let passedCount = 0;
//   grades.forEach(grade => {
//     if (grade >= passingGrade) passedCount++;
//   });
//   return passedCount; 
// }

// generates complete report
// const average = calculateAverage(grades);
// const highest = findHighestGrade(grades);
// const lowest = findLowestGrade(grades);
// const passing = countPassing(grades, 70);

// console.log("=== GRADE REPORT ===");
// console.log(`Average: ${average.toFixed(2)}`);
// console.log(`Highest: ${highest}`);
// console.log(`Lowest: ${lowest}`);
// console.log(`Passing students: ${passing} out of ${grades.length}`);


// array limitation problem
// const jonasArray = [
//     "Jonas",
//     "Schmedtmann",
//     2037 - 1991,
//     "teacher",
//     ["Michael", "Peter", "Steven"],
// ];

// console.log(jonasArray[0]);
// console.log(jonasArray[1]);
// console.log(jonasArray[2]);
// console.log(jonasArray[3]);

// object creation
// literal syntax
// console.log("=== OBJECTS ===");

// const jonas = {
//   firstName: "Jonas",
//   lastName: "Schmedtmann",
//   age: 2037 - 1991,
//   job: "teacher",
//   friends: ["Michael", "Peter", "Steven"],
// };
// console.log(jonas);

// //arrays: u need to remember the order
// const jonasArray = [
//   "Jonas",
//   "Schmedtmann",
//   46,
//   "teacher",
//   ["Michael", "Peter", "Steven"],
// ];

// //objects: clear what each value means
// const jonasObject = {
//   firstName: "Jonas",
//   lastName: "Schmedtmann",
//   age: 46,
//   job: "teacher",
//   friends: ["Michael", "Peter", "Steven"],
// };

// //to access values from an object
// //dot notation: clean and readable
// console.log(jonas.firstName);
// console.log(jonas.lastName);
// console.log(jonas.age);
// console.log(jonas.job);
// console.log(jonas.friends);

// //bracket notation: flexible
// console.log(jonas["firstName"]);
// console.log(jonas["lastName"]); 
// console.log(jonas["age"]);

// //bracket notation superpower
// const nameKey = "Name";
// console.log(jonas["first" + nameKey]);
// console.log(jonas["last" + nameKey]);

// //modification
// jonas.job = "programmer";
// jonas["age"] = 35;
// console.log(jonas);

// //adding new properties
// jonas.location = "Portugal";
// jonas["twitter"] = "@jonasschmedtman";
// jonas.hasDriversLicense = true;
// console.log(jonas); 

// // Excercise 1: personal object
// const book = {
//   title: "The Mountain Is You",
//   author: "Brianna Wiest",
//   pages: 248,
//   isRead: false,
// };  

// const playlist = {
//   name: "Romance Untold" ,
//   creator: "Enhypen",
//   songs: ["Highway 1009", "XO (Only If You Say Yes)", "Paranormal"],
//   genre: "R&B",
// };

// console.log(book.title);
// console.log(playlist["creator"]);

// //adding new properties
// book.YearPublished = 2020;
// playlist["releaseYear"] = 2024;

// //modification
// book.isRead = true;
// playlist.genre = "K-Pop";

// console.log(book);
// console.log(playlist);

// //use array for: ordered list of items
// const listOfYears = [1991, 1984, 2008, 2020];
// const shoppingList = ["apples", "bananas", "milk", "bread"];
// const testScores = [85, 92, 78, 96];

// //use object for: named, descriptive data
// const person = {
//   name:"Jonas",
//   age: 46,
//   occupation: "teacher",
// };

// const car = {
//   brand: "Toyota",
//   model: "Camry",
//   year: 2020,
//   color: "blue",
// };

// //combining objects and arrays
// const student = {
//   name: "Sarah",
//   grades: [85, 92, 78],
//   address: {
//     street: "123 Main St",
//     city: "New York",
//   }
// };
// console.log(student.grades[0]);
// console.log(student.address.city);

// //object methods
// const jonas2 = {
//   firstName: "Jonas",
//   lastName: "Schmedtmann",
//   birthYear: 1991,
//   job: "teacher",
//   friends: ["Michael", "Peter", "Steven"],
//   hasDriversLicense: true,

//   calcAge: function (birthYear) {
//     return 2037 - birthYear;
//   },
// };

// console.log(jonas2.calcAge(1991));
// console.log(jonas2.calcAge(jonas2.birthYear));

// //this keyword
// const jonasImproved = {
//   firstName: "Jonas",
//   lastName: "Schmedtmann",
//   birthYear: 1991,
//   job: "teacher",
//   friends: ["Michael", "Peter", "Steven"],
//   hasDriversLicense: true,

//   calcAge: function () {
//     console.log(this); // access own birthYear
//     return 2037 - this.birthYear;
//   },
// };

// console.log(jonasImproved.calcAge());

// //storing calculated values
// const jonasAdvanced = {
//   firstName: "Jonas",
//   lastName: "Schmedtmann",
//   birthYear: 1991,
//   job: "teacher",
//   friends: ["Michael", "Peter", "Steven"],
//   hasDriversLicense: true,

//   calcAge: function () {
//     this.age = 2037 - this.birthYear;
//     return this.age;
//   },

//   getSummary: function () {
//     return `${this.firstName} is a ${this.calcAge()}-year old ${
//       this.job
//     }, and he has ${this.hasDriversLicense ? "a" : "no"} driver's license.`;
//   }
// };

// console.log(jonasAdvanced.calcAge());
// console.log(jonasAdvanced.age); 
// console.log(jonasAdvanced.getSummary());

// // Exercise 2: Calculator Obkect
// const calculator = {
//   num1: 10,
//   num2: 5,
//   operator: "+",

//   add: function () {
//     return this.num1 + this.num2;
//   },

//   subtract: function () {
//     return this.num1 - this.num2;
//   },

//   multiply: function () {
//     return this.num1 * this.num2;
//   },

//   divide: function () {
//     return this.num1 / this.num2;
//   },

//   calculate: function () {
//     switch (this.operator) {
//       case "+":
//         return this.add();
//       case "-":
//         return this.subtract();
//       case "*":
//         return this.multiply();
//       case "/":
//         return this.divide();
//       default:
//         return "Invalid operator";
//     }
//   },

//   getResult: function () {
//     return `${this.num1} ${this.operator} ${this.num2} = ${this.calculate()}`;
//   },
// };

// console.log(calculator.calculate());
// console.log(calculator.getResult());

// //coding challenge #3
// const user = {
//   firstName: "Sarah",
//   lastName: "Johnson",
//   birthYear: 1995,
//   location: "New York",
//   interests: ["photography", "travel", "coding"],
//   friends: [
//     { name: "Michael", status: "active" },
//     { name: "Emma", status: "inactive" },
//     { name: "David", status: "active" },
//   ],
//   isActive: true,

//   // Calculate age method
//   calcAge: function () {
//     const currentYear = new Date().getFullYear();
//     this.age = currentYear - this.birthYear;
//     return this.age;
//   },

//   // add friend 
//   addFriend: function (name, status = "active") {
//   this.friends.push({ name: name, status: status });
//   return this.friends.length;
// },

//   getActiveFriends: function () {
//     return this.friends.filter(friend => friend.status === "active").length;
//   },

//   //active status
//   toggleStatus: function () {
//     this.isActive = !this.isActive;
//     return this.isActive;
//   },

//   //profile summary
//   getSummary: function () {
//     return `
//     === Profile Summary ===
//     Name: ${this.firstName} ${this.lastName}
//     Age: ${this.calcAge()}
//     Location: ${this.location}
//     Interests: ${this.interests.join(", ")}
//     Total Friends: ${this.friends.length}
//     Active Friends: ${this.getActiveFriends()}`;
//   },
// };

// console.log(user.getSummary());
// user.addFriend("Alex", "active");
// user.toggleStatus();
// console.log(`\nAfter updates:`);
// console.log(user.getSummary());

// query selector that uses CSS selector
// const message = document.querySelector(".message");
//gets us the entire element object w all its properties 
// console.log(message);

// const button = document.querySelector("#btn");
// console.log(button);

// const heading = document.querySelector("h1");
// console.log(heading);
//query selector returns the fisrt matching element

// console.log(message.textContent);
// console.log(button.id);
// console.log(heading.tagName);
// console.log(heading.textContent);

//getElementById 
// const buttonById = document.getElementById("btn");
// console.log(buttonById);
// console.log(buttonById === button);

//querySelectorAll
// const allParagraphs = document.querySelectorAll("p");
// console.log(allParagraphs);
// console.log(allParagraphs[0]); //1st paragraph


//content and style manipulation
//modify element content
const message = document.querySelector(".message");
console.log(message.textContent);

message.textContent = "Hello from JavaScript";
console.log(message.textContent);

// inner HTML
message.innerHTML = "<strong>Bold text from JS!</strong>";
//inner text
console.log(message.innerText);

//input element value
const input = document.querySelector(".guess");
console.log(input.value);
input.value = "Default text";

const heading = document.querySelector("h1");
heading.style.color = "red";
heading.style.backgroundColor = "yellow"; 
heading.style.fontSize = "3rem";

const button = document.querySelector("#btn");
button.style.padding = "20px";
button.style.borderRadius = "10px";

//event listener = user interaction
button.addEventListener("click", function () {
  console.log("Button was clicked!");
  message.textContent = "You clicked the button!";
  message.style.color = "green";
});

let clickCount = 0;

//change the color of the button based on num of clicks
button.addEventListener("click", function () {
  clickCount++;
  button.textContent = `Clicked ${clickCount} times`;
  button.style.backgroundColor = `hsl(${clickCount * 30}, 70%, 50%)`;
});

//input event
const display = document.querySelector(".message");
input.addEventListener("input", function () {
  const userText = input.value;
  message.textContent = `You typed: ${userText}`;
  message.style.fontSize = `${userText.length + 10}px`;
});

//keyboard event = responds to specific keys
input.addEventListener("keydown", function (event) {
  console.log(`Key pressed: ${event.key}`);

  if (event.key === "Enter") {
    display.textContent = `You pressed Enter! Text was: ${input.value}`;
    input.value = ""; 
  }
});
