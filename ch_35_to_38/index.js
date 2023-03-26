const value = prompt("Enter a number to factorialize:");

// Define the factorial function
function factorial(num) {
  if (num === 0 || num === 1) {
    return 1;
  } else {
    return num * factorial(num - 1);
  }
}

// Calculate the factorial of the user's input
const result = factorial(value);

// Print the result in the console
console.log(result);




