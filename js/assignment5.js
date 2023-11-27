// // use of "this" keyword in js

// // let users = {
// //      name: "John",
// //      age: 25,
// //      about: function aboutuser() {
// //           console.log(`users Name is ${this.name}`)
// //           console.log(this);
// //      }
// // }

// // function name() {
// //      console.log(this)
// // };
// // name();


// let users = {
//      name: "John",
//      age: 25,
//      about:()=>{
//           console.log(`users Name is ${this.name}`)
//           console.log(this);
//      }
// }

// users.about();

// // let userName = () => {
// //      console.log(this)
// // }
// // userName();


// How Javascript works
// Global execution context
// this and windows in global excution context


// All about hoisting
// console.log(hoistings());
// console.log(window);
// debugger;
// function hoistings(){
// console.log("I am hoisited in JavaScript")
// }

// debugger;
// console.log(name);
// let name = "sohail";
// assignment5.js:49 Uncaught ReferenceError: Cannot access 'name' before initialization

// console.log(typeof initialValue);
// console.log(initialValue);

// console.log(window);

// How JS code is executed
// (1) The execution context is created in two phases

// First phase is called Creation Phase or Memory execution phase

// JS array Sort method
// const month = ["January", "February", "March","December"]; // J-74, F-70, M-77
// month.sort();
// console.log(month); // Output would be like ["December", "February", "January", "March"]


// const numberDigit = [2, 100, 50, 100, 300, 12];
// function number(a,b) {
//      return a - b;
// }

// let finalOutput = numberDigit.sort(number,0);
// console.log(finalOutput);


// let character = ["a", "b", "c", "d", "e"];
// for (let i = 0; i < character.length; i++) {
// }


// forEach
// let product = ["a", "b", "c", "d", "e"];
// product.forEach(function (i) {
//      console.log(i);
// });


// Scope Chain

// let lastName = "doe";

// let Namefull = function(){
//      let firstName = "john";
//      function fullname() {
//           console.log(lastName);
//           console.log(firstName);
//      }
//      fullname();
// }

// Namefull();



// Closures Example: 1
// function outerFunction(){
//      function innerFunction() {
//           console.log("sohail");
//      }
//      return innerFunction();
// }

// let storedFunction = outerFunction();
// console.log(storedFunction);

// Closures Example: 2
// function outerFunction(x) {
//      var a = "varA"
//      var b = "varB"
//      function innerFunction() {
//           console.log(a,b,x);
//      }
//      return innerFunction();
// }
// let storedFunction = outerFunction("args");
// console.log(storedFunction);

// Closures Example: 3
// function square(power) {
//      function square(numbers) {
//           return numbers ** power;
//      }
//      return square(2);
// }
// let storedFunction = square(4);
// console.log(storedFunction);

// Closures Example: 4

// const func = function () {
//      let count = 0;
//      return function func2() {
//           if (count < 1) {
//                console.log("I have been called");
//                count++;
//           }
//           else {
//                console.log("I have been already called")
//           }
//      }
// };

// let storevalue = func();
// storevalue();
// storevalue();

// DOM :- DOCUMENT OBJECT MODEL

// let textSelectors = document.getElementById("demo");
// let linkSelector = document.querySelector("a");
// console.log(linkSelector.getAttribute("href"));
// console.log(textSelectors.textContent);
// textSelectors.textContent = "My name is changed";
// console.log(textSelectors.textContent);
// console.log(textSelectors.innerText);
// innerText = shows text which is visible to the tag
// innerHTML = shows the complete structure inside selected elements
// Textcontent = shows the complete text inside selected elements
// console.log(linkSelector.getAttribute("href").slice(1));
// linkSelector.setAttribute("href", "https://www.google.com");
// console.log(linkSelector.getAttribute("href"));


// let navitems = document.querySelectorAll("ul li a");
// // console.log(Array.isArray(navitems))
// console.log(navitems);

