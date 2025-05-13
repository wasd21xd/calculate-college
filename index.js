// точка входа в нашу программу

// соедними бизнес логику с аользовательским интерфейсом

import calculate from "./calculate.js";

const inputaNode = document.querySelector(".js__input__A");
const  inputBNode = document.querySelector(".js__input__B");
const selectOperationNode = document.querySelector(".js__select__operation");
const resultNode = document.querySelector(".js__btn");
const outputNode = document.querySelector(".js__output");

resultNode.addEventListener('click', () => {
   const a = Number(inputaNode.value);
   const b = Number(inputBNode.value);
    const operation = selectOperationNode.value;

    const result = calculate(a, b, operation);

    outputNode.textContent = `Результат: ${result}`;
});

