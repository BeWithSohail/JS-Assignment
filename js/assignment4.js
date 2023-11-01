// let attackValue = 5;
// let choosenMaxLife = 5;
// let mosterAttackValue = 14;

// let currentMonsterHealth = choosenMaxLife;
// let currentPlayerHealth = choosenMaxLife;
// function attackHnadler() {
//     const damage = dealMonsterDamage(attackValue);
//     currentMonsterHealth -= damage;
//     const playerDamage = dealPlayerDamage(mosterAttackValue);
//     currentPlayerHealth -= playerDamage;
//     if (currentMonsterHealth <= 0 && currentPlayerHealth > 0) {
//         alert("You Won!")
//     } else if(currentPlayerHealth <= 0 && currentMonsterHealth > 0) {
//         alert("you lost!")
//     } else if (currentPlayerHealth <= 0 && currentMonsterHealth <= 0) {
//         alert("You have a draw!")
//     }

// } 
// adjustHealthBars(choosenMaxLife);
// attackBtn.addEventListener("click", attackHnadler)


// using of ternary operators
//condition ? expressionIfTrue : expressionIfFalse
// let num1 = 40;
// let num2 = 30;

// num1 > num2 ? console.log("number 1 is greater than number2") : console.log("number 2 is greater than number");

let age = 18;
age >= 18 ? console.log("can vote") : console.log("can't vote");


//Introduction of loops





// Example of mutable objects
const mutableArray = [1, 2, 3];
mutableArray.push(4); // Modifying the array in place
console.log(mutableArray); // Output: [1, 2, 3, 4]


const immutableObject = {
    name: "sohail",
    address : "kawakol",
}

immutableObject2 = { ...immutableObject };
immutableObject2.address = "nawada";
console.log(immutableObject); 
console.log(immutableObject2); 

// Example of immutable objects
let name1 = "Sohail";
let name2 = name1;
name2 = "wakil"
console.log(name1);
console.log(name2);


let decimal = "10";
let value2 = +(decimal);
console.log(value2);


let myNumber = 12;
console.log(myNumber.MAX_SAFE_INTEGER);


//some example of truthy or falsy value
if ("2") {
    console.log("This is a truthy value.");
  } else {
    console.log("This is a falsy value.");
  }

// user of ternary operators

// let ageOfaPerson = 9;
// let drink;

// ageOfaPerson >= 10 ? drink =  "cofee" : drink =  "milk";
// console.log(drink);


// let ageofaMan = 10;
// let drink = ageofaMan >= 10 ? "cofee" : drink = "milk";
// console.log(drink);


//use of and operators &&

// let firstName = "sohail";
// let myAge = 10;
// if (firstName[0] === "S" && myAge === 10) {
//     console.log("yes you are right!!!")
// } else {
//     console.log("no you are wrong")
// }

// let input = prompt("Enter your Name");
// if (input[0] === "A") {
//     console.log("first name start with A letter")
// } else {
//     console.log("first name start with other letter")
// }


// user of or || operators

// let input = + prompt("Enter the Number");

// if (input === 10 || input < 8) {
//     console.log("you entered the number between 2 and 8 characters")
// } else {
//     console.log("You Entered the number more than 10")
// }

// use of switch statements in javascript

// let fruits = "apple";
// switch (fruits) {
//     case "Banana":
//         console.log("It's an apple");
//         break;
//     case "apple":
//         console.log("Its an apple");
//         break;
//     case "pine apple":
//         console.log("Its an pineapple");
//         break;
//     default:
// }


// use of while loops
// let number = 0;
// while (number <= 10) {
//     number++;
//     console.log(number)
// }

//sum of total number

// let number = 0;
// let totalSum = 0;
// totalSum = totalSum + 1;
// totalSum = totalSum + 2;
// totalSum = totalSum + 3;
// totalSum = totalSum + 4;
// totalSum = totalSum + 5;
// totalSum = totalSum + 6;
// totalSum = totalSum + 7;
// totalSum = totalSum + 8;
// totalSum = totalSum + 9;
// totalSum = totalSum + 10;
// console.log(totalSum);


// Example of while loop


// totalValue = totalValue + 1; //1
// totalValue = totalValue + 2; //3
// totalValue = totalValue + 3; //6
// totalValue = totalValue + 4; //10
// totalValue = totalValue + 5; //15
// totalValue = totalValue + 6; //21
// totalValue = totalValue + 7; //28
// totalValue = totalValue + 8; //36
// totalValue = totalValue + 9; //45
// totalValue = totalValue + 10; //55

let Final_Value_runcount = 10;
let startValue = 0;
let initialValue = 0;

// while (initialValue < Final_Value_runcount) {
//    // console.log(Final_Value)
//    //  debugger;
//     // console.log("Initial value: " + initialValue);
//     startValue = startValue + initialValue;
//     initialValue++;
//     console.log(`Final Value is ${startValue} and + initial Value is ${initialValue} so total Final value is ${startValue + initialValue}`);
// }

// let container = document.getElementById("main");

// let i = 2;
// let count = 0;
// while (count < 10) {
//     count += 1;
//     // console.log(count)
//    // document.getElementById("main").innerHTML = (`${i} X ${count} = ${i * count}`);
//     // console.log(`${i} X ${count} = ${i * count}`)
//     container.innerHTML +=  i+ "X" + count + " = " + i * count + " <br> " ;
// }


// Use of for loops
// for (var i = 0; i <= 9; i++) {
//     console.log(i)
// }


// use of break and continue using for loops
// for (let i = 0; i <= 10; i++) {
//     if (i === 8) {
//         console.log("loop", i);
//         break;
//     }
//     console.log("number loop", i);
// }


//use of is array
// let arr1 = [1, 2, 3, 4, 5];
// console.log(Array.isArray(arr1));
// returns true bcoz the given elements is an array

//Array pop and push and shift and unshift application

// Eg: pop remove the last elements of an array
// let fruits = ["banana", "mango", "apple", "orange"];
// console.log(fruits);
// let poppedFruits = fruits.pop();
// console.log(poppedFruits);

//Eg: Push push new elements into an array
// let fruits = ["banana", "mango", "apple", "orange"];
// console.log(fruits);
// let pushedFruits = fruits.push("grapes");
// console.log(Array.isArray(fruits), fruits);
// console.log(pushedFruits);

//Eg:Shift // remnove first elements of an array
// let fruits = ["banana", "mango", "apple", "orange"];
// console.log(fruits);
// let shiftFruits = fruits.shift();
// console.log(fruits);

//Eg:Unshift add new elements into an array
// let fruits = ["banana", "mango", "apple", "orange"];
// console.log(fruits);
// let shiftFruits = fruits.unshift("banana");
// console.log(fruits);


// Eg Primitive vs reference type(Non Primitive data type)

//Primitive data types 