// TASK 1 :

// Write a JavaScript conditional statement to find the largest of five numbers. Console log the result in the string format (sentence + number variable).

// Numbers : 15, -2, 22, 0, 13

//Solution 1

var arr = [15, -2, 22, 0, 13];

var maxNumber = arr[0];
if (maxNumber < arr[1]) {
    maxNumber = arr[1];
} else if (maxNumber < arr[2]) {
    maxNumber = arr[2];
} else if (maxNumber < arr[3]) {
    maxNumber = arr[3];
} else if (maxNumber < arr[4]) {
    maxNumber = arr[4];
}

console.log("The largest of the five numbers in the array is " + maxNumber + ".");

// Solution 2

var arr = [15, -2, 22, 0, 13];

console.log(`The largest of the five numbers in the array is ${Math.max(...arr)}.`);

// TASK 2 :

// Write a JavaScript conditional statement to find the sign (+ or -) of product of three numbers. Console log the result.

// Numbers : 3, -7, 2 

var product = 3 * -7 * 2;

product >= 0 ? console.log(`The product of three number is ${product}, which is positive number.`) : console.log(`The product of three number is ${product}, which is negative number.`);

// TASK 3 :

// Write a switch statement to console log "Hello world" in 5 different languages

var city = "madrid";

switch (city) {
    case "belgrade":
        console.log("Здраво Свете!");
        break;
    case "zagreb":
        console.log("Pozdrav svijete!");
        break;
    case "london":
        console.log("Hello world!");
        break;  
    case "madrid":
        console.log("¡Hola Mundo!");
        break;  
    case "ljubljana":
        console.log("Pozdravljen svet!");
        break;
    default:
        console.log("Please select one of the following cities: Belgrade, Zagreb, London, Madrid or Ljubljana. Thanks!");    
}

// TASK 4 :

// Create userAge variable, and give it some value.

// Write a ternary operator that checks if a user is 28 or older. Store result in a variable.

// Then write an if/else statement using result from variable. 

// If it's false (first check this), console log:

// "User is less than 28 years old"

// If it's true, create new if/else statement that check if user is older than 28.

// If it's true, console log:

// "User is older than 28"

// If not, console log:

// "User is 28"

var userAge = 28;
var isUserOlder;

userAge >= 28 ? isUserOlder = true : isUserOlder = false;

if(!isUserOlder) {
    console.log("User is less than 28 years old.");
} else if(userAge > 28) {
    console.log("User is older than 28.");
} else {
    console.log("User is 28.");
}