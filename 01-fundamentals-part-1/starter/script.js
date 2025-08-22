// JavaScript Fundamentals - Part 1
// We'll write our code here!

// let js = "amazing";
// console.log(40 + 8 + 23 - 10);

// console.log("=== VARIABLES ===");

// let firstName = "Jonas";
// console.log(firstName);

// let age = 30;
// age = 31; 
// console.log(age);

// const birthYear = 1991;
// console.log(birthYear);

// const PI = 3.1415;
// console.log(PI);

// var job = "programmer";
// job = "teacher";
// console.log(job);

// age = 26;

// let lastName = "Doe";
// console.log(lastName);


// console.log("=== DATA TYPES ===");

// let age = 23;
// console.log(age);
// console.log(typeof age); 

// let firstName = "Jonas";
// console.log(firstName);
// console.log(typeof firstName); 

// let javascriptIsFun = true;
// console.log(javascriptIsFun);
// console.log(typeof javascriptIsFun); 

// let year;
// console.log(year); 
// console.log(typeof year);

// let dynamicVariable = 23;
// console.log(dynamicVariable, typeof dynamicVariable); 

// dynamicVariable = "Now I'm a string!";
// console.log(dynamicVariable, typeof dynamicVariable); 

// dynamicVariable = true;
// console.log(dynamicVariable, typeof dynamicVariable);

//EXERCISE 1: Personal Info Variables

// const firstName = "Louren";
// console.log(firstName);

// let age = 20;
// console.log(age);

// const faveNumber = 7;
// console.log(faveNumber);

// const likesJavaScript = true;
// console.log(likesJavaScript);

// EXERCISE 2: Variable Reassignment

// let score = 100;
// console.log(score); 
// score = 150;
// console.log(score);

// const score = 100;
// console.log(score); // an error will appear because the variable score has already been declared.

// EXERCISE 3: Data Type Detective
// console.log(typeof 42);
// console.log(typeof "Hello");
// console.log(typeof true);
// console.log(typeof undefined);

////////////////////////////////////
// Basic Operators - Math operators
// console.log("=== MATH OPERATORS ===");

// const now = 2037;
// const ageJonas = now - 1991;
// const ageSarah = now - 2018;
// console.log(ageJonas, ageSarah);

// console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);

// console.log("Math operations:");
// console.log("Addition:", 10 + 5);
// console.log("Subtraction:", 20 - 8); 
// console.log("Multiplication:", 4 * 7); 
// console.log("Division:", 15 / 3);
// console.log("Exponentiation:", 2 ** 3);

// // Math with strings
// const firstName = "Jonas";
// const lastName = "Doe";
// console.log(firstName + " " + lastName);

// console.log("Hello " + "World" + "!"); 
// console.log("I am " + 25 + " years old");

// ////////////////////////////////////
// // Assignment operators
// console.log("=== ASSIGNMENT OPERATORS ===");

// let x = 10 + 5; 
// console.log("x starts as:", x);

// x += 10; 
// console.log("After x += 10:", x);

// x *= 4; 
// console.log("After x *= 4:", x);

// x /= 2; 
// console.log("After x /= 2:", x);

// x++; 
// console.log("After x++:", x); // 51

// x--;
// x--; 
// console.log("After x-- twice:", x); 

// // Exercise: Score Calculator
// let score = 100;
// score += 50;  
// score *= 2;  
// score -= 25;   
// score++;     
// score++;       
// console.log(score);

// ////////////////////////////////////
// // Comparison operators
// console.log("=== COMPARISON OPERATORS ===");

// console.log("Age comparison:");
// console.log(ageJonas > ageSarah); 
// console.log(ageSarah >= 18); 
// console.log(ageJonas < 30); 

// console.log("Number comparisons:");
// console.log(25 > 20); 
// console.log(15 < 10); 
// console.log(18 >= 18); 
// console.log(16 <= 15); 

// const isFullAge = ageSarah >= 18;
// console.log("Sarah is adult:", isFullAge); 

