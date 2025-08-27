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

const friends = ['Jygzy', 'Agatha', 'Nicole', 'Cheyenne', 'Princess', 'Arden'];
console.log(friends);

const mixed = ['Jonas', 27, true, friends];
console.log(mixed);

const years = new Array(1991, 1984, 2008, 2020);
console.log(years);

// access array elements within array
// arrays starts counting at 0
console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);

//change value per index
friends[1] = "Lyn";
console.log(friends);

const firstName = 'Louren';
const louren = [firstName, "Guades", 2025 - 2004];
console.log(louren);

const calcAge = function (birthYear) {
    return 2025 - birthYear;
};

const ages = [calcAge (2004), calcAge(2000), calcAge(1991)];
console.log(ages);


// array methods - adding elements
//add an item at the end of the list
const newLength = friends.push("Agatha");
console.log(friends);
console.log(newLength);

const newLength2 = friends.push("Lhee");
console.log(friends);
console.log(newLength2);

//add the first item in a list
friends.unshift('Maria');
console.log(friends);

//removing an item at the end of the list
const popped = friends.pop();
const popped2 = friends.pop();
console.log(popped);
console.log(popped2);
console.log(friends);

//removing an item at the start of the list
const shifted = friends.shift();
console.log(shifted);
console.log(friends);

//find an element inside an array
//index of method
console.log(friends.indexOf("Nicole"));
console.log(friends.indexOf("Maria")); // -1 if wala na sa array

//includes
console.log(friends.includes("Lyn"));
console.log(friends.includes("Maria")); // false kasi it does not exist

//array iterations - Loops
for (let i = 0; i < friends.length; i++) {
    console.log(friends[i]);
}

//for each
friends.forEach(
    function(friend, index) {
        console.log(`Friend ${index + 1}: ${friend}`);
    }
);

// arrow function to make it more smaller and compact
friends.forEach((friend, index) => {
  console.log(`Friend ${index + 1}: ${friend}`);
});

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
const grades = [78, 85, 92, 67, 88, 95, 73, 82];

// function to calculate average
function calculateAverage(grades) {
  let sum = 0;
  for (let i = 0; i < grades.length; i++) {
    sum += grades[i];
  }
  return sum / grades.length;
}

// function to find highest grade
function findHighestGrade(grades) {
  let highest = grades[0];
  for (let i = 1; i < grades.length; i++) {
    if (grades[i] > highest) {
      highest = grades[i];
    }
  }
  return highest;
}

// function to find lowest grade
function findLowestGrade(grades) {
  let lowest = grades[0];
  for (let i = 1; i < grades.length; i++) {
    if (grades[i] < lowest) {
      lowest = grades[i];
    }
  }
  return lowest;
}

// function to count passing students
function countPassing(grades, passingGrade) {
  let passedCount = 0;
  grades.forEach(grade => {
    if (grade >= passingGrade) passedCount++;
  });
  return passedCount; 
}

// generates complete report
const average = calculateAverage(grades);
const highest = findHighestGrade(grades);
const lowest = findLowestGrade(grades);
const passing = countPassing(grades, 70);

console.log("=== GRADE REPORT ===");
console.log(`Average: ${average.toFixed(2)}`);
console.log(`Highest: ${highest}`);
console.log(`Lowest: ${lowest}`);
console.log(`Passing students: ${passing} out of ${grades.length}`);