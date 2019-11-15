import {modulo} from "./modulo.js";

// const modulo = require("./modulo.js");
//Looking for the html element '.btnAdd' in the the index.html
//and assign it to a variables called btnSubstract
//the '.' at the front signifies that we are looking
//for the class name
const btnAdd = document.querySelector('.btnAdd');

//the same as above.
//we look for the html element with the class name '.btnSubstract'
//which happens to be button
const btnSubtract = document.querySelector('.btnSubtract');
const btnMultiply = document.querySelector('.btnMultiply');
const btnModulo = document.querySelector('.btnModulo');
//the two text field that takes input
const numField1 = document.querySelector('.num1');
const numField2 = document.querySelector('.num2');
//the label that display the result
const lblResult = document.querySelector('.lblResult');



let subtract = (num1, num2) => {
  try 
  {
    let answer = num1 - num2;
    if (isNaN(answer)) {
      throw "This is not a number." 
    }
    return answer;
  }
  catch( err ) {
    return("caught an error " + err);
  }
}

// addition function for collab calculator 
let add = (num1, num2) =>
{
  try
  {
    answer = num1 + num2
    if(isNaN(answer))
    {
      throw "This is not a number, please only input numbers";
    }
    return answer; 
  }
  catch( error )
  {
    return( `Error:${ error }`);
  }
  finally 
  {
    // insert code to call input again?
  }
};

let multiply = (num0, num1) => {
  return num0 * num1;
}

//A function to be added to the event listener
function myAdd(){
  //convert the value of the textfields and
  //assign them to respective variables
  let num1 = Number(numField1.value);
  let num2 = Number(numField2.value);
  //call the function that Lev's wrote and
  //assign the returned value to the label.
  //textContent, as the name suggested, is a property
  //of the label that store the text value
  lblResult.textContent = add(num1, num2);
}

//read comment on myAdd to make sense of the code below
function mySubtract(){
  let num1 = Number(numField1.value);
  let num2 = Number(numField2.value);
  lblResult.textContent = subtract(num1, num2);
}

//read comment on myAdd to make sense of the code below
function myMultiply(){
  let num1 = Number(numField1.value);
  let num2 = Number(numField2.value);
  lblResult.textContent = multiply(num1, num2);
}

function myModulo(){
  let num1 = Number(numField1.value);
  let num2 = Number(numField2.value);
  lblResult.textContent = modulo(num1, num2);
}

//make an event listener to the button
//and tell it to call the methods if it is clicked
btnAdd.addEventListener("click", myAdd);
btnSubtract.addEventListener("click", mySubtract);
btnMultiply.addEventListener("click", myMultiply);
btnModulo.addEventListener("click", myModulo);