// for (let i = 0; i < navitems.length; i++){
//     // console.log(navitems[i]);
//     let navValue = navitems[i];
//     navValue.style.color = "red";
// }

// for (let navitem of navitems) {
//     console.log(navitem);
// }

// var newArray = Array.from(navitems)
// // var newArray = [...navitems];
// console.log(Array.isArray(newArray));

// navitems.forEach((navitem) => {
//     // console.log(navitem);
//     navitem.style.color = "red"
//     navitem.style.background = "#fff";
//     navitem.style.padding = '20px';
//     navitem.setAttribute("href","http://google.com")
// });

// let bodySelector = document.querySelector("body");
// let createElments = document.createElement("div");
// createElments.classList.add("ssss");
// createElments.textContent = "Hey there!";
// bodySelector.prepend(createElments);

// let navitems = document.querySelector("ul");
// // console.log(navitems);
// let createnewli = document.createElement("li");
// let createnewanchor = document.createElement("a");
// createnewanchor.textContent = "create";
// createnewanchor.setAttribute("href", "https://github.com");
// navitems.append(createnewli);
// createnewli.append(createnewanchor);


// let navitems_parent = document.querySelector("ul");
// navitems_parent.classList.add("navitems_parent2"); // add a class in elements using JS
// navitems_parent.classList.remove("navitems_parent2"); // remove a class in elements using  js
// console.log(navitems_parent.classList);


// arrow function doesn't have its own this it take one step upper to show their value
// let btn = document.getElementById("one");

// let functionText = ()=>{
//     console.log(this);
// }

// btn.addEventListener("click",functionText)

let buttonCollection = document.querySelectorAll(".button_collection button");

//running loops over the buttons
// running using for of loops
// for (buttons of buttonCollection) {
//     buttons.addEventListener('click', function () {
//         console.log(this.textContent);
//     });
// };
//runing using for loops
// for (let i = 0; i < buttonCollection.length; i++) {
//     // console.log(buttonCollection[i].textContent);

//     let valueofbutton = buttonCollection[i];
//     // console.log(valueofbutton)
//     valueofbutton.addEventListener('click', function () {
//         console.log(this.textContent)
//     });
// }

//Runing using for each loops

// buttonCollection.forEach(function (button) {
// button.addEventListener('click', function () {
//             console.log(this.textContent)
// });
// });

// JS Event method
// buttonCollection.forEach(function (button) {
//     button.addEventListener('click', ()=>{
//                 console.log(this.textContent)
//     });
// });


// change button color to green and text color to white for each button

// const allButtons = document.querySelectorAll(".button_collection button");
// console.log(allButtons);

// allButtons.forEach((button) => {
//     button.addEventListener("click", (e) => {
//         // console.log(e.target);
//         e.target.style.background = "red";
//         e.target.style.color = "green";
//     });
// });


// change body background color randomly and also change the button color code

// let currentcolor = document.getElementById("currentColor");
// let changeBg = document.querySelector("#change-bg-color");
// let body = document.body;

// function randomColorGenerator() {
//     const red = Math.floor(Math.random() * 256);
//     const green = Math.floor(Math.random() * 256);
//     const blue = Math.floor(Math.random() * 256);
//     const rgbColors = `rgb(${red} ${green} ${blue})`;
//     return rgbColors
// };
// changeBg.addEventListener("click",()=>{
//     const randomColor = randomColorGenerator();
//     body.style.backgroundColor = randomColor;
//     currentcolor.textContent = randomColor;
// });

// keypress events
// window.addEventListener('keypress', function (e) {
//     console.log(e.key);
// });

// mouseover  events
// window.addEventListener('mouseover', function () {
//     console.log("mouse overed");
// });
// mouseleave events
// changeBg.addEventListener('mouseleave', function (e) {
//     console.log("mouseleaved");
// });


// Event bubbling and Event capturing (Event Bubbling == Event Propagation)



