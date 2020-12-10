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