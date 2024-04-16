// var: supports hoisting: call a variable before declaration
// let: doesn't support hoisting: call a variable before it has 
//      been declared
// const: you can't declare without initialising
//      you also can't reassign

// var
console.log({ username });
var username = "Vukona"
username = "Vee"
console.log({ username });

// let
// console.log({ age }); not allowed
let age = 35
age = 34
console.log({ age });

// const
const surname = "Mnisi"
// surname = "Khoza" not allowed to reassign
console.log({ surname });