// ToDo List
// let formElements = document.querySelector(".form_elements");
// let inputText = document.getElementById("search_text");
// let toDoitems = document.querySelector(".todoitems");
// let spanText = document.querySelector(".text_todo");
// // submission function
// let sumbissionFunction = function (e){
//     e.preventDefault();
//     // console.log(e.target); 
//     let searchInputValue = inputText.value;
//     console.log(searchInputValue);
//     const newliElements = document.createElement("li");
//     const storedValue = `
//         <span class="text_todo"> 
//             ${searchInputValue}
//         </span> 
//         <div class="btn_container">      
//             <button class="todo-btn done"> Done </button>
//             <button class="todo-btn remove"> Remove </button>
//         </div>
//     `
//     newliElements.innerHTML = storedValue;
//     toDoitems.append(newliElements);
// }

// // operation function
// let operation = function (e) {
//     let targettedElements = e.target;
//     if (targettedElements.classList.contains("remove")) {
//         let removedElements = targettedElements.parentNode.parentNode;
//         removedElements.remove();
//     };
//     if (targettedElements.classList.contains("done")){
//         let applyStrikeThrough = targettedElements.parentNode.previousElementSibling;
//         applyStrikeThrough.style.textDecoration = "line-through";
//     };
// }

// formElements.addEventListener("submit",sumbissionFunction);
// toDoitems.addEventListener('click', operation);


// Synchronous Programming vs Asynchronous Programming

// eg:1 sychronous programming

// eg:2 asynchronous programming

// console.log("Script Start"); // Execute this line first

// Untill Unless this line is not completely executed line number 381 will not be executed
// for (var i = 0; i < 100000; i++) { 
//     // console.log("inside for loops");
// } 
// after 379 line execution finishes then this line is going to execute 
// console.log("Script End");

// Above code are the example of asynchronous programming


//callback function uses

function getTwoNumbersandAdd(number1, number2,callback) { 
    // console.log(number1, number2);
    if (number1 === "number" && number2 === "number"){
        callback(number1, number2);        
    }

}

// function twoNumbers(num1,num2) {
//     console.log(num1 + num2);
// }

// getTwoNumbersandAdd("2", "4", function (num1, num2) {
//     console.log("wrong data types");
// });
// // getTwoNumbersandAdd(2,2,twoNumbers);

// function makeSandwich(ingredient, callback) {
//     console.log("Preparing sandwich...");
//     setTimeout(function() {
//         callback("Toasted " + ingredient); // Wait for toasting
//     }, 2000); // Simulating a 2-second toasting time
// }

// // Waiter (Callback)
// function serveSandwich(sandwich) {
//     console.log("Here's your sandwich:", sandwich);
// }

// // You place an order for a toasted sandwich
// makeSandwich("bread", serveSandwich);

// Preparing sandwich...


// use of callback function

// let calculation = (number1, number2, callback) => {
//     return callback(number1, number2);
// }
// let addition = (num1, num2) => {
//     console.log(`Number which is passed as an arguments is ${num1} and ${num2}`);
//     return `final result is ${num1 + num2} after adding ${num1} and ${num2}`;
// }
// let substraction = (num1, num2) => {
//     return num1 - num2;
// }
// let multiplication = (num1, num2) => {
//     return num1*num2;
// }
// let finalAdditionResult = calculation(2, 4, addition);
// let finalSubstractionResult = calculation(2, 4, substraction);
// let finalmultiplicationResult = calculation(2, 4, multiplication);
// console.log(finalAdditionResult);
// console.log(finalSubstractionResult);
// console.log(finalmultiplicationResult);


//  Callback, Callback hell, Pyramid of doom
let heading1 = document.querySelector(".heading1");
let heading2 = document.querySelector(".heading2");
let heading3 = document.querySelector(".heading3");
let heading4 = document.querySelector(".heading4");
let heading5 = document.querySelector(".heading5");
let heading6 = document.querySelector(".heading6");
let heading7 = document.querySelector(".heading7");
let heading8 = document.querySelector(".heading8");
let heading9 = document.querySelector(".heading9");
let heading10 = document.querySelector(".heading10");
let heading11 = document.querySelector(".heading1111");

