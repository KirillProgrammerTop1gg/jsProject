const inputGuess = document.querySelector(".guess-the-number__input")
const buttonGuess = document.querySelector(".guess-the-number__button")
const dandruffGuessSvg = document.querySelector(".guess-the-number__svg")
const answerGuess = document.querySelector(".guess-the-number__text")

const secretNumber = Math.floor(Math.random() * 100) + 1;
const guess = inputGuess.value;
buttonGuess.addEventListener('click', (event) => {
    if (guess === secretNumber) {
        answerGuess.textContent = `Вітаю, ви вгадали число! ${secretNumber}`
    } else {
        answerGuess.textContent = `Ви програли, комп’ютер загадав ${secretNumber}`
    }
})