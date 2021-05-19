const add = (operator1, operator2) => operator1 + operator2; 

const subtract = (operator1, operator2) => operator1 - operator2;

const devide = (operator1, operator2) => operator1 / operator2;

const multiply = (operator1, operator2) => operator1 * operator2;

const operate = (operator, number1, number2) => add;

let displayValue;

document.getElementById("clear").onclick = () => document.getElementById("result_input").value = '0';

document.getElementById("number1").onclick = () => document.getElementById("result_input").value = 1;
document.getElementById("number2").onclick = () => document.getElementById("result_input").value = '2';
document.getElementById("number3").onclick = () => document.getElementById("result_input").value = '3';
document.getElementById("number4").onclick = () => document.getElementById("result_input").value = '4';
document.getElementById("number5").onclick = () => document.getElementById("result_input").value = '5';
document.getElementById("number6").onclick = () => document.getElementById("result_input").value = '6';
document.getElementById("number7").onclick = () => document.getElementById("result_input").value = '7';
document.getElementById("number8").onclick = () => document.getElementById("result_input").value = '8';
document.getElementById("number9").onclick = () => document.getElementById("result_input").value = '9';