// setTimeout(function () {
//     heading1.style.color = "red";
//     setTimeout(function () {
//         heading2.style.color = "purple";
//     },1000)
// }, 1000)


// function changeText(elements,text,color,time,onSuccessCallback,onFailureCallback) {
//     setTimeout(function () {
//         if (elements) {
//             elements.textContent = text;
//             elements.style.color = color;
//             if (onSuccessCallback) {
//                 onSuccessCallback();
//             }
//         } else {
//             // console.log("your elements doesn't exist");
//             if (onFailureCallback) {
//                 onFailureCallback();
//             }
//         }
//     },time);
// };

// Pyramid of doom
// changeText(heading1, "heading1", "red", 1000, () => {
//     changeText(heading2, "heading2", "green", 1000, () => {
//         changeText(heading3, "heading3", "violet", 1000, () => {
//             changeText(heading4, "heading4", "magenta", 1000, () => {
//                 changeText(heading5, "heading5", "blue", 1000, () => {
//                     changeText(heading6, "heading6", "blue", 1000, () => {
//                         changeText(heading7, "heading7", "blue", 1000, () => {
//                             changeText(heading8, "heading8", "blue", 1000, () => {
//                                 changeText(heading9, "heading9", "blue", 1000, () => {
//                                     changeText(heading10, "heading10", "blue", 1000, () => {
//                                         changeText(heading10, "heading11", "blue", 1000, () => {
//                                         },() => {console.log("elemeny doesn't exist")});
//                                      },() => {console.log("elemeny doesn't exist")})
//                                 },() => {console.log("elemeny doesn't exist")})
//                             },() => {console.log("elemeny doesn't exist")})
//                         },() => {console.log("elemeny doesn't exist")})
//                     },() => {console.log("elemeny doesn't exist")})
//                 },() => {console.log("elemeny doesn't exist")})
//             },() => {console.log("elemeny doesn't exist")})
//         },() => {console.log("elemeny doesn't exist")})
//     },() => {console.log("elemeny doesn't exist")})
// }, () => { console.log("elemeny doesn't exist") });

// Welcome to Promises

// function changeText(elements,text,color,time) {
//     return new Promise((resolve, reject) => {
//         setTimeout(function () {
//             if (elements) {
//                 elements.textContent = text;
//                 elements.style.color = color;
//                 resolve();
//             } else {
//                 reject("Oops error!");
//             }
//         },time);
//     })
// };

// let returned_value = changeText(heading1, "heading1", "red", 1000);
// returned_value.then(() => {
//     return changeText(heading2, "heading2", "violet", 1000);
// }).then(() => {
//     return changeText(heading3, "heading3", "magenta", 1000);
// }).then(() => {
//     return changeText(heading4, "heading4", "yellow", 1000);
// }).then(() => {
//     return changeText(heading5, "heading5", "cyan", 1000);
// }).then(() => {
//     return changeText(heading6, "heading6", "blue", 1000);
// }).then(() => {
//     return changeText(heading7, "heading7", "pink", 1000);
// }).then(() => {
//     return changeText(heading8, "heading8", "green", 1000);
// }).then(() => {
//     return changeText(heading9, "heading9", "skyblue", 1000);
// }).catch((error) => {
// console.log(error);
// });


// Welcome to AJAX

// const URL = "https://jsonplaceholder.typicode.com/posts";
// const xhr = new XMLHttpRequest();
// xhr.open('GET', URL, true);

// xhr.onreadystatechange = function () {
//     // console.log(xhr.readyState);
//     //console.log(typeof xhr.response);
//     if (xhr.readyState === 4 && xhr.status === 200) {
//         const response =  xhr.response
//         JSON.parse(response);
//         console.log(response);
//     }
// }

// xhr.send();


// USE OF FECTH METHODS
// let fetchedData = fetch(URL);
// console.log('Promise for URL', fetchedData);

