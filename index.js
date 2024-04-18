count('Vukona')
function count(user) { // you need to understand hoisting 
    // function declaration
    // call it before declaration
    console.log('hi there ' + user);
}

// console.log();

const countToo = function(user) {
    // function expression
    // can't call it before declaration
    console.log('hi there ' + user);
}
countToo('Mnisi')

// just logging
const countThree = (a, b) => {
    console.log('hi Vee');
    console.log(a + b);
}
countThree(3, 6)
console.log('no return on function: ', countThree(9, 0));
// expecting a return value
const countNumbers = (a, b) => a + b
let sumOfNumbers = countNumbers(3, 6)
console.log('total: ', sumOfNumbers);

function addSum(a, b) {
    return a + b
}
function returnGreeting(personName) {
    return "Hello " + personName
}

console.log('addSum total: ', addSum(3, 18));

console.log(returnGreeting("Kgaugelo"));