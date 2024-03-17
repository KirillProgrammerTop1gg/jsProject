const paperEventEl = document.querySelector('.rps__but[data-event="paper"]');
const stoneEventEl = document.querySelector('.rps__but[data-event="stone"]');
const scissorsEventEl = document.querySelector('.rps__but[data-event="scissors"]');
const resultEl = document.querySelector('.rps__result');
const resultsEl = document.querySelector('.rps__results');
const compVarEl = document.querySelector('.rps__compVar');
let comp = 0;
let player = 0;

const showResults = (wls) => {
    if (wls) {
        resultEl.innerHTML = 'Комп’ютер виграв раунд!';
        resultEl.style.color = '#900';
        comp++;
    }
    else {
        resultEl.innerHTML = 'Ви виграли раунд!';
        resultEl.style.color = '#039900';
        player++;
    }
    resultsEl.innerHTML = `
        Рахунок: <br>
        Комп’ютер - ${comp} <br>
        Ви - ${player}
    `;
}

const rpsGame = (ev) => {
    const robotEvents = ['paper', 'stone', 'scissors'];
    const robotEv = robotEvents[Math.round(Math.random() * 2)];
    console.log(robotEv, ev)
    resultEl.style.display = 'block';
    if (robotEv === ev) {
        resultEl.innerHTML = 'нічия';
        resultEl.style.color = '#000';
        return;
    }
    switch (robotEv) {
        case 'paper':
            showResults(ev === 'stone' ? 1 : 0);
            break;
        case 'scissors':
            showResults(ev === 'paper' ? 1 : 0);
            break;
        case 'stone':
            showResults(ev === 'scissors' ? 1 : 0);
            break;
    }
}
paperEventEl.addEventListener('click', () => rpsGame('paper'));
scissorsEventEl.addEventListener('click', () => rpsGame('scissors'));
stoneEventEl.addEventListener('click', () => rpsGame('stone'));
compVarEl.addEventListener('click', () => rpsGame(['paper', 'stone', 'scissors'][Math.round(Math.random() * 2)]));