// const isJonasOlder = ageJonas > ageSarah;
// console.log("Jonas is older:", isJonasOlder);

// console.log("Complex comparison:");
// console.log(now - 1991 > now - 2018);

// // Exercise: Age Verification
// const myAge = 20; 
// console.log(myAge >= 18);

// console.log(100 > 99); 

// const comparisonResult = myAge >= 18; 
// console.log(comparisonResult);

// console.log((myAge + 5) > (7 + 11));

// let x, y;
// x = y = 25 - 10 - 5; 
// console.log(x, y);

// const averageAge = (ageJonas + ageSarah) / 2;
// console.log(ageJonas, ageSarah, averageAge);

// Coding Challenge #1: BMI Calculator
//Test Data
// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;

// BMI = mass / height ** 2)
// const BMIMark = massMark / heightMark ** 2;
// const BMIJohn = massJohn / heightJohn ** 2;

// const markHigherBMI = BMIMark > BMIJohn;

// console.log("Mark's BMI:", BMIMark);
// console.log("John's BMI:", BMIJohn);

// console.log("Mark has higher BMI:", markHigherBMI);

////////////////////////////////////
// Strings and Template Literals
// const firstName = "Jonas";
// const job = "teacher";
// const birthYear = 1991;
// const year = 2037;

// const jonas =
// "I'm " + firstName + ", a " + (year - birthYear) + " year old " + job + "!";
// console.log(jonas);

// // modern way
// const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
// console.log(jonasNew);

// // any expression works inside ${}
// console.log(`I'm ${2037 - 1991} years old`);
// console.log(`Math works: ${2 + 3} equals five`);
// console.log(`Comparisons too: ${5 > 3}`); 

// // u can use backticks for any string
// console.log(`Just a regular string...`);

// // Old way 
// console.log(
// "String with \n\
// multiple \n\
// lines"
// );

// // New way
// console.log(`String
// multiple
// lines`);

// // Exercise 1: Personal Introduction
// const myName = "Louren";
// const myAge = 20;
// const myHobby = "Digital Artists";
// const currentYear = 2025;
// const myIntroduction = `Hello, my name is ${myName}, I am ${myAge} years old and I love being a ${myHobby}.`;
// console.log(myIntroduction);

// Exercise 2: Math in Templates
// const myAge = 20;

// const currentYear = 2025;
// const birthYear = currentYear - myAge;

// const message = `Born in ${birthYear}, 10*5 = ${10 * 5}, Adult: ${myAge >= 18}`;
// console.log(message);

// ////////////////////////////////////
// Taking Decisions: if / else Statements
// const age = 15;

// if (age >= 18) {
// console.log("Sarah can start driving license");
// } else {
//   const yearsLeft = 18 - age;
//   console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`);
// }

// const birthYear = 2012;

// let century;
// if (birthYear <= 2000) {
//   century = 20;
// } else {
//   century = 21;
// }
// console.log(century); 

// const score = 85;

// if (score >= 60) {
//   console.log(`You passed with ${score} points! 🎉`);
//   console.log("Congratulations!");
// } else {
//   const pointsNeeded = 60 - score;
//   console.log(`You failed. Need ${pointsNeeded} more points.`);
//}

// Exercise 1: Grade Calculator
// const testScore = 85; 

// if (testScore >= 90) {
//   console.log("Excellent! Grade A");
// } else if (testScore >= 80) {
//   console.log("Good job! Grade B");
// } else if (testScore >= 70) {
//   console.log("Not bad! Grade C");
// } else if (testScore >= 60) {
//   console.log("You passed! Grade D");
// } else {
//   console.log("You failed! Study harder");
// }

// Exercise 2: Age Verification
// const userAge = 17; 

// if (userAge >= 18) {
//   console.log("Welcome! You can access all content");
// } else if (userAge >= 13) {
//   console.log("Welcome! Restricted content only");
// } else {
//   console.log("Sorry, you're too young");
// }

