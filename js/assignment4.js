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

// let age = 18;
// age >= 18 ? console.log("can vote") : console.log("can't vote");


//Introduction of loops





// Example of mutable objects
// const mutableArray = [1, 2, 3];
// mutableArray.push(4); // Modifying the array in place
// console.log(mutableArray); // Output: [1, 2, 3, 4]


// const immutableObject = {
//     name: "sohail",
//     address : "kawakol",
// }

// immutableObject2 = { ...immutableObject };
// immutableObject2.address = "nawada";
// console.log(immutableObject);
// console.log(immutableObject2);

// Example of immutable objects
// let name1 = "Sohail";
// let name2 = name1;
// name2 = "wakil"
// console.log(name1);
// console.log(name2);


// let decimal = "10";
// let value2 = +(decimal);
// console.log(value2);


// let myNumber = 12;
// console.log(myNumber.MAX_SAFE_INTEGER);


//some example of truthy or falsy value
// if ("2") {
//     console.log("This is a truthy value.");
//   } else {
//     console.log("This is a falsy value.");
//   }

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

// let Final_Value_runcount = 10;
// let startValue = 0;
// let initialValue = 0;

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

// let num1 = 10;
// let num2 = num1;
// num1 = 11;
// console.log(num1);
// console.log(num2);


// let arr1 = ["sohail", "adil", "wakil"];
// let arr2 = arr1;
// console.log("The value is ",arr2 === arr1);
// console.log(arr1);

// let array1 = ["delhi", "pune", "bihar"];
// let array2 = ["delhi", "pune", "bihar"];
// console.log("The value is ", array2 === array1);
// console.log(array2);


// let array1 = [1, 2, 3, 4];
// let array2 = [].concat(array1,[2, 4, 6, 8, 10]);
// let array2 = array1.slice(0);
// let array2 = [5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
// let array3 = [...array1, ...array2];
// console.log(array1);
// console.log(array2);
// console.log(array3);

// let arrayone = [...arraytwo]
// var arraytwo = [3, 6, 9];
// console.log(arrayone)


// use of for loop in arrays
// let fruits = ["banana", "cheese", "grapes", "orange"];
// let fruits2 = [];
// for (let i = 0; i < fruits.length; i++) {
//      fruits2.push(fruits[i]);
//      console.log(fruits[i]);
// }
// console.log("fruits2 vlause", fruits2)

// use of for of loop in arrays
// let fruits = ["banana", "cheese", "grapes", "orange"];
// let fruits2 = [];
// for (let i of fruits) {
//     console.log(i);
// }

// use of while loop in js
// let fruits = ["Banana", "Apple", "Mangoes"];
// let i = 0;
// while (i < fruits.length) {
//     console.log(fruits[i]);
//     i++;
// }


// let i = 5;
// let n = 10;
// while (i < 10) {
//   i++;
//   n += i;
//   console.log(n);
// }

// // 16 23 31 40

// // i = 6  and n = 16;
// // i = 7  and n = 23;
// // i = 8  and n = 31;
// // i = 9  and n = 40;
// // i = 10 and n = 50;


// let cityName = ["Berlin", "Sydney", "Cairo"];
// let textStore = document.getElementById("text")
// // console.log("value of city name", cityName);

// for (let i = 0; i < cityName.length; i++){
//     // console.log(cityName[i]);
//     let cityPlace = cityName[i];
    
//     for (let j = 0; j < cityPlace.length; j++) {
//         let citycharacter = cityPlace[j];
//         textStore.innerHTML += citycharacter + "</br> " ;
//         //console.log(citycharacter)
//     }

// }

// fetch('https://jsonplaceholder.typicode.com/posts')
//       .then(response => response.json())
//      .then(json =>console.table(json) )
      
     // console.log(json)

// Array destructring in javascript
// const x = [1, 2, 3, 4, 5];
// const [y, z, ...xx] = x;
// console.log(...xx);

// const x = ["sohail", "adil", "wakil", "tanhail",];
// const[value1, ,...value3] = x;
// console.log(value3);

// Object in JS
// how to define variable value name using variable in object
// eg:-

// let keys = "Keysssss";
// let valueHolder = "Valuecccccccccc";

// const placeholder = {
//     // key : 'value'
//     [keys]: valueHolder,
//     Location: "Delhi",
//     City : "Jaipur"
// }
// placeholder.keys = [keys]

// console.log(placeholder);

// how to use object keys

// let obj = {
//     name: "sohail",
//     place:"nawada"
// }

// console.log(Object.keys(obj));

// How to add new value in objects
// let obj = {
//     name: "sohail",
//     place:"nawada"
// }
// obj.dateOfBirth = "15-07-1995";

