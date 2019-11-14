//import Add script
//import Subtract script
//import multiply script
//import divide script
import 'modulo.js'

const btnAdd = document.querySelector('.btnAdd');
const btnSubtract = document.querySelector('.btnSubtract');
const btnMultiply = document.querySelector('.btnMultiply');
const btnDivide = document.querySelector('.btnDivide');

const numField1 = document.querySelector('.num1');
const numField2 = document.querySelector('.num2');

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
let add= (num1, num2) =>
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

btnAdd.addEventListener("click", add);
btnSubtract.addEventListener("click", subtract);
btnMultiply.addEventListener("click", multiply);
btnDivide.addEventListener("click", divide);
