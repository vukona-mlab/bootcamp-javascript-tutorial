// Primitive data types: prepacked/predefined with the language itself
// Non-primitive: up to the programmer to define

// Primitive: String, Number, Boolean, undefined, null

let username = 'Vukona';
let age = 35;
let isFacilitator = true;
let isInPrison;
let surname = null

console.log({ username, age, isFacilitator, isInPrison, surname});

// Non-primitive: Array, Object, LinkedLists ...
// Array of students
let listOfStudents = ['Vukona', 'Kabelo', 'Refilwe', 'Zack', 'Nokwanda']
console.log({ listOfStudents });
console.log(listOfStudents.length );

// object of student Vukona
let student = {
    name: 'Vukona',
    surname: 'Mnisi',
    age: 35,
    isFacilitator: true
}

console.log( student );