const screen = document.querySelector("#res");
const zero = document.querySelector("#btn0");
const one = document.querySelector("#btn1");
const clr = document.querySelector("#btnClr");
const eql = document.querySelector("#btnEql");
const sum = document.querySelector("#btnSum");
const sub = document.querySelector("#btnSub");
const mul = document.querySelector("#btnMul");
const div = document.querySelector("#btnDiv");

let opr = "";
screen.innerHTML = "";

function operatorCheck() {
  if (
    screen.innerHTML.endsWith("+") ||
    screen.innerHTML.endsWith("-") ||
    screen.innerHTML.endsWith("*") ||
    screen.innerHTML.endsWith("/")
  ) {
    return true;
  }
}
function findOperator() {
  let str = screen.innerHTML;
  if (
    str.includes("+") ||
    str.includes("-") ||
    str.includes("*") ||
    str.includes("/")
  ) {
    return true;
  }
}

function btnZero() {
  screen.innerHTML += "0";
}
function btnOne() {
  screen.innerHTML += "1";
}
function btnClr() {
  screen.innerHTML = "";
  opr = "";
}
function btnSum() {
  if (screen.innerHTML.length != 0 && !operatorCheck() && !findOperator()) {
    screen.innerHTML += "+";
  }
  opr = "+";
}
function btnSub() {
  if (screen.innerHTML.length != 0 && !operatorCheck() && !findOperator()) {
    screen.innerHTML += "-";
  }
  opr = "-";
}
function btnMul() {
  if (screen.innerHTML.length != 0 && !operatorCheck() && !findOperator()) {
    screen.innerHTML += "*";
  }
  opr = "*";
}
function btnDiv() {
  if (screen.innerHTML.length != 0 && !operatorCheck() && !findOperator()) {
    screen.innerHTML += "/";
  }
  opr = "/";
}
function btnEql() {
  let str = screen.innerHTML;
  let arr = str.split(opr);

  let val1 = arr[0];
  let val2 = arr[1];
  let result;

  val1 = parseInt(val1, 2);
  val2 = parseInt(val2, 2);

  if (opr == "+") {
    result = (val1 + val2).toString(2);
  } else if (opr == "-") {
    result = (val1 - val2).toString(2);
  } else if (opr == "*") {
    result = (val1 * val2).toString(2);
  } else if ((opr = "/")) {
    result = (val1 / val2).toString(2);
  } else {
    result = str;
  }

  screen.innerHTML = result;
}