// fetchedData
//   .then((response) => {
//     if (!response.ok) {
//       throw new Error('Network response was not ok');
//     }
//     return response.json();
//   })
//   .then((data) => {
//     console.log('Parsed JSON data:', data);
//   })
//   .catch((error) => {
//     console.error('There was a problem with the fetch operation:', error);
//   });

// use of async and awaits

// Ex1
// async function test() {
// console.log("2 : Message");
// await console.log("3 : Message");
// console.log("4 : Message");
// console.log("5 : Message");
// };

// console.log("1 : Message");
// console.log(test());
// console.log("6 : Message");

// Ex2

// async function test() {
//     try {
//         let url = "https://jsonplaceholder.typicode.com/posts";
//         let response = await fetch(url)
//         let result = await response.json();
//         return result;
//     } catch (error) {
//         console.log("something went wrong");
//     }
// }

// test().then((data) => {
//     console.log(data);
// });

// OOPS CONCEPT

// CONSTRUCTOR IN JS

// variable for adding a user and and amount submitted
let accountForm = document.querySelector("#form_submit");
let userName = document.querySelector("#userName");
let userAmount = document.querySelector("#userAmount");
// variable for depositing user amount and and their account number
let depositMoney = document.querySelector("#depositMoney");
let userAccountNumber = document.querySelector("#userAccountNumber");
let trnasferredAmount = document.querySelector("#trnasferredAmount");
let totalFinalBalance = "total balance";
let userInfo = [];


function BankAccount(userName, userAmount) {
    this.accountNumbers = Date.now();
    this.name = userName; // called as a parameters 
    this.amount = userAmount;
    this.deposit = function (amount) {  // called as method
        this.amount += amount;
    }
    this.withdrawn = (amount)=> {  // called as method
        this.amount -= amount;
    }
}

// const sohailAccount = new BacnkAccount("sohail", 1000);
// const rakeshAccount = new BacnkAccount("rakesh", 3000);
// rakeshAccount.deposit(3000);
// rakeshAccount.withdrawn(6000);
// console.log(sohailAccount);
// console.log(rakeshAccount);


accountForm.addEventListener("submit", function (e) {
    e.preventDefault();
    let BankuserName = userName.value;
    let BankuserAmount = userAmount.value;
    let userDetails = new BankAccount(BankuserName, +BankuserAmount);
    userInfo.push(userDetails);
    console.log(userInfo);
});

depositMoney.addEventListener("submit", function (events) {
    events.preventDefault();
    let userFinalBalance = userInfo.find((account) => {
      return  account.accountNumbers === +userAccountNumber.value;
    })
    if (userFinalBalance) {
        userFinalBalance.deposit(+trnasferredAmount.value);
        console.log("value of ", userFinalBalance);
        // console.log(`Amount deposited for ${userFinalBalance.name} New balance: ${userFinalBalance.amount}`)
        console.log(userInfo);
    } else {
        console.log("User account not found.");
     }
});

// let depositMoney = document.querySelector("#depositMoney");
// let userAccountNumber = document.querySelector("#userAccountNumber");
// let trnasferredAmount = document.querySelector("#trnasferredAmount");




function bankDetails(name, balance) {
    this.name = name;
    this.balance = balance;
    
}

let value = new bankDetails("sohail", 1000);
let value2 = new bankDetails("adil", 5000);

bankDetails.prototype.deposited = function (amount) {
    this.balance += amount;
}
value2.deposited(3000)
value.deposited(3000);
console.log(value)
console.log(value2);





// let arr1 = [
//     {
//         "userId": 1,
//         "id": 1,
//         "title": "ssssscepturi optio reprehenderit",
//         "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
//     },
//     {
//         "userId": 1,
//         "id": 2,
//         "title": "ttttt",
//         "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
//     },
//     {
//         "userId": 1,
//         "id": 3,
//         "title": "uuuu",
//         "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
//     },
// ];

// let titles = arr1.map(item => item.title);
// console.log(titles);



