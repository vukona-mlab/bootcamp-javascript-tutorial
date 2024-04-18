// Array of students
let listOfStudents = ['Vukona', 'Kabelo', 'Refilwe', 'Zack', 'Nokwanda']
// console.log({ listOfStudents });

// filtering
const specificNameFiltering = listOfStudents.filter(student => {
    return student === 'Vukona'
})

console.log(specificNameFiltering);

const checkingNamesWithA = listOfStudents.filter(student => {
    console.log(student.toLowerCase());
    // convert to lowercase
    const editedName = student.toLowerCase()
    return editedName.includes('r')
})

console.log('student: ', checkingNamesWithA);

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const newNumbers = numbers.filter(number => {
    return !(number % 2)
})

// removes the last item
numbers.pop()
numbers.pop()
numbers.pop()
console.log({ num: numbers });

console.log('new: ', newNumbers);