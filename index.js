// working with objects

let student = {
    name: "Vukona",
    surname: "Mnisi",
    age: 35,
    isFacilitator: true
}

console.log('default: ', student);

// edit values in an object
student.name = "Vee";
console.log('after editing: ', student);

// adding values in an object
student.isInPrison = false;
student["isInSchool"] = false;

// removing already existing object property
delete student.age

console.log('after adding: ', student);