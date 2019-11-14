//import Add script
//import Subtract script
//import multiply script
//import divide script
// import './modulo.js';

const btnAdd = document.querySelector('.btnAdd');
const btnSubtract = document.querySelector('.btnSubtract');
const btnMultiply = document.querySelector('.btnMultiply');
const btnModulo = document.querySelector('.btnModulo');
const numField1 = document.querySelector('.num1');
const numField2 = document.querySelector('.num2');
const lblResult = document.querySelector('.lblResult');

let subtract = (num1, num2) => {
  try 
  {
    answer = num1 - num2;
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

function myAdd(){
  let num1 = Number(numField1.value);
  let num2 = Number(numField2.value);
  lblResult.textContent = add(num1, num2);
}

function mySubtract(){
  let num1 = Number(numField1.value);
  let num2 = Number(numField2.value);
  lblResult.textContent = subtract(num1, num2);
}

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

btnAdd.addEventListener("click", myAdd);
btnSubtract.addEventListener("click", mySubtract);
btnMultiply.addEventListener("click", myMultiply);
btnModulo.addEventListener("click", myModulo);

