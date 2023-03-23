let num1 = prompt("Enter the first number:");
let num2 = prompt("Enter the second number:");
let operator = prompt("Enter the operator (+, -, *, /, %):");

num1 = parseFloat(num1); // convert string input to float
num2 = parseFloat(num2);

let result;

switch(operator) {
  case "+":
    result = num1 + num2;
    alert(num1 + " + " + num2 + " = " + result);
    break;
  case "-":
    result = num1 - num2;
    alert(num1 + " - " + num2 + " = " + result);
    break;
  case "*":
    result = num1 * num2;
    alert(num1 + " * " + num2 + " = " + result);
    break;
  case "/":
    result = num1 / num2;
    alert(num1 + " / " + num2 + " = " + result);
    break;
  case "%":
    result = num1 % num2;
    alert(num1 + " % " + num2 + " = " + result);
    break;
  default:
    alert("Invalid operator!");
}
