const inputbox = document.getElementById("inputbox");
const clearBtn = document.getElementById("clear-btn");
const equalBtn = document.querySelector(".btnequal");

let expression = "";
function press(char) {
  expression += char;
  inputbox.value = expression;
}

function calculate() {
  inputbox.value = "";
  let answer = eval(expression);
  inputbox.value = answer;
  expression = answer;
}

function clearCal() {
  inputbox.value = "";
  expression = "";
}
