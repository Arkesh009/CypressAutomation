// Arrays

// Creating an array with a length of 5 (empty slots, no elements initialized)
var marks = Array(5);

// Creating an array with specific elements using the 'new' keyword
// The array will contain the elements: [20, 40, 35, 12, 37, 100]
var marks = new Array(20, 40, 35, 12, 37, 100);

// Logging the array to the console
console.log(marks); // Output: [20, 40, 35, 12, 37, 100]

// Logging the length of the array (number of elements in the array)
console.log(marks.length); // Output: 6

// Adding an element to the end of the array
marks.push(99); // Adds 99 to the end of the array
console.log(marks); // Output: [20, 40, 35, 12, 37, 100, 99]

// Removing the last element from the array
marks.pop(); // Removes the last element (99) from the array
console.log(marks); // Output: [20, 40, 35, 12, 37, 100]

// Adding an element to the beginning of the array
marks.unshift(14); // Adds 14 to the beginning of the array
console.log(marks); // Output: [14, 20, 40, 35, 12, 37, 100]

// Summing the array elements using a for...of loop
let sum = 0;
for (let i of marks) {
    sum += i; // Add each element to sum
}
console.log("Sum = ", sum); // Output the total sum

// Summing the array elements using the reduce function (more concise)
let total = marks.reduce((sum, marks) => sum + marks, 0); // sum is accumulator, marks is current value
console.log("Reduce function total = ", total); 

// Creating a new array with only even numbers from scores
let scores = [12,13,14,16];
// Array to store even scores
let evenScores = []

// Loop through scores and push even numbers to evenScores
for(let i=0; i<scores.length; i++){
    if(scores[i]%2 == 0){
        evenScores.push(scores[i]);
    }
}
console.log("Even Scores = ", evenScores);

// Using the filter method to get even numbers (more concise)
let newFilterEvenScores = scores.filter(score => score%2 == 0); // Returns a new array with only even numbers
console.log("New Filter Even Score = ", newFilterEvenScores);
