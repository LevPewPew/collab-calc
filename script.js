//import Add script
//import Subtract script
//import multiply script
//import divide script

const btnAdd = document.querySelector('.btnAdd');
const btnSubtract = document.querySelector('.btnSubtract');
const btnMultiply = document.querySelector('.btnMultiply');
const btnDivide = document.querySelector('.btnDivide');

const numField1 = document.querySelector('.num1');
const numField2 = document.querySelector('.num2');

function add(){

}


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

function multiply(){

}

function divide(){

}
btnAdd.addEventListener("click", add);
btnSubtract.addEventListener("click", subtract);
btnMultiply.addEventListener("click", multiply);
btnDivide.addEventListener("click", divide);