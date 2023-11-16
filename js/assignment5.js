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
let formElements = document.querySelector(".form_elements");
let inputText = document.getElementById("search_text");
let toDoitems = document.querySelector(".todoitems");
let spanText = document.querySelector(".text_todo");
// submission function
let sumbissionFunction = function (e){
    e.preventDefault();
    // console.log(e.target); 
    let searchInputValue = inputText.value;
    console.log(searchInputValue);
    const newliElements = document.createElement("li");
    const storedValue = `
        <span class="text_todo"> 
            ${searchInputValue}
        </span> 
        <div class="btn_container">      
            <button class="todo-btn done"> Done </button>
            <button class="todo-btn remove"> Remove </button>
        </div>
    `
    newliElements.innerHTML = storedValue;
    toDoitems.append(newliElements);
}

// operation function
let operation = function (e) {
    let targettedElements = e.target;
    if (targettedElements.classList.contains("remove")) {
        let removedElements = targettedElements.parentNode.parentNode;
        removedElements.remove();
    };
    if (targettedElements.classList.contains("done")){
        let applyStrikeThrough = targettedElements.parentNode.previousElementSibling;
        applyStrikeThrough.style.textDecoration = "line-through";
    };
}

formElements.addEventListener("submit",sumbissionFunction);
toDoitems.addEventListener('click',operation);
