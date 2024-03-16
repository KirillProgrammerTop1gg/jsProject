const number = document.querySelector('.calc__number')
const number2 = document.querySelector('.calc__number2')
let equals = document.querySelector('.calc__result')

const buttonMinus = document.querySelector("#button1")
const buttonAdditive = document.querySelector("#button2")
const buttonMultiplie = document.querySelector("#button3")
const buttonDivide = document.querySelector("#button4")
const buttonResult = document.querySelector(".calc__equals")

let calcEvent = ""

buttonMinus.addEventListener("click", () => calcEvent = "-")
buttonAdditive.addEventListener("click", () => calcEvent = "+")
buttonMultiplie.addEventListener("click", () => calcEvent = "*")
buttonDivide.addEventListener("click", () => calcEvent = "/")

buttonResult.addEventListener("click", () => c.innerHTML = eval(number.value + calcEvent + number2.value))
console.log()