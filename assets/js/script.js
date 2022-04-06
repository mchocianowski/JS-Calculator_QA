`use strict`;
import * as DOM from "./dom.js";

let calculatorAdd = () => {
  let num1 = parseInt(DOM.inputOne.value);
  let num2 = parseInt(DOM.inputTwo.value);
  let listItem = document.createElement(`li`);
  listItem.classList.add(`list-group-item`);
  listItem.innerHTML = `${num1} + ${num2} = `+ (num1+num2);
  document.getElementById(`list_output`).appendChild(listItem); //parent.appendChild(child);
};

let calculatorSubtract = (int) => {
  let num1 = parseInt(DOM.inputOne.value);
  let num2 = parseInt(DOM.inputTwo.value);
  let listItem = document.createElement(`li`);
  listItem.classList.add(`list-group-item`);
  listItem.innerHTML =`${num1} - ${num2} = `+ (num1 - num2);
  document.getElementById(`list_output`).appendChild(listItem); //parent.appendChild(child);
};

let calculatorMultiply = (int) => {
  let num1 = parseInt(DOM.inputOne.value);
  let num2 = parseInt(DOM.inputTwo.value);
  let listItem = document.createElement(`li`);
  listItem.classList.add(`list-group-item`);
  listItem.innerHTML = `${num1} * ${num2} = ` +(num1 * num2);
  document.getElementById(`list_output`).appendChild(listItem); //parent.appendChild(child);
};

let calculatorDivide = (int) => {
  let num1 = parseInt(DOM.inputOne.value);
  let num2 = parseInt(DOM.inputTwo.value);
  let listItem = document.createElement(`li`);
  listItem.classList.add(`list-group-item`);
  listItem.innerHTML = `${num1} / ${num2} = ` +(num1 / num2);
  document.getElementById(`list_output`).appendChild(listItem); //parent.appendChild(child);
};

let emptyCalculator = () => {
    let list = document.getElementById(`list_output`);
    list.innerHTML = ` `;
    document.getElementById(`list-body`).appendChild(list);
}

DOM.buttonAdd.onclick = () => calculatorAdd();
DOM.buttonSubtract.onclick = () => calculatorSubtract();
DOM.buttonMultiply.onclick = () => calculatorMultiply();
DOM.buttonDivide.onclick = () => calculatorDivide();
DOM.buttonEmpty.onclick = () => emptyCalculator();