// for (var i = 0; i < 10; i++) {
//     setTimeout(() => {
//         console.log(i);
//     },1000)
//     // debugger
// };

// console.log("the value of i is", i);

// for (let i = 0; i < 10; i++) {
//     setTimeout(() => {
//         console.log(i);
//     });
//     debugger;
// }


// default parameters

// let add = (a, b = 10) => {
//   return a+b;
// };

// console.log(add(10,"sohail"));

// let fn1 = (num1,num2) => {
//     return num1+num2;
// }

// let fn2 = (value1,value2=fn1(3,2)) => {
//     return value1 + value2;
// }
// console.log(fn2(10));

// function main(a,b=main(10,2)) {
//     return a+b;
// }

// console.log(main(5));


// console.log("Lorem ipsum dolor sit, amet consectetur adipisicing elit.\
//  Natus, maxime explicabo labore quis eligendi illum dolorem a quas aperiam\
//  dolores consequuntur architecto ut minima saepe quos inventore reprehenderit\
//  \
//  dicta.Impedit.");


// find and findIndex

// let arr = [10, 20, 5, 7, 1, 100];
// function find(item){
//     return item < 20;
// }
// let index = arr.find(find);
// console.log(index);


let arrofObj = [
    {
        name: "john",
        age: 18,
        id: 1
    },
    {
        name: "peter",
        age: 13,
        id: 1
    },
    {
        name: "quinton",
        age: 45,
        id: 1
    },
    {
        name: "doe",
        age: 3,
        id: 1
    },
    {
        name: "sohail",
        age: 20,
        id: 1,

    },


];


function getData(userAge) {
    return userAge.age > 18 && userAge.age >= 13;
}

let finalOutput = arrofObj.find(getData);
console.log(finalOutput);


// use of an arow function

// let objectName = {
//     name: "test1",
//     age: 18,
//     getAge: function () {
//        return(this.age);
//     },
//     getAgeArrow: () => {
//       return(this.age)
//     }
// }
// console.log(objectName.name)

// let getAge1 = objectName.getAge();
// let getAge2 = objectName.getAgeArrow();

// console.log("use of normal function", getAge1);
// console.log("use of arrow function", getAge2);


// class in ES6

// class Person {
//     numbers = [10,12,14,15,16,17,18,19,20,21,22];
//     constructor(name,age) {
//         this.name = name;
//         this.age = age;
//     }

//     greet() {
//         console.log(`Hello ${this.name} I think you are ${this.age} years old!`)
//     }

//     filtersNumbers(callback) {
//         return this.numbers.filter(callback);
//     }
// }


// let person1Details = new Person("john", 25);
// console.log(person1Details);
// let filteredNumbers = person1Details.filtersNumbers(function (item) {
//     return item % 2 === 0;
// });
// console.log("filtered numbers are",filteredNumbers);
// person1Details.greet();

// Inheritance in javascript

class category{
    fruit() {
        console.log("apple come under the fruits category");
    }
    dryfruits() {
        return("almonds come under the dry fruits category")
    }
};


class fruits extends category{
    constructor()
    {
        super();
        console.log("Fruitsssssssss");
    }

    fruitsList() {
        return "You have the colllection of bananas and grapes"
    }
}


let fruitsStorage = new fruits;
let categoryList = new category;
// console.log(fruitsStorage.fruitsList());
console.log(fruitsStorage.dryfruits());



//benefits of using promises in js

// let valueofA = undefined;
// let valueofB = new Promise( function (resolve, reject){
//     setTimeout(() => {
//         valueofA = "Welcome to Ecmascript";
//         resolve(valueofA);
//     })
// })
// valueofB.then(function (valueFromPromise) {
//     alert(valueFromPromise);
// });

// alert(valueofA);



// array destructring in javascript
let fruitsCollection = ["Banana", "Mangoes", "Apple", "Pineapple", "Grapes"];
//Normal Array destructring in javascript
// let [item1, item2] = fruitsCollection;
// console.log(item1);
// console.log(item2);

