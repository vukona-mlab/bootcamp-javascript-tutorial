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