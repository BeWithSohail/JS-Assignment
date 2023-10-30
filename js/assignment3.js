const defaultResult = 0;
let current_result = defaultResult;
let arrayEntries = [];
const userForm = document.getElementById('input_form');
const addBtn = document.getElementById('add');
const subtractBtn = document.getElementById('substract');
const multiplyBtn = document.getElementById('multiply');
const divideBtn = document.getElementById('division');
const currentResultOutput = document.getElementById('current_result');
const currentCalculationOutput = document.getElementById('current_calculation');

function outputResult(text, result) {
  currentResultOutput.textContent = text;
  currentCalculationOutput.textContent = result;
}

function getUserNumberInput(){
  return parseInt(userForm.value);
}

function createAndWriteOutput(operators,resultBeforeCalc,resultCalcNumber){
  const calcDescription = `${resultBeforeCalc} ${operators} ${resultCalcNumber}`;
  outputResult(calcDescription, current_result);
}
function logResult(operatorIdentifier,resultBeforecalcutation,currentResultAftersubmit, finalResultSubmit){
  const userEntry = {
    operators: operatorIdentifier,
    previousResult: resultBeforecalcutation,
    currentInputResult: currentResultAftersubmit,
    finalResult: finalResultSubmit
  }
  arrayEntries.push(userEntry);  
  console.log("clicked", arrayEntries);  
}

function addCalculation() {
  let userInput = getUserNumberInput();
  let inititialResult = current_result;
  current_result = current_result + userInput;
  createAndWriteOutput('+', inititialResult, userInput);
  logResult("ADD", inititialResult,userInput,current_result);
}

function substract() {
  let userInput = getUserNumberInput();
  let inititialResult = current_result;
  current_result = current_result - userInput;
  createAndWriteOutput('-', inititialResult, userInput);
  logResult("SUBSTRACT", inititialResult,userInput,current_result);
}
function multiply() {
  let userInput = getUserNumberInput();
  let inititialResult = current_result;
  current_result = current_result * userInput;
  createAndWriteOutput('*', inititialResult, userInput);
  logResult("MULTIPLY", inititialResult,userInput,current_result);
}
function divide() {
  let userInput = getUserNumberInput();
  let inititialResult = current_result;
  current_result = current_result / userInput;
  createAndWriteOutput('/', inititialResult, userInput);
  logResult("DIVIDE", inititialResult,userInput,current_result);
}

addBtn.addEventListener("click", addCalculation);
subtractBtn.addEventListener("click", substract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);


// new array exercise




// Converting data types using parseInt and parseFloat

// Mixins numbers & strings
// let a = false;
// let number1 = 5;
// let number2 = "5";
// // let multiply = number1 * number2;
// let addition = number1 + number2;
// let substraction = number1 - number2;
// let division = number1 / number2;
// console.log(number1 / a);
// console.log("multiply of number1 and number2 = " + multiply + " and " + typeof multiply);
// console.log("addition of number1 and number2 = " + addition + " and " + typeof addition);
// console.log("substraction of number1 and number2 = " + substraction + " and " + typeof substraction);
// console.log("devison of number1 and number2 = " + division + " and " + typeof division);
// Spliting code into functions
// connecting all button to functions
// working with code comments
// More operators
// more core data types
// using arrays
// creating objects
// accessing object data
// adding a reusable function that uses object
// undefined, null, and NaN
// The type of operator
// important scripts with defer and async
// importing js summmary
// wrap up


// let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
// console.table(arr1);


let userCategory; // should be 'child', 'adult' or 'senior'
let age = 65;

function solve() {
    // Todo: Set userCategory conditionally
  // Important: You must put your condition into this solve function!
  if (age < 18) {
    userCategory = 'child';
    console.log(userCategory);
  }
  else if (age >= 18 && age < 65) {
    userCategory = 'adult';
    console.log(userCategory);
  } else {
    userCategory = 'senior';
    console.log(userCategory);
  }
}

solve();


let numberfirst = 10;
let numbersecond = 15;
let numberThird = 20;

console.log(numberfirst < numbersecond && numberThird > numberfirst);


// let userName = "Sohail Alam";

// if (!userName) {
//   console.log(userName);
// } else {
//   console.log(false);
// }


// let isLoggedIn = true;

// if (!isLoggedIn) {
//   console.log(true);
// } else {
//   console.log(false);
// }


// let number = true;
// if (!number) {
//   console.log("number is not equaal to 5")
// } else {
//   console.log("number is equal to 5")
// }

