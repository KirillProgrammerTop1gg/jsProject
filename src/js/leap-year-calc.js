const butEl = document.querySelector('.leap-year__but');
const inputEl = document.querySelector('.leap-year__input');
const resultEl = document.querySelector('.leap-year__result');

butEl.addEventListener('click', () => {
    resultEl.innerHTML = inputEl.value % 4 === 0 ? 'Ви народилися у високосний рік!' : 'Ви народилися не у високосний рік!';
    resultEl.style.color = inputEl.value % 4 === 0 ? '#039900' : '#900';
});