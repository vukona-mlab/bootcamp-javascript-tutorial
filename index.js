// Array of students
let listOfStudents = ['Vukona', 'Kabelo', 'Refilwe', 'Zack', 'Nokwanda']
// console.log({ listOfStudents });

// mapping
const studentGreeting = listOfStudents.map(student => {
    console.log(student);
    return 'Hey there ' + student
})

console.log(studentGreeting);


const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const newNumbers = numbers.map(number => {
    return number + 10
})
const multiplyingEvenNumbers = numbers.map(number => {
    // console.log({ number, modus: number % 2 });
    if(number % 2) {
        return number 
    } else {
        return number * number
    }
})
console.log({ numbers, newNumbers, multiplyingEvenNumbers });


