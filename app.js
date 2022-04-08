function operatorAction(eve) {
  let btn = eve.target;
  // Add the inner html for the operator buttons into the results field
  document.getElementById("res").insertAdjacentHTML("beforeend", btn.innerHTML);
}

function operation() {
  let value = res.innerHTML;
  value = Math.floor(eval(value.replace(/([01]+)/g, "0b$1"))).toString(2);
  document.getElementById("res").innerHTML = value;
}
document.getElementById("btn0").onclick = operatorAction;
document.getElementById("btn1").onclick = operatorAction;
document.getElementById("btnSum").onclick = operatorAction;
document.getElementById("btnMul").onclick = operatorAction;
document.getElementById("btnDiv").onclick = operatorAction;
document.getElementById("btnSub").onclick = operatorAction;
document.getElementById("btnEql").onclick = operation;

document.getElementById("btnClr").addEventListener("click", () => {
  document.getElementById("res").innerHTML = "";
});