// console.log(obj)

// How to change object values in js
// let obj = {
//     name: "sohail",
//     place:"nawada"
// }
// obj.name = "wakil";

// console.log(obj)

// use of spread operators


// use of spread operators in objects
// const originalObject = { name: "John", age: 30 };
// const copyObject = { ...originalObject };
// console.table(copyObject);
// cloning two object key value pair in new objects
// const object1 = { name: "alice" }
// const object2 = { age: 25 };
// const finalObject = { ...object1, ...object2 };
// console.log(finalObject);


// Object Destructring using spread operators in object
// let number = [2, 3, 4, 5, 6];
// let [first, ...rest] = number;
// console.log(...rest); // output 3,4,5,6

// let newObject = {
//     name: "sohail",
//     dob: "15-07-1995",
//     place: "nawada",
//     dir: "shdjsd"
// };

// let { name, ...rest2 } = newObject;
// console.log(rest2);


// Object inside arrays (Real world uses arrays)
// every api is just an object inside array eg:
// [{ ...}, { ...}, { ...}, { ...}, { ...}, { ...}, { ...}]
// runing loops on boject inside an array
// const users = [
//     {
//         userId: 1,
//         firstName: "Mark Henry",
//         lastname: "Last Name",
//         gender: "Male",
//         language: ["English","Hindi", "artisttic"]
//     },
//     {
//         userId: 2,
//         firstName: "Katty",
//         lastname: "Last Name",
//         gender: "Female",
//         language: ["English","Hindi", "french","Arabic"]
//     },
//     {
//         userId: 3,
//         firstName: "Christopher",
//         lastname: "Last Name",
//         gender: "Male",
//         language: ["English","Hindi", "urdu"]
//     },
//     {
//         userId: 4,
//         firstName: "Jackson",
//         lastname: "Last Name",
//         gender: "Male",
//         language: ["English","Hindi", "urdu"]
//     },
    
// ]
// console.table(users)
// console.log(users)

//use of for loop in object

// for (let i = 0; i < users.length; i++){
//     console.log(i)
//     console.table(users[i]);
// }

// Runing loops on boject inside an array with destructuring



//Function in js

// Function First Characters in JavaScript
// Function Declaration
// Function Expression
// Arrow Function
// IIFE Function
// Function
// Input : array target (number)

// Output find the characters at the specified position
// function firstCharacter(anystring) {
//     console.log(anystring[0]);
// }

// firstCharacter("Lipton");
// output : index of target if target present in array

// find first character using arrow function

// let firstChar = (anystring) => {
//     return anystring[3];
// }

// console.log(firstChar("Sohail"));

// Hoisting with let and const and var

// // console.log(a)
// var a = console.log("jjjjj");

// console.log(test());
// function test() {
// }


// Array destructuring
// Rest parameters
// object destructuring
// Spred Oerators

//  Block scope
// function addNumber() {
//     if (true) {
//         let add = 2;
//         console.log(add + add);
//     }
//     console.log(add)
// }
// addNumber();

//  Function scope
// function numbersFunction() {
//     if (true) {
//         var numberGiven = 10;
//         console.log(numberGiven);
//     }
//     console.log(numberGiven)
// }
// numbersFunction();

//  Global scope
// let globalNumber = 25;

// function globalFunction() {
//     if (true) {
//         console.log("Global Function", globalNumber);
//     }

//     console.log("globalFunction", globalNumber);
// }
// globalFunction()

//  Default parameters

// function sumOfTwoNumbers(a, b=5) {
//     // if (typeof b === "undefined") {
//     //     b = 0;
//     // }
//     console.log(a+b);
// };

// let num = sumOfTwoNumbers(2);


// Rest Parameters
// function sumofTwoNumbers(a, b, ...arg) {
//     console.log(`Value of a is: ${a}`);
//     console.log(`Value of b is: ${b}`);
//     console.log("Value of c is:" , arg);
// }
// sumofTwoNumbers(1,2,3,4,5,6,7,8,9,10)

//  find the some of numbers using function rest parameters arrays method

// function someOfNumbers(...arg) {
//     let total = 0;
//     // debugger
//     for (let i = 0; i < arg.length; i++){
//         total = total + arg[i];
        
//     }
//    console.log(total);
//     return total;
// }

// const ans = someOfNumbers(2, 4, 6, 8);

// let array = [1, 3, 4, 5, 6, 7,];
// for (let i = 0; i < array.length; i++) {
//     let totalValue = 0;
//     debugger;
//     totalValue = totalValue + array[i];
//     console.log(totalValue);
// }


// Loops in details


