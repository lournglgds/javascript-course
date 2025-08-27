console.log("Part 2: Functions Raedy");

console.log(`=== FUNCTIONS ===`);

function logger() {
    console.log(`My name is Louren`);

}

logger();
logger();
logger();

function fruitProcessor(apples, oranges){
    console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges`;
    return juice;
}

console.log(fruitProcessor(5, 3));

const juice1= fruitProcessor (5, 0);
const juice2= fruitProcessor (2,4);
const juice3 = fruitProcessor (2,4);
console.log(juice2);

// Function expressions
const calcAge = function (birthYear){
    return 2025 - birthYear;
};

console.log(calcAge(2004));
console.log(calcAge(1991));

function introduce(firstName, lastName, age){
    const introduction = `Hi, I'm ${firstName} ${lastName} and I'm ${age} years old`;
    return introduction;
}

console.log(introduce("Louren", "Guades", "20"));

function yearsUntilRetirement(birthYear, firstName){
    const age = calcAge(birthYear);
    const retirement = 65 - age;

    if(retirement > 0){
        return `${firstName} retires in ${retirement} years`;
    }else{
        return `${firstName} had already retired`;
    } 
}

console.log(yearsUntilRetirement(2004, "Louren"));

// global scope
