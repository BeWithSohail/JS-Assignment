const userInput = 40;
// Value is 40
let result;
result = userInput + 18;
//value is 58
result = result - 10;
//value is 48
result = result * 2;
//value is 96
result = result / 2;
//value is 48 
const userForm = document.getElementById('input_form');
const addBtn = document.getElementById('add');
const subtractBtn = document.getElementById('subtract');
const multiplyBtn = document.getElementById('multiply');
const divideBtn = document.getElementById('division');

const currentResultOutput = document.getElementById('current_result');
const currentCalculationOutput = document.getElementById('current_calculation');

function outputResult(result, text) {
  currentResultOutput.textContent = result;
  currentCalculationOutput.textContent = text;
}

// let randomNumber = 0;
// let greaterNumber = 5;
 
function sum(a, b) {
  const calculation = a + b;
  return calculation;
}

let totalAddition = sum(1, 2);

let exp = 10;
// const stringWithSingleQuotes = 'This is a string with a single quote: example\'';
// let stringWithSingleQuotes = 'My name is md \'Sohail\' alam';
// let stringWithSingleQuotes = "My name is md \" Sohail \" alam";
let stringWithSingleQuotes = 'My name is md \'sahil\' i live in \'new delhi\' ' +
    'I am working as a UI frontend developer ' +
    'I have total ' + exp + ' years of experience, I work as a senior consultant ' +
    'and my office is in \'new delhi\' near houz khas';
console.log(stringWithSingleQuotes);
outputResult(totalAddition, totalAddition);

function subtract(num1,num2) {
  return num1 - num2;
}
function stringify(number) {  
  return "Result" + number;
}
subtract(12, 10);
stringify(10);

// function localVariable() {
  
//   function function2() {
//     var nameOfPlace = "kawakol";
//     console.log(nameOfPlace) 
//   }
//   function2();
//   console.log(nameOfPlace);
// }
// localVariable();

let userName = 'Max';
function greetUser(name) { 
  let userName = name; 
  userName = 'Manu';
  //  debugger;
  // alert(userName);
}

greetUser("name");

function double(value) {
  return value * 2;
}
function transform(a, b) {
  return b(a);
}
// Using the `double` function directly
const doubledValue = double(5);
// This will return 10
console.log("Doubled Value:", doubledValue);

// Using the `transform` function to apply `double` indirectly
const transformedValue = transform(10, double);
  // This will return 20
console.log("Transformed Value:", transformedValue);

// TasK function Assignment Function
// Task4
function one() {
alert("Hi welcome to function assignments")  
};

function two(name) {
  alert(name);
}
one();
two("Sohail");

let taskButton = document.getElementById("task3");
taskButton.addEventListener("click", one);
function brandNew(name, location, job) {
  alert('Hi There! my name is ' + name + ' and i am from ' +
    ' ' + location + ' I am working as a ' + job);
}
brandNew("sohail", "delhi", "UI Development");