// Pramaeter destructring (mostly used in react)
// 1st ways
// const person = {
//     name: 'John',
//     age: 34,
//     place:"california"
// }
// function getPersonDetails(obj)
// {
//     console.log(obj.name);
//     console.log(obj.age);
// }
// getPersonDetails(person);

// 2nd way
// const person = {
//     name: 'John',
//     age: 34,
//     place:"california"
// }

// function getPersonDetails({name,age})
// {
//     console.log(name);
//     console.log(age);
// }
// getPersonDetails(person);

//for loops
 
// for (let i = 0; i < 10; i++) {
//      console.log(i);
//      debugger;
// }


//  Callback function in js
// function one(callback) {
//      console.log('one called');
//      return callback();
// }
// function two() {
//      console.log('two called');
// }
// let finalValue = one(two);
// console.log(finalValue);

// // Function returning function in JS


// for Each Method in array or object

// Returning index and multiply each index by 2

// console.log(number);

// function indexName(value, index) {
//      for (let i = 0; i < number.length; i++){
//           console.log(`${value} * ${i} = ${value * i}`);
//      }

// }
// indexName(2,4);

// How to find index numbers and each value is devided by arrays value
// let numberArr = [2, 4, 6, 8, 9, 10, 12];

// function FindNumber(number,index) {
//      console.log(`Numbers is ${number} which is multiplied by 2 and give result of ${number *2 } and index is ${index}`);
// }

// for (let i = 0; i < numberArr.length; i++) {
//      FindNumber(numberArr[i], i);
// }



// use of map method in javascript

// let array1 = [1, 2, 3, 4, 5];

// let sqrtmethod = array1.map(function(number){
//      return number * number;
// });

// console.log(array1)
// console.log(sqrtmethod)


// let array2 = [1, 2, 3, 4, 5];


// let finalValue = array2.map((number, index)=>{
//    return `index is ${index} and number is ${number*number} `;
// });
// console.log(finalValue)



// map example with an array of a object

// const kvArray = [
//      { key: "sohail", value: 10 },
//      { key: "adil", value: 20 },
//      { key: "jones", value: 30 },
// ];

// let firstNameContainer = kvArray.map(({ key, value }) => ({
//      [key]: value
// })
// );

// console.log(firstNameContainer);

// use of filter method in js
// using filter as callback function

// const array1 = ["fruits", "object", "string", "array", "fan", "pen", "name"];
// const characterContainer = function(word) {
//      return word.length > 5;
// }

// let newcontainer = array1.filter(characterContainer);
// console.log(newcontainer);

// using filter as a normal function

// const array1 = ["fruits", "objecst", "string", "array", "fan", "pen", "name"];
// let Finaloutput = array1.filter((word) => {
//      return word.length > 6;
// });

// console.log(Finaloutput);

// const array1 = [2,3,4,5,6,7,8,9];
// let Finaloutput = array1.filter((even) => {
//      return even % 2 !== 0;
// });

// console.log(Array.isArray(Finaloutput));

// find the even number using  a function

// let numbers = [1, 2, 3, 4, 5, 6, 7];

// function evenNumber(){
//      for (let i = 0; i < numbers.length; i++) {
//           if (numbers[i] % 2 === 0) {
//                console.log(numbers[i]);
//           }
//      }
// }

// evenNumber();


// USE of reduce method in js

// let array = [2, 3, 4, 5, 6, 7, 8, 9];

// let reduceMethod = array.reduce((accumulator,currentValue) => {
//      return accumulator + currentValue;
// });

// console.log(typeof reduceMethod)

// USE OF REDUCE METHOD IN

// const objectArray = [
//      { productId: 1, productName: "Mobile", price: "10000" },
//      { productId: 2, productName: "Laptop", price: "12000" },
//      { productId: 3, productName: "TV", price: "25000" }
// ];

// function totalPrice(currentPrice, FinalPrice) {
//      //console.log(currentPrice + FinalPrice.FinalPrice);
//      return currentPrice + parseInt(FinalPrice.price);
// }

// let initialPrice = 0;
// let FinalPrice = objectArray.reduce(totalPrice, initialPrice);
// console.log(FinalPrice);

// let initialPrice = 0;
// let FinalPrice = objectArray.reduce(totalPrice, initialPrice);
// console.log(FinalPrice);

// const objectArray = [
//      { productId: 1, productName: "Mobile", price: 10000 },
//      { productId: 2, productName: "Laptop", price: 12000 },
//      { productId: 3, productName: "TV", price: 25000 }
//  ];
 
//  function totalPrice(currentPrice, product) {
//      // console.log(currentPrice + product.price);
//      return currentPrice + product.price;
//  }
 
