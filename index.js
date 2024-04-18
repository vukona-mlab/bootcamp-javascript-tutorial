// working mathematical operators
// +, -, /, *
// string concatenator
console.log("hi there" + " my name is Vukona");

// number addition
console.log(3 + 5);

// conversion: explicit conversion by the programmer
// coercion: implicit conversion by JavaScript

// direct conversion
console.log(String(3) + String(5));
console.log(Number("5") + Number("9"));

// implicit conversion
console.log(5 + 10 + '4');

// subtract
let firstNumber = 100;
let secondNumber = 50
let remainder = firstNumber - secondNumber

console.log(remainder);
console.log(secondNumber - firstNumber);

// division
console.log(firstNumber / secondNumber);
console.log(secondNumber / firstNumber);

// multiplication

console.log(firstNumber * 8);
let product = firstNumber * secondNumber
let newNumber = product / 4
console.log(product);
console.log(newNumber);

// Logical operators
// &&, ||, ==, ===, !==

// if statements
if(5 === 5) {
    console.log(true);

} else {
    console.log(false);
}

if(firstNumber > secondNumber) {
    console.log('first number is higher');
} else {
    console.log('second number is higher');
}

// both conditions are met
if((firstNumber > secondNumber) && (remainder < product)) {
    console.log('both conditions were met');
} else {
    console.log('One or both conditions were not met');
}

// One condition is met
if((firstNumber > secondNumber) && (remainder > product)) {
    console.log('both conditions were met');
} else {
    console.log('One or both conditions were not met');
}

// both conditions are not met
if((firstNumber < secondNumber) && (remainder > product)) {
    console.log('both conditions were met');
} else {
    console.log('One or both conditions were not met');
}

// checking if at least one of the conditions is true
if((firstNumber < secondNumber) || (remainder > product)) {
    console.log('at least one condition met: OR');
} else {
    console.log('Both conditions were not met: OR');
}
// Checking if not equals
if(firstNumber !== 100) {
    console.log("numbers don't match");
} else {
    console.log("numbers do match");
}

// working with return statements
// return a value from a function to the calling line
// return also exits a function execution

function getProductOfTwoNumbers(a, b) {
    const product = a * b
    console.log('in func: ', product);
    return product
}

const calculation = getProductOfTwoNumbers(4, 8) /  10
console.log(calculation);