////////////////////////////////////
// Truthy and Falsy Values

// 5 falsy values
// console.log(Boolean(0)); 
// console.log(Boolean(undefined)); 
// console.log(Boolean("Jonas")); 
// console.log(Boolean({})); 
// console.log(Boolean("")); 

// const money = 0;
// if (money) {
//   console.log("Don't spend it all ;)");
// } else {
//   console.log("You should get a job!");
// }

// let height = 0; 
// if (height) {
//   console.log("YAY! Height is defined");
// } else {
//   console.log("Height is UNDEFINED"); 

// Better approach for checking if defined:
// if (height !== undefined) {
//   console.log("Height is defined");
// }

// Exercise: Truth Detector
// const values = [0, 1, "", "hello", undefined, null, NaN, {}, []];

// for (const value of values) {
//   console.log("Value:", value);
//   console.log("Boolean:", Boolean(value));

//   if (value) {
//     console.log("Result: Truthy!");
//   } else {
//     console.log("Result: Falsy!");
//   }
//   console.log("------");
// }

// Coding Challenge #2: BMI Comparison
// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;

// const BMIMark = massMark / heightMark ** 2;
// const BMIJohn = massJohn / (heightJohn * heightJohn);
// console.log(BMIMark, BMIJohn);

// // BMI comparison
// if (BMIMark > BMIJohn) {
//   console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})!`);
// } else if (BMIJohn > BMIMark) {
//   console.log(`John's BMI (${BMIJohn}) is higher than Mark's (${BMIMark})!`);
// } else {
//   console.log(`Mark and John have the same BMI (${BMIMark})!`);
// }

////////////////////////////////////
// Type Conversion and Coercion

// const inputYear = "1991";
// console.log(Number(inputYear), inputYear); 
// console.log(Number(inputYear) + 18); 

// console.log(Number("Jonas")); // NaN (Not a Number) but is a type number
// console.log(typeof NaN);

// console.log(String(23), 23);
// console.log(typeof String(23)); 

// console.log("I am " + 23 + " years old");
// console.log("23" - "10" - 3);
// console.log("23" / "2");
// console.log("23" * "2");

// let n = "1" + 1;
// n = n - 1; 
// console.log(n);

// console.log(2 + 3 + 4 + "5"); 
// console.log("10" - "4" - "3" - 2 + "5"); 

// // Exercise 1: Equality Detective
// console.log("5" + 2); 
// console.log("5" - 2); 
// console.log("5" * 2); 
// console.log("5" / 2); 

// const userAge = "25"; 
// const userScore = 95;

// // string to numb
// const ageNumber = Number(userAge);
// console.log(ageNumber, typeof ageNumber);

// //num to string
// const scoreString = String(userScore);
// console.log(scoreString, typeof scoreString);

// Exercise 2: Fix the Bug
// const num1 = Number(prompt("First number:"));
// const num2 = Number(prompt("Second number:"));
// const sum = num1 + num2;
// console.log(`Sum: ${sum}`);

////////////////////////////////////
// Equality Operators

// const age = "18";
// if (age === 18) console.log("You just became an adult :D (strict)");
// if (age == 18) console.log("You just became an adult :D (loose)");

// console.log("18" === 18); // different types
// console.log("18" == 18); // coercion happens
// console.log(18 === 18); // same type and value

// == can be dangerous
// console.log("0" == 0); //string converted
// console.log(0 == false); //boolean converted
// console.log("0" == false); //both converted
// console.log(null == undefined); //special case

//cases that cause bugs
// console.log("" == 0);
// console.log("   " == 0); 

// Convert explicitly, then compare strictly
// const favourite = Number(prompt("What's your favourite number?"));
// console.log(favourite);
// console.log(typeof favourite);

// if (favourite === 23) {
//   console.log("Cool! 23 is an amazing number!");
// } else if (favourite === 7) {
//   console.log("7 is also a cool number");
// } else if (favourite === 9) {
//   console.log("9 is also a cool number");
// } else {
//   console.log("Number is not 23 or 7 or 9");
// }

