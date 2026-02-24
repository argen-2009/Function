//1.
function Argen() {
    console.log("I got up at 7:30")
    console.log("I.m having breakfast")
    console.log("I go to school")
}
Argen()

//2.
function summa(num1, num2) {
    return num1 + num2
}
summa(75, 25);

//3.
const fruits = ["Apple", "Banana", "Orange"];
const students = ["Ruslan", "Argen", "Marlen"];
const cars = ["BMW", "Toyota", "Lexus"];

function printArray(arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i])
    }
}

printArray(fruits);
printArray(students);
printArray(cars);

//4.
function hello(name) {
    return `Hello, ${name}`
}

//5.
personInfo("Ruslan", 22, true, ["reading", "run", "sport"]);

const personInfo = function(name, age, isStudent, hobby) {
    return {
        name: name,
        age: age,
        isStudent: isStudent,
        hobby: hobby
    }
}

//6.
personInfo2("Argen", 16, true, ["reading", "run", "sport"]);

const personInfo2 = function(name, age, isStudent, hobby) {
    return {
        name: name,
        age: age,
        isStudent: isStudent,
        hobby: hobby
    }
}

//7.
const salam = (name) => `Hello, ${name}`

salam("Azamat");

//8.
const add = (a, b) => a +b;

add(36, 57)