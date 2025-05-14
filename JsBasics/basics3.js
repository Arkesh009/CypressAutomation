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


