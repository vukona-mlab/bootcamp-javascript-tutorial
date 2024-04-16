// Array of students
let listOfStudents = ['Vukona', 'Kabelo', 'Refilwe', 'Zack', 'Nokwanda']
console.log({ listOfStudents });
console.log(listOfStudents.length );

// add item onto array
listOfStudents.push('Kgaugelo')
console.log({ listOfStudents });

// remove item from an array
listOfStudents.splice(0, 1)
console.log(listOfStudents);

listOfStudents[0] = "Kaybee"
console.log(listOfStudents);

listOfStudents.forEach(item => {
    console.log('forEach: ', item);
})

for(let i = 0; i <= listOfStudents.length - 1; i++) {
    console.log('for loop: ', listOfStudents[i])
}