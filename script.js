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

function add(){

}

function subtract(){

}

let multiply = (num0, num1) => {
  return num0 * num1;
}

function divide(){

}
btnAdd.addEventListener("click", add);
btnSubtract.addEventListener("click", subtract);
btnMultiply.addEventListener("click", multiply);
btnDivide.addEventListener("click", divide);