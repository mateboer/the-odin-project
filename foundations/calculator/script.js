(function index() {
  document.addEventListener("DOMContentLoaded", main);
})();

function main() {
  createDigits();
  createOperators();
  document
    .querySelector("#digitsContainer")
    .addEventListener("click", onDigitClick);
  document
    .querySelector("#operatorsContainer")
    .addEventListener("click", onOperatorClick);
    document
      .querySelector("#enter")
      .addEventListener("click", enter);
}

function createDigits() {
  const container = document.querySelector("#digitsContainer");
  for (let i = 0; i < 10; i++) {
    createDigit(container, i);
  }
}

function createDigit(container, i) {
  const digit = document.createElement("button");
  digit.classList.add("digit");
  digit.textContent = i;
  container.appendChild(digit);
}

function createOperators() {
  const container = document.querySelector("#operatorsContainer");
  const operators = ["+", "-", "*", "/"];
  operators.forEach((operator) => createOperator(container, operator));
}

function createOperator(container, symbol) {
  const operator = document.createElement("button");
  operator.classList.add("operator");
  operator.textContent = symbol;
  container.appendChild(operator);
}

function onDigitClick(event) {
  const digit = event.target.textContent;
  const { leftOperand, operator, rightOperand } = getInput();

  if (operator.textContent) {
    setRightOperandValue(rightOperand.textContent + digit);
    return;
  }

  setLeftOperandValue(leftOperand.textContent + digit);
}

function onOperatorClick(event) {
  const newOperator = event.target.textContent;
  const { leftOperand, rightOperand } = getInput();

  if (!leftOperand.textContent) setLeftOperandValue(0);

  if (rightOperand.textContent) enter();

  setOperatorValue(newOperator);
}

function enter() {
  const { leftOperand, operator, rightOperand } = getInput();
  if (rightOperand.textContent) {
    const result = calculate(
      leftOperand.textContent,
      operator.textContent,
      rightOperand.textContent
    );
    setLeftOperandValue(result);
    setOperatorValue("");
    setRightOperandValue("");
    return;
  }

  if (leftOperand.textContent) {
    setOperatorValue("");
  }
}

function calculate(leftOperandValue, operatorValue, rightOperandValue) {
  switch (operatorValue) {
    case "+":
      return parseInt(leftOperandValue) + parseInt(rightOperandValue);
    case "-":
      return parseInt(leftOperandValue) - parseInt(rightOperandValue);
    case "*":
      return parseInt(leftOperandValue) * parseInt(rightOperandValue);
    case "/":
      return Math.round(parseInt(leftOperandValue) / parseInt(rightOperandValue));
  }
}

function getInput() {
  return {
    leftOperand: getLeftOperand(),
    operator: getOperator(),
    rightOperand: getRightOperand(),
  };
}

function getLeftOperand() {
  return document.querySelector("#left");
}

function setLeftOperandValue(value) {
  getLeftOperand().textContent = value;
}

function getRightOperand() {
  return document.querySelector("#right");
}

function setRightOperandValue(value) {
  getRightOperand().textContent = value;
}

function getOperator() {
  return document.querySelector("#operator");
}

function setOperatorValue(op) {
  getOperator().textContent = op;
}
