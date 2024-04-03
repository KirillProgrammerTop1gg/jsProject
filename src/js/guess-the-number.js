const inputEl = document.querySelector(".guess-the-number__input")
const buttonEl = document.querySelector(".guess-the-number__but")
const resultEl = document.querySelector(".guess-the-number__result")

buttonEl.addEventListener('click', () => {
    if (isNaN(inputEl.value) || inputEl.value === '') {
        resultEl.innerHTML = 'Ви не ввели число';
        resultEl.style.color = localStorage.getItem('theme') === 'true' ? '#fff' : '#000';
    }
    else {
        const randNum = Math.floor(Math.random() * 9 + 1);
        resultEl.innerHTML = Number(inputEl.value) === randNum ? `Вітаю, ви вгадали число! (${randNum})` : `Ви програли, комп’ютер загадав (${randNum})`;
        resultEl.style.color = Number(inputEl.value) === randNum ? '#039900' : '#900';
        inputEl.value = '';
    }
})