//This variable describes the age of the user
let myAge = 28;

//Dogs age more quickly the first two years of their life
let earlyYears = 2;

// This code gives us the age of a dog after two years
earlyYears *= 10.5;

// This code subtracts the two years from the user's age that have already been calculated
let laterYears = myAge - 2;

// Multiplies the remaining years from the user by the rate at which dogs age after 2 years
laterYears *= 4;

console.log(earlyYears);
console.log(laterYears);

// This line gets the users total age in dog years by adding the different age caclculations
const myAgeInDogYears = earlyYears + laterYears;

// This sets a user name and converts all the letters to lower case... for some reason,
let myName = 'Eric'.toLowerCase();

console.log(`My name is ${myName}. I am ${myAge} years old in human years, which is ${myAgeInDogYears} years old in dog years.`)