// not-equal operator
// if (favourite !== 23) console.log("Why not 23?");

//Exercise 1: Equality Detective
// console.log(5 === "5");
// console.log(5 == "5");
// console.log(true === 1);
// console.log(true == 1);
// console.log(false === 0);
// console.log(false == 0);

// Exercise 2: Fix the Login System
// const username = prompt("Username:");
// const password = prompt("Password:");

// if (username === "admin" && password === "1234") {
//   console.log("Welcome admin!");
// } else {
//   console.log("Access denied");
// }

////////////////////////////////////
// Logical Operators

// const hasDriversLicense = true;
// const hasGoodVision = true; 

// console.log(hasDriversLicense && hasGoodVision); // AND
// console.log(hasDriversLicense || hasGoodVision); // OR
// console.log(!hasDriversLicense); // NOT

// const isTired = false; 
// console.log(hasDriversLicense && hasGoodVision && !isTired);

// if (hasDriversLicense && hasGoodVision && !isTired) {
//   console.log("Sarah is able to drive!");
// } else {
//   console.log("Someone else should drive...");
// }

//complex scenarios
// const age = 20;
// const hasPermission = true;
// const hasExperience = false;

// if ((age >= 18 || hasPermission) && hasExperience) {
//   console.log("Approved to drive");
// } else {
//   console.log("Not approved to drive");
// }

// Exercise 1: Club Entry System
// const age = 20;     
// const hasID = false; 
// const isVIP = true; 

// if ((age >= 21 && hasID) || isVIP) {
//   console.log('Welcome to the club!');
// } else {
//   console.log('Sorry, you cannot enter');
// }

// Exercise 2: Weather Advisor
// const temperature = 30; // Celsius
// const isRaining = false;
// const isWindy = true;

// if (temperature >= 20 && temperature <= 30 && !isRaining && !isWindy) {
//   console.log("Perfect day!");
// } else if (temperature >= 15 && temperature <= 35 && !isRaining) {
//   console.log("Good day!");
// } else {
//   console.log("Stay inside");
// }

////////////////////////////////////
// The Conditional (Ternary) Operator

// const age = 23;

// const drink = age >= 18 ? "wine" : "water";
// console.log(drink);

// let drink2;
// if (age >= 18) {
// drink2 = "wine";
// } else {
// drink2 = "water";
// }
// console.log(drink2);

// console.log(`I like to drink ${age >= 18 ? "wine" : "water"}`);

// const status = score >= 60 ? "passed" : "failed";
// const message = isLoggedIn ? "Welcome back!" : "Please log in";
// const discount = isPremium ? 0.2 : 0.1;

// if (score >= 90) {
//   console.log("Excellent!");
//   grade = "A";
//   bonus = true;
// } else if (score >= 80) {
//   console.log("Good job!");
//   grade = "B";
// }

// Exercise 1: Status Messages
// Login status
// const isLoggedIn = true;
// let welcomeMessage = isLoggedIn ? "Welcome back!" : "Please sign in";
// console.log(welcomeMessage);

// Price with discount
// const isPremium = false;
// let price = isPremium ? 100 * 0.8 : 100;
// console.log(price);

// Exercise 2: Smart Responses
// const score = 85;
// const weather = "sunny";
// const battery = 15; // percentage

// Smart responses
// const scoreMsg = `Your score: ${score} (${score >= 60 ? "Passed" : "Failed"})`;
// const weatherMsg = `Weather is ${weather} (${weather === "sunny" ? "Great for outdoor activities" : "Stay inside"})`;
// const batteryMsg = `Battery: ${battery}% (${battery < 20 ? "Low battery warning" : "Battery OK"})`;

// console.log(scoreMsg);
// console.log(weatherMsg);
// console.log(batteryMsg);

// Final Challenge: Tip Calculator
const bill = 275; 
const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);