//Normal Array destructring with skip value
// let [item1, , item2] = fruitsCollection;
// console.log(item2);

// Array destructring with Rest Operators
// let [item1, item2, ...restItem] = fruitsCollection;
// console.log(restItem);

// object destructring in javascript

// let fruitsCollectionObj = {
//     name: "sohail",
//     address: "sokhodewra",
//     district: "nawada"
// }
// let { name:personName, address:personAddress } = fruitsCollectionObj;

// console.log(personName);


// Spread Operators 
let numbers = [1, 2, 3, 4];
let newArrays = [...numbers];
function example(a,b,c,d) {
    return a + b + c + d;
}

console.log(example(...numbers))

// Rest Parameters
// function calculateAverage(...numbers) {
//     debugger;
//     let sum = 0;
//     for (let num of numbers) {
//       sum += num;
//     }
//     const average = sum / numbers.length;
//     return average;
//   }
  
// Using the calculateAverage function with varying number of arguments
//   const avg1 = calculateAverage(2, 4, 6); // Passing three arguments
//   console.log(avg1); // Output: 4


//  Exponential operators
// console.log(2**3 + (3**2))

// let ex1 = 2;
// let ex2 = 2;
// let finalOutput2 = Math.pow(ex1, ex2);
// console.log(finalOutput2);


// Module operators

//  export default function defaultTest(name) {
//     console.log("I have been called from another function", name)
// }

// let a = 10;
// let b = 10;
// let c = a + b;

// export{a,b,c};




// deep learning of += operators

// a += b
// a = a+b;
// let a = 5;
// let b = 10;
// let c = a += b;

// let count = 0;
// let number = 1;

// let result = count += 1;
// let result = count += 2;
// console.log("value of count is ", result);

// let count = 0;
// let num = 3;
// count++;
// console.log("the value of count is ", count+=num)
// count++;
// num = 4;
// console.log("the value of count is ", count+=num)
// count++;
// num = 5;
// console.log("the value of count is ", count+=num)


// deep learning of for of loops
// console.log("For of loops example")
// let arr1 = ["a", "b", "c", "d", "e"];
// for (let [index, value ] of arr1.entries()) {
//     console.log(`${index} and ${value}`);
// }

// console.log(arr1);

// deep learning of for in loops
// let numberss = [2, 3, 4, 5, 6, 7, 8, 9];
// console.log("For in loops example")
// let obj1 = {
//     name: "john",
//     lastName: "doe"
// }

// for (let key in obj1) {
//     console.log(`the value of object key is  ${key} and then value is ${obj1[key]}`);
// }

// deep learning of do while loops
// console.log("do while loops example")

// let i = 0;

// do {
//     console.log(i);
//     i++;
// } while (i < 2);
// deep learning of for loops

// console.log("For loops example")

// deep learning of loops on object


// call apply bind method in javascript

// Call Method 
// Example 1
// let student = {
//     firstName: "sohail",
//     lastName: "alam",
//     age: 30,
//     fullName: function personDetails(data) {
//         return `${this.firstName}${this.lastName}@gmail.com`
//     }
// }
// let teacher = {
//     firstName: "teacher",
//     lastName: "alam",
//     age: 30,

// }
// let result = student.fullName();
// let attached = student.fullName.call(teacher)
// let result2 = attached;
// console.log(result);
// console.log(attached);

// Example2
let student = {
    firstName: "sohail",
    lastName: "alam",
    age: 30,
}
let teacher = {
    firstName: "teacher",
    lastName: "alam",
    age: 30,
}

function personDetails(data) {
    return `${this.firstName}${this.lastName}@gmail.com`
}

function chooseSubjects(one) {
    return one;
}

let result = personDetails.call(student);
let result2 = personDetails.call(teacher);
let result3 = chooseSubjects.apply(teacher,["abc"]);
console.log(result);
console.log(result2);
console.log(result3);