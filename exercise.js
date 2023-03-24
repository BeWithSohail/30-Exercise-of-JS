
// How to To Add To Numbers
let number1 = prompt("Enter a number");
let number2 = prompt ("Enter a number");
let finalNumber = parseInt(number1) + parseInt(number2)
console.log(finalNumber);

//  How to find the square root of a number 
let number = prompt("Enter a Number");
let answer = Math.sqrt(number);
console.log(answer)

// How to Calculate the Area of a Triangle
// General Formula of we use (base * height) / 2
// Formula to calculate the area of a triangle 
// (base * height) / 2
let base = prompt("Enter the base "); 
let height = prompt("Enter the height");
let area =  (base * height)/2;
console.log("Base is " + base + " and " + " height " + height + " and total ares is " + area);

// How to Swap two variable Two Numbers Using temporary Variable & Without Temporary Variable
let val1 = prompt("Enter the value of val1 "); 
let val2 = prompt("Enter the value of val2");
console.log(`the value of val1 is  ${val1} and the value of val2 is ${val2}`);
let temporaryNumber;
temporaryNumber = val1;
val1 = val2;
val2 = temporaryNumber;
console.log(`After swapping the value of val1 is  ${val1} and the value of val2 is ${val2}`);

// How to Convert kilometers to miles using JavaScript Function
// 1 kilometers =  0.621371 miles
// 2 kilometers = 1.24274
function convertmiles(){
  let factor = 0.621371;
  let inputValue = document.getElementById("kilometers").value;
  let result = (inputValue * factor);
  //alert(result);
  let textValue = document.getElementById("miles");
  textValue.innerText = `${result} Miles`
}
document.getElementById("btn").addEventListener("click",convertmiles);

// How to Convert Celsius to Fahrenheit using JavaScript Function


// How to 
// How to 
// How to 
// How to 
// How to 
// How to 
// How to 
// How to 
// How to 
// How to 
// How to 
// How to 
