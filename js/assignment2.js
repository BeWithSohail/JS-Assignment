
const sohail = {
  born: 1995,
  age: 27,
  gender: "Male",
  height: 188,
  ProgrammingSkills: ["HMTL", "CSS", "JS", "GIT"]
};

function showDetails(player) {
   console.log(`Player born in ${player.born}`)
   console.log(`Player age is ${player.age}`)
   console.log(`Player gender is ${player.gender}`)
   console.log(`Player height is ${player.height}`)
   console.log(`Player favourite programming language is ${player.ProgrammingSkills[2]}`)
};
showDetails(sohail);

function func(a, b, c = a+b) {
  console.log(a);
  console.log(b);
  console.log(c);
}

func(1, 2);


//Example of callback function in javascript

function add(a, b) {
  return a + b;
}

function divide(a, b) {
  return a / b;
}

function calculate(x, y, operation) {
  return operation (x, y);
}

console.log(calculate(2, 2, add)); 
console.log(calculate(2, 2, divide));


// calculate shape area 
// function calculateArea(shape, params) {
//   if (shape === 'circle' && params.radius) {
//     const area = Math.PI * Math.pow(params.radius, 2);
//     console.log(area.toFixed(2));
//       return `The area of the circle is ${area.toFixed(2)} square units.`;
//   } else if (shape === 'rectangle' && params.length && params.width) {
//       const area = params.length * params.width;
//       return `The area of the rectangle is ${area} square units.`;
//   } else if (shape === 'triangle' && params.base && params.height) {
//       const area = (params.base * params.height) / 2;
//       return `The area of the triangle is ${area} square units.`;
//   } else {
//       return "Invalid shape or missing parameters.";
//   }
// }

// // Example usages:
// const circleArea = calculateArea('circle', { radius: 5 });
// console.log(circleArea);

// const rectangleArea = calculateArea('rectangle', { length: 6, width: 4 });
// console.log(rectangleArea);

// const triangleArea = calculateArea('triangle', { base: 8, height: 5 });
// console.log(triangleArea);

// const invalidShape = calculateArea('square', { side: 4 });
// console.log(invalidShape);
