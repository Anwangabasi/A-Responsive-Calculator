/** TARGETING THE THEME INPUTS ID */
const theme1 = document.getElementById("theme-1");
const theme2 = document.getElementById("theme-2");
const theme3 = document.getElementById("theme-3");

/** TARGETING THE DISPLAY CONTAINER */
const previousOperand = document.getElementsByClassName("prevOperand");
const currOperand = document.getElementsByClassName("currOperand");

/** TARGETING THE CALCULATOR CONTAINER */
const numBtn = document.querySelectorAll("num-btn");
const operatorBtn = document.querySelectorAll(".operator-btn");
const delBtn = document.getElementById("del-btn");
const resetBtn = document.getElementById("reset-btn");
const outputBtn = document.getElementById("output-btn");

/** SWITCHING BETWEEN THEME 1, THEME 2, THEME 3 */

theme1.addEventListener("click", () => themeSwitcher("theme1"));
theme2.addEventListener("click", () => themeSwitcher("theme2"));
theme3.addEventListener("click", () => themeSwitcher("theme3"));

function themeSwitcher(classname) {
  //   if (classname === "theme1") {
  //     document.documentElement.classList.remove("theme2");
  //     document.documentElement.classList.remove("theme3");
  //   } else if (classname === "theme2") {
  //     document.documentElement.classList.remove("theme3");
  //     document.documentElement.classList.toggle("theme2");
  //   } else if (classname === "theme3") {
  //     document.documentElement.classList.remove("theme2");
  //     document.documentElement.classList.toggle("theme3");
  //   }

  /** REMOVE ALL SELECTED THEME CLASSES */
  document.documentElement.classList.remove("theme2", "theme3");

  /** ADD SELECTED THEME CLASS*/
  document.documentElement.classList.add(classname);
}
