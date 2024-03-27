const eventsEl = document.querySelectorAll('.rps__but');
const paperEventEl = document.querySelector('.rps__but[data-event="paper"]');
const stoneEventEl = document.querySelector('.rps__but[data-event="stone"]');
const scissorsEventEl = document.querySelector('.rps__but[data-event="scissors"]');
const resultEl = document.querySelector('.rps__result');
const resultsEl = document.querySelector('.rps__results');
const compVarEl = document.querySelector('.rps__compVar');
let comp = 0;
let player = 0;
let playerEv = '';

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
const activePlayEv = (plaEv, playerEvEl) => {
    eventsEl.forEach(eventEl => eventEl.style.backgroundColor = '#000')
    playerEv = plaEv;
    playerEvEl.style.backgroundColor = 'rgb(189, 189, 189)';
}
paperEventEl.addEventListener('click', () => activePlayEv('paper', paperEventEl));
scissorsEventEl.addEventListener('click', () => activePlayEv('scissors', scissorsEventEl));
stoneEventEl.addEventListener('click', () => activePlayEv('stone', stoneEventEl));
compVarEl.addEventListener('click', () => rpsGame(playerEv));