//  let initialPrice = 0;
//  let FinalPrice = objectArray.reduce(totalPrice, initialPrice);
//  console.log(FinalPrice);
 

// js sort methods
// use of sort method in arrays of a object


// JS find method
// let arrayOfaName = [
//      {
//           name: "sohail",
//           address: "kawakol",
//      },
//      {
//           name: "wakil",
//           address: "patna",
//      },
//      {
//           name: "adil",
//           address: "jjj",
//      },
//      {
//           name: "wasim",
//           address: "ptp",
//      },
// ]

// let usernameFunction = (username)=> {
//      return username.address.length == 3;
// }
// let finalArrayValue = arrayOfaName.find(usernameFunction);
// console.log(finalArrayValue);

// JS find method use in arrays of a object
// let array1 = ["sohail","sahil","adil","akram"];

// let finalOutput = array1.find((char) => {
//      return char[1] == "a";
// });
// console.log(finalOutput);


// Array slice method uses
// array.slice(startIndex, endIndex)
// let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let sliceNumber = (startindex, endIndex) => {
//     return arr1.slice(startindex, endIndex);
// };
// let finalslicedNumbers = sliceNumber(3,5);
// console.log(finalslicedNumbers);


// JS every method use
// JS every method use in arrays of a object


// JS some method
// const arraay1 = [2, 4, 6, 8, 2];
// function initialize(elements) {
//      if (elements % 2 === 0) {
//           return true;
//      } else {
//           return false;
//      }
// }


// let stored = arraay1.some(initialize);
// console.log(stored);

// JS some method use in arrays of a object
let objectCollection = [
     {
     name: "sohail",
     address: "kawakol",
     },
     {
          name: "adil",
          address: "pune",
     },
     {
          name: "wakil",
          address: "delhi",
     },
]
let findCharFunction = function (string) { 
   return string.name == "pappu";
}

let outputResult = objectCollection.some(findCharFunction);
console.log(outputResult);
// JS fill method
// JS fill method use in arrays of a object

// JS splice method
// const months = ['Jan', 'March', 'April', 'June','August'];
// months.splice(1, 0, "feb");
// months.splice(4,1, "May","june","july");
// // months.splice(3, 3,"april","may","june","july","august","september");
// console.log(months);

//Task

//1//Remove 0 (zero) elements before index 2, and insert "drum"
const myFish1 = ["angel", "clown", "mandarin", "sturgeon"];
myFish1.splice(2, 0, "drum");
console.log(myFish1);

//2//Remove 1 element at index 2, and insert "trumpet"
const myFish2 = ["angel", "clown", "drum", "sturgeon"];
myFish2.splice(2,1,"trumpet");
console.log(myFish2);

//3//Remove 0 (zero) elements before index 2, and insert "drum" and "guitar"
const myFish3 = ["angel", "clown", "mandarin", "sturgeon"];
myFish3.splice(2, 0, "drum", "guitar");
console.log(myFish3);

//4//Remove 1 element at index 2, and insert "trumpet"
const myFish4 = ["angel", "clown", "mandarin", "sturgeon"];
myFish4.splice(2, 1, "trumpet");
console.log(myFish4);

//5// Remove 2 elements from index 0, and insert "parrot", "anemone" and "blue"
const myFish5 = ["angel", "clown", "mandarin", "sturgeon"];
myFish5.splice(0, 2, "parrot", "anemone");
console.log(myFish5);

// JS fill method use in arrays of a object



// const months = ['Jan', 'March', 'April', 'June'];
// let finalArrays = months.splice(1, 0, "February","May");
// console.log(months);


// Strings and arrays are iterable so we use forof loops in iterable object
// object is not iterable

// array like objects
// strings are array like objects


// optional chaining in objects
// optional chaining in
// optional chaining in objects

// const obj = {
//      name: "sohail",
//      address: {
//           district: "nawada",
//           state:"bihar"
//      },
// }

// console.log(obj?.address?.district);

// use of this keyword in javascript
function myfunction(position,address) {
     console.log(`Hi Everyone My name is ${this.name} and 
      I am ${this.age} year's old! i am working as a ${position} and i live in ${address}
     `);
}

let personDetails1 = {
     name: "sohail",
     age: 20,
};

let personDetails2 = {
     name: "siraj",
     age: 32,
}
let personDetails3 = {
     name: "adil",
     age: 25,
}

let personDetails4 = {
     name: "wakil",
     age: 28,
}

// call Method 
// myfunction.call(personDetails2,"UI DEVELOPER", "NAWADA");
// Apply Method
myfunction.apply(personDetails2, ["UI DEVELOPER", "NAWADA"]);


// call apply and bind
// use of call function